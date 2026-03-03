"use client";

import { useEffect, useState } from "react";
import faqs from "@/data/faqs.json";
import galleryItems from "@/data/gallery-items.json";
import menuItems from "@/data/menu-items.json";
import testimonials from "@/data/testimonials.json";
import { AboutSection } from "./AboutSection";
import { BackToTopButton } from "./BackToTopButton";
import { FaqContactSection } from "./FaqContactSection";
import { FooterSection } from "./FooterSection";
import { GallerySection } from "./GallerySection";
import { HeaderSection } from "./HeaderSection";
import { HeroSection } from "./HeroSection";
import { MenuSection } from "./MenuSection";
import { TestimonialsSection } from "./TestimonialsSection";

export function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 480);
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -32px 0px" },
    );

    revealEls.forEach((el, index) => {
      el.style.transitionDelay = `${Math.min(index * 60, 240)}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(209,141,84,0.22),_transparent_45%),radial-gradient(circle_at_80%_20%,_rgba(83,53,28,0.2),_transparent_42%)]" />
      <div className="float-orb pointer-events-none absolute -left-16 top-24 -z-10 h-48 w-48 rounded-full bg-[color:var(--coffee-accent)]/20 blur-2xl" />

      <HeaderSection
        isScrolled={isScrolled}
        mobileOpen={mobileOpen}
        onToggleMobileMenu={() => setMobileOpen((prev) => !prev)}
        onCloseMobileMenu={() => setMobileOpen(false)}
      />

      <main id="home" className="mx-auto w-full max-w-6xl px-6 pb-20">
        <HeroSection />
        <MenuSection items={menuItems} />
        <AboutSection />
        <GallerySection items={galleryItems} />
        <TestimonialsSection items={testimonials} />
        <FaqContactSection items={faqs} />
      </main>

      <FooterSection />
      <BackToTopButton show={showTopButton} />
    </div>
  );
}

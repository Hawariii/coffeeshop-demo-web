import { useEffect, useState } from "react";
import faqs from "@/data/faqs.json";
import galleryItems from "@/data/gallery-items.json";
import menuItems from "@/data/menu-items.json";
import testimonials from "@/data/testimonials.json";
import { AboutSection } from "./home/AboutSection";
import { BackToTopButton } from "./home/BackToTopButton";
import { FaqContactSection } from "./home/FaqContactSection";
import { FooterSection } from "./home/FooterSection";
import { GallerySection } from "./home/GallerySection";
import { HeaderSection } from "./home/HeaderSection";
import { HeroSection } from "./home/HeroSection";
import { MenuSection } from "./home/MenuSection";
import { TestimonialsSection } from "./home/TestimonialsSection";

export default function Page() {
  return <HomePage />;
}

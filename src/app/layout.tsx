import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ember & Bean | Coffee Shop Landing Page",
  description:
    "Specialty coffee shop dengan menu signature, suasana cozy, dan reservasi mudah untuk meeting atau quality time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

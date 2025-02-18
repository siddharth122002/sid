import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siddharth Kumar | Full-Stack Developer Portfolio",
  description:
    "I am a full-stack developer with expertise in Next.js, React, GSAP, and the MERN stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

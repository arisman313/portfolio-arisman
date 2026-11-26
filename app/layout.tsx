import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arisman Ismail — Fullstack JavaScript Developer",
  description:
    "Portfolio Arisman Ismail, Fullstack JavaScript Developer yang membangun pengalaman digital intuitif dengan JavaScript, React, Next.js, dan Node.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Tentang", href: "#about" },
    { label: "Keahlian", href: "#skills" },
    { label: "Proyek", href: "#projects" },
    { label: "Hubungi saya", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#e9e8ef] bg-[#fbfaff]/90 backdrop-blur-md">
      <nav className="relative mx-auto flex h-[76px] max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-12">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-[-0.08em] text-[#22213b]"
        >
          Home<span className="text-[#8b7ae8]">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-9 text-[13px] font-medium text-[#68677c] sm:flex">
          {menuItems.slice(0, 3).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#27263f]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Contact */}
        <a
          href="#contact"
          className="hidden rounded-full border border-[#dcd8f7] px-4 py-2 text-[13px] font-semibold text-[#51469b] transition-colors hover:bg-[#f0edff] sm:inline-block"
        >
          Hubungi saya ↗
        </a>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#dcd8f7] sm:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-[#51469b] transition-all ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-[#51469b] transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-[#51469b] transition-all ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute left-0 top-full w-full border-b border-[#e9e8ef] bg-[#fbfaff] px-6 py-5 shadow-lg sm:hidden">
            <div className="flex flex-col gap-5 text-sm font-medium text-[#68677c]">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="transition-colors hover:text-[#8b7ae8]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-500 ${
              scrolled ? "bg-navy" : "bg-white/10 backdrop-blur-sm border border-white/20"
            }`}>
              <span className="text-white text-sm font-medium">G</span>
            </div>
            <span className={`font-semibold text-[15px] tracking-tight transition-colors duration-500 ${
              scrolled ? "text-gray-900" : "text-white"
            }`}>
              은혜의교회
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link px-3.5 py-2 text-[13px] font-medium transition-colors duration-500 ${
                  scrolled
                    ? "text-gray-500 hover:text-gray-900"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "hover:bg-gray-100 text-gray-600" : "hover:bg-white/10 text-white"
            }`}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-[500px] pb-4" : "max-h-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg p-2 mt-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-[14px] text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

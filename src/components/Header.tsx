"use client";

import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-navy text-white/60 text-[11px] hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><Phone className="w-3 h-3" /> 032-866-3434</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> 인천시 미추홀구 매소홀로 428</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="http://staff.gracecc.or.kr/" className="hover:text-white/90 transition-colors">예배 Staff</a>
            <span className="text-white/20">|</span>
            <a href="http://www.jesuson.net/interface/BizMenu.aspx?church_id=gracecc" className="hover:text-white/90 transition-colors">기부금영수증</a>
            <span className="text-white/20">|</span>
            <a href="https://www.youtube.com/channel/UCXot4EKfUM7ppJdUxdLsdlg/live" className="hover:text-white/90 transition-colors flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full pulse-live" /> LIVE
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center">
                <span className="text-white text-sm font-bold tracking-tight">G</span>
              </div>
              <div className="leading-tight">
                <div className="font-bold text-[15px] text-gray-900 tracking-tight">은혜의교회</div>
                <div className="text-[10px] text-gray-400 tracking-wider">GRACE COMMUNITY CHURCH</div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-[13px] font-medium text-gray-500 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile */}
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 -mr-2 hover:bg-gray-50 rounded-lg">
              {open ? <X className="w-5 h-5 text-gray-600" /> : <Menu className="w-5 h-5 text-gray-600" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] pb-3" : "max-h-0"}`}>
            <div className="border-t border-gray-100 pt-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 text-[14px] text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-gray-100 mt-2 pt-2 px-3 flex flex-col gap-2 text-[12px] text-gray-400">
                <a href="http://staff.gracecc.or.kr/">예배 Staff</a>
                <a href="http://www.jesuson.net/interface/BizMenu.aspx?church_id=gracecc">기부금영수증</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

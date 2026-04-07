"use client";

import { useState, useEffect } from "react";
import { CHURCH_INFO } from "@/lib/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    subtitle: CHURCH_INFO.sloganEn,
    title: "예수님의 온전한 제자되어",
    highlight: "상처가 별이되는 은혜의 공동체",
    cta: { label: "LIVE 예배 시청", href: CHURCH_INFO.youtubeLive },
    bg: "from-navy via-navy-light to-navy",
  },
  {
    subtitle: "Sunday Worship",
    title: "주일 예배 안내",
    highlight: "본교 8:30 · 11:00 | 송도 8:30 · 11:00 · 1:00",
    cta: { label: "예배 시간 보기", href: "#worship" },
    bg: "from-[#1a1a3e] via-[#2d2b55] to-[#1a1a3e]",
  },
  {
    subtitle: "New Family",
    title: "새가족을 환영합니다",
    highlight: "4주 새가족 과정으로 함께 시작하세요",
    cta: { label: "자세히 보기", href: "#newfamily" },
    bg: "from-[#1e3a2f] via-[#264a3a] to-[#1e3a2f]",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % SLIDES.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${slide.bg} transition-all duration-700`} />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px"
      }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        <div className="py-16 sm:py-20 lg:py-24 min-h-[320px] sm:min-h-[380px] flex flex-col justify-center">
          <div className="max-w-2xl">
            <p className="text-white/40 text-[11px] sm:text-xs tracking-[0.2em] uppercase mb-4 font-medium transition-all duration-500">
              {slide.subtitle}
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-white leading-tight mb-3 tracking-tight transition-all duration-500">
              {slide.title}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-white/60 mb-8 tracking-tight transition-all duration-500">
              {slide.highlight}
            </p>
            <a
              href={slide.cta.href}
              target={slide.cta.href.startsWith("http") ? "_blank" : undefined}
              rel={slide.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 bg-white text-navy text-[13px] font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-all"
            >
              {slide.cta.href === CHURCH_INFO.youtubeLive && (
                <span className="w-2 h-2 bg-red-500 rounded-full pulse-live" />
              )}
              {slide.cta.label}
            </a>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-6 right-6 flex items-center gap-3">
          <div className="flex gap-1.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-white/70" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-1">
            <button onClick={() => setCurrent((p) => (p - 1 + SLIDES.length) % SLIDES.length)}
              className="w-7 h-7 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <ChevronLeft className="w-3.5 h-3.5 text-white/60" />
            </button>
            <button onClick={() => setCurrent((p) => (p + 1) % SLIDES.length)}
              className="w-7 h-7 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <ChevronRight className="w-3.5 h-3.5 text-white/60" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

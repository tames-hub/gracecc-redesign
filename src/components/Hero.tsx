import { CHURCH_INFO } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-overlay absolute inset-0" />
      {/* Decorative */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gold rounded-full pulse-live" />
      <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-white/40 rounded-full pulse-live" style={{ animationDelay: "0.5s" }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-gold-light text-sm sm:text-base tracking-[0.3em] uppercase mb-6">
            {CHURCH_INFO.sloganEn}
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            예수님의 온전한 제자되어
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gold-light leading-tight mb-8">
            상처가 별이되는
            <br />
            은혜의 공동체
          </h2>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="text-white/70 text-base sm:text-lg mb-10">
            은혜의교회에 오신 것을 환영합니다
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CHURCH_INFO.youtubeLive}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              <span className="w-3 h-3 bg-red-500 rounded-full pulse-live" />
              LIVE 예배 시청
            </a>
            <a
              href="#worship"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all"
            >
              예배 안내
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}

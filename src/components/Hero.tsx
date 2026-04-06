import { CHURCH_INFO } from "@/lib/constants";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="hero-gradient grain relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient lights */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/4 rounded-full blur-[150px] rotate-12" />

      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-10">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full pulse-live" />
            <span className="text-white/60 text-xs font-medium tracking-wider uppercase">Live Worship</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="text-accent-light/80 text-xs sm:text-sm tracking-[0.25em] uppercase mb-6 font-medium">
            {CHURCH_INFO.sloganEn}
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <h1 className="text-[2rem] sm:text-[3rem] lg:text-[3.75rem] font-bold text-white leading-[1.15] mb-3 tracking-tight">
            예수님의 온전한 제자되어
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          <h2 className="text-[1.5rem] sm:text-[2.25rem] lg:text-[2.75rem] font-bold leading-[1.2] mb-10 tracking-tight">
            <span className="bg-gradient-to-r from-accent-light via-accent to-accent-light bg-clip-text text-transparent">
              상처가 별이되는 은혜의 공동체
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CHURCH_INFO.youtubeLive}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-navy font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/10"
            >
              <span className="w-2 h-2 bg-red-500 rounded-full pulse-live" />
              LIVE 예배 시청
            </a>
            <a
              href="#worship"
              className="inline-flex items-center justify-center gap-2 text-white/70 font-medium text-sm px-7 py-3.5 rounded-full border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all"
            >
              예배 안내 →
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

import { VISIONS } from "@/lib/constants";
import FadeIn from "./FadeIn";

export default function Vision() {
  return (
    <section className="py-20 lg:py-28 bg-white cross-pattern" id="vision">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Our Vision
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            네 가지 비전
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {VISIONS.map((v, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="card-hover bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br from-primary to-blue-500 shadow-lg shadow-primary/25 mb-6">
                  {v.emoji}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2 whitespace-pre-line">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {v.subtitle}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

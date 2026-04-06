import { CAMPUSES } from "@/lib/constants";
import FadeIn from "./FadeIn";

export default function Worship() {
  const worshipCampuses = CAMPUSES.filter((c) => c.services.length > 0);

  return (
    <section className="py-24 lg:py-32 bg-surface" id="worship">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeIn className="text-center mb-16">
          <span className="section-label text-primary/60 mb-3 block">Worship</span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-gray-900 tracking-tight">
            예배 안내
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {worshipCampuses.map((campus, i) => (
            <FadeIn key={campus.id} delay={i * 80}>
              <div className="card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 h-full">
                <div className="px-6 pt-6 pb-4">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <h3 className="font-semibold text-[15px] text-gray-900">
                      {campus.name} {campus.label && <span className="text-gray-400 font-normal">({campus.label})</span>}
                    </h3>
                  </div>
                  <p className="text-[12px] text-gray-400 ml-5">{campus.address.split(" ").slice(0, 2).join(" ")}</p>
                </div>
                <div className="px-6 pb-6 space-y-0">
                  {campus.services.map((s, j) => (
                    <div
                      key={j}
                      className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0"
                    >
                      <span className="text-[13px] text-gray-500">{s.name}</span>
                      <span className="text-[13px] font-semibold text-gray-900 tabular-nums">{s.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}

          {/* 청년부 */}
          <FadeIn delay={160}>
            <div className="card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 h-full">
              <div className="px-6 pt-6 pb-4">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <h3 className="font-semibold text-[15px] text-gray-900">청년부 예배</h3>
                </div>
                <p className="text-[12px] text-gray-400 ml-5">그레이스홀 · 송도채플</p>
              </div>
              <div className="px-6 pb-6 space-y-0">
                {[
                  { name: "본교 4부 예배", time: "오후 2:00" },
                  { name: "금요 기도회", time: "오후 8:00" },
                  { name: "새벽기도", time: "오전 5:30" },
                ].map((s, j) => (
                  <div key={j} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
                    <span className="text-[13px] text-gray-500">{s.name}</span>
                    <span className="text-[13px] font-semibold text-gray-900 tabular-nums">{s.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

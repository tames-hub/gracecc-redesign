import { CAMPUSES } from "@/lib/constants";
import FadeIn from "./FadeIn";

export default function Worship() {
  const worshipCampuses = CAMPUSES.filter((c) => c.services.length > 0);

  return (
    <section className="py-20 lg:py-28 bg-surface" id="worship">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Worship
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            예배 안내
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {worshipCampuses.map((campus, i) => (
            <FadeIn key={campus.id} delay={i * 100}>
              <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full">
                <div className={`bg-gradient-to-r ${campus.color} px-6 py-4`}>
                  <h3 className="text-white font-bold text-lg">
                    {campus.name} {campus.label && `(${campus.label})`}
                  </h3>
                  <p className="text-blue-200 text-sm">{campus.address.split(" ").slice(0, 2).join(" ")}</p>
                </div>
                <div className="p-6 space-y-4">
                  {campus.services.map((s, j) => (
                    <div
                      key={j}
                      className={`flex justify-between items-center py-2 ${
                        j < campus.services.length - 1 ? "border-b border-gray-50" : ""
                      }`}
                    >
                      <span className="text-gray-600 text-sm">{s.name}</span>
                      <span className="font-semibold text-gray-900">{s.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}

          {/* 청년부 */}
          <FadeIn delay={200}>
            <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                <h3 className="text-white font-bold text-lg">청년부 예배</h3>
                <p className="text-blue-200 text-sm">그레이스홀 · 송도채플</p>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { name: "본교 4부 예배", time: "오후 2:00" },
                  { name: "금요 기도회", time: "오후 8:00" },
                  { name: "새벽기도", time: "오전 5:30" },
                ].map((s, j) => (
                  <div
                    key={j}
                    className={`flex justify-between items-center py-2 ${j < 2 ? "border-b border-gray-50" : ""}`}
                  >
                    <span className="text-gray-600 text-sm">{s.name}</span>
                    <span className="font-semibold text-gray-900">{s.time}</span>
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

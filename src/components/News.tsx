import FadeIn from "./FadeIn";
import { ArrowRight } from "lucide-react";

const NEWS_ITEMS = [
  { category: "주일예배", title: "4월 5일 1-2부 예배", date: "2026.04.05", emoji: "⛪", gradient: "from-blue-100 to-blue-200" },
  { category: "청년부", title: "4월 5일 4부 청년부 예배", date: "2026.04.05", emoji: "🎵", gradient: "from-indigo-100 to-purple-200" },
  { category: "부활주일", title: "주일 저녁 청년찬양팀", date: "2026.04.04", emoji: "✨", gradient: "from-amber-100 to-orange-200" },
  { category: "송도채플", title: "4월 5일 송도 주일 3부", date: "2026.04.05", emoji: "🙌", gradient: "from-rose-100 to-pink-200" },
];

export default function News() {
  return (
    <section className="py-20 lg:py-28 bg-surface" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            News
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">교회소식</h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </FadeIn>

        <FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {NEWS_ITEMS.map((item, i) => (
              <a
                key={i}
                href="http://gallery.gracecc.or.kr/"
                className="card-hover group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                  <span className="text-5xl">{item.emoji}</span>
                </div>
                <div className="p-5">
                  <span className="text-xs text-primary font-medium">{item.category}</span>
                  <h4 className="font-semibold text-gray-900 mt-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400 mt-2">{item.date}</p>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="text-center mt-10">
          <a
            href="http://gallery.gracecc.or.kr/"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            더 많은 소식 보기
            <ArrowRight className="w-4 h-4" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

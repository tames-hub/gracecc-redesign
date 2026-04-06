import FadeIn from "./FadeIn";

const NEWS_ITEMS = [
  { category: "주일예배", title: "4월 5일 1-2부 예배", date: "2026.04.05" },
  { category: "청년부", title: "4월 5일 4부 청년부 예배", date: "2026.04.05" },
  { category: "부활주일", title: "주일 저녁 청년찬양팀", date: "2026.04.04" },
  { category: "송도채플", title: "4월 5일 송도 주일 3부", date: "2026.04.05" },
];

export default function News() {
  return (
    <section className="py-24 lg:py-32 bg-surface" id="news">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeIn className="flex items-end justify-between mb-12">
          <div>
            <span className="section-label text-primary/60 mb-3 block">News</span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-gray-900 tracking-tight">
              교회소식
            </h2>
          </div>
          <a href="http://gallery.gracecc.or.kr/" className="hidden sm:inline-flex items-center text-[13px] text-gray-400 hover:text-gray-900 font-medium transition-colors">
            전체보기 →
          </a>
        </FadeIn>

        <FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {NEWS_ITEMS.map((item, i) => (
              <a
                key={i}
                href="http://gallery.gracecc.or.kr/"
                className="card-hover group bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-accent/[0.05]" />
                  <svg className="w-8 h-8 text-gray-200 group-hover:text-primary/30 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                </div>
                <div className="p-5">
                  <span className="text-[11px] text-primary font-semibold tracking-wider uppercase">{item.category}</span>
                  <h4 className="text-[14px] font-semibold text-gray-900 mt-1.5 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-gray-300 mt-2 tabular-nums">{item.date}</p>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="text-center mt-8 sm:hidden">
          <a href="http://gallery.gracecc.or.kr/" className="text-[13px] text-gray-400 hover:text-gray-900 font-medium transition-colors">
            전체보기 →
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

import FadeIn from "./FadeIn";

const WEEKS = [
  { num: "01", title: "구원의 확신", color: "bg-primary/[0.06] border-primary/10" },
  { num: "02", title: "신앙의 기초", color: "bg-accent/[0.08] border-accent/15" },
  { num: "03", title: "교회 생활 안내", color: "bg-primary/[0.06] border-primary/10" },
  { num: "04", title: "수료 및 환영", color: "bg-accent/[0.08] border-accent/15" },
];

export default function NewFamily() {
  return (
    <section className="py-24 lg:py-32 bg-white" id="newfamily">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <FadeIn>
            <span className="section-label text-primary/60 mb-3 block">New Family</span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-gray-900 tracking-tight mb-6">
              새가족을 환영합니다
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-5">
              은혜의교회에는 하나님의 자녀로 자라가고, 교회 가족으로 정착하기 위한 새가족 과정이 준비되어 있습니다.
            </p>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
              <span className="text-gray-900 font-medium">4주 과정</span>을 수료하셔야 학습 및 세례, 모든 훈련에 참여하실 수 있습니다.
            </p>
            <a
              href="https://www.gracecc.or.kr/%ea%b5%90%ed%9a%8c%ec%86%8c%ea%b0%9c/"
              className="inline-flex items-center gap-2 bg-navy text-white font-medium text-[13px] px-6 py-3 rounded-full hover:bg-navy-lighter transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              자세히 알아보기 →
            </a>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid grid-cols-2 gap-3">
              {WEEKS.map((w) => (
                <div key={w.num} className={`rounded-2xl p-6 border ${w.color} transition-transform hover:scale-[1.02]`}>
                  <span className="text-[11px] font-bold text-gray-300 tracking-widest">WEEK</span>
                  <div className="text-[2rem] font-bold text-gray-900/10 leading-none mb-2">{w.num}</div>
                  <p className="text-[13px] font-medium text-gray-700">{w.title}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-surface p-4 text-[12px] text-gray-400 space-y-1.5 border border-gray-100">
              <p><span className="text-gray-600 font-medium">본교</span> — 매주 주일 8:30 / 11:00 예배 후 · 비전센터 2층</p>
              <p><span className="text-gray-600 font-medium">송도채플</span> — 매주 주일 8:30 / 11:00 / 1:00 예배 후 · 2층</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

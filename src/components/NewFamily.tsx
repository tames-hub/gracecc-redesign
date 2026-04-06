import FadeIn from "./FadeIn";
import { ArrowRight } from "lucide-react";

const WEEKS = [
  { emoji: "📖", week: "1주차", desc: "구원의 확신", bgClass: "bg-[#FDF8F4] border-[#D4A574]/20" },
  { emoji: "✝️", week: "2주차", desc: "신앙의 기초", bgClass: "bg-blue-50 border-blue-100" },
  { emoji: "🕊️", week: "3주차", desc: "교회 생활 안내", bgClass: "bg-blue-50 border-blue-100" },
  { emoji: "🎉", week: "4주차", desc: "수료 및 환영", bgClass: "bg-[#FDF8F4] border-[#D4A574]/20" },
];

export default function NewFamily() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="newfamily">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn>
            <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              New Family
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              새가족을 환영합니다
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mb-8" />
            <p className="text-gray-600 leading-relaxed mb-6">
              은혜의교회에는 존귀한 하나님의 자녀로 자라가고, 은혜의교회 가족으로 정착하기 위한
              새가족 과정이 준비되어 있습니다.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              새가족 과정은 신앙생활을 처음 하시는 분뿐만 아니라 구원의 확신이 있는 분들에게도
              건강한 신앙생활을 유지하기 위한 자양분이 될 것입니다.{" "}
              <strong className="text-gray-900">4주 과정</strong>을 마치고 수료하셔야 학습 및 세례,
              모든 훈련에 참여하실 수 있습니다.
            </p>
            <a
              href="https://www.gracecc.or.kr/%ea%b5%90%ed%9a%8c%ec%86%8c%ea%b0%9c/"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary-dark transition-all hover:scale-105"
            >
              자세히 알아보기
              <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {WEEKS.map((w) => (
                <div key={w.week} className={`rounded-2xl p-6 border ${w.bgClass}`}>
                  <div className="text-3xl mb-3">{w.emoji}</div>
                  <h4 className="font-bold text-gray-900 mb-1">{w.week}</h4>
                  <p className="text-sm text-gray-500">{w.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-gray-50 rounded-xl p-4 text-sm text-gray-500 space-y-1">
              <p>
                <strong>본교</strong> — 매주 주일 8:30 / 11:00 예배 후 · 비전센터 2층 새가족실
              </p>
              <p>
                <strong>송도채플</strong> — 매주 주일 8:30 / 11:00 / 1:00 예배 후 · 2층 새가족실
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

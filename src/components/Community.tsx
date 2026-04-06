import FadeIn from "./FadeIn";
import { Play } from "lucide-react";

const SECTIONS = [
  {
    title: "설교·찬양",
    desc: "Grace TV에서 지난 설교와\n찬양 영상을 다시 보세요",
    href: "http://tv.gracecc.or.kr/%ec%a3%bc%ec%9d%bc%ec%98%88%eb%b0%b0-%ec%b4%88%ec%b2%ad/",
    gradient: "from-red-500 to-rose-600",
    icon: <Play className="w-10 h-10 text-white" />,
  },
  {
    title: "로뎀나무 아래서",
    desc: "교회 공지사항과\n성도들의 소식을 나눕니다",
    href: "http://cafe.gracecc.or.kr/cafe/",
    gradient: "from-emerald-500 to-green-600",
    icon: <span className="text-4xl">🌿</span>,
  },
  {
    title: "은혜나눔터",
    desc: "은혜를 나누고\n서로를 격려하는 공간",
    href: "http://cafe.gracecc.or.kr/share/",
    gradient: "from-amber-500 to-orange-500",
    icon: <span className="text-4xl">💝</span>,
  },
];

export default function Community() {
  return (
    <section className="py-20 lg:py-28 bg-surface" id="community">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Community
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">함께하는 은혜</h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </FadeIn>

        <FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {SECTIONS.map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="card-hover group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg`}>
                  {s.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 whitespace-pre-line">{s.desc}</p>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

import FadeIn from "./FadeIn";
import { Play } from "lucide-react";

const SECTIONS = [
  {
    title: "설교·찬양",
    desc: "Grace TV에서 지난 설교와 찬양 영상을 다시 보세요",
    href: "http://tv.gracecc.or.kr/%ec%a3%bc%ec%9d%bc%ec%98%88%eb%b0%b0-%ec%b4%88%ec%b2%ad/",
    icon: <Play className="w-5 h-5" />,
  },
  {
    title: "로뎀나무 아래서",
    desc: "교회 공지사항과 성도들의 소식을 나눕니다",
    href: "http://cafe.gracecc.or.kr/cafe/",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>,
  },
  {
    title: "은혜나눔터",
    desc: "은혜를 나누고 서로를 격려하는 공간",
    href: "http://cafe.gracecc.or.kr/share/",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
  },
];

export default function Community() {
  return (
    <section className="py-24 lg:py-32 bg-surface" id="community">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeIn className="text-center mb-16">
          <span className="section-label text-primary/60 mb-3 block">Community</span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-gray-900 tracking-tight">
            함께하는 은혜
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="grid md:grid-cols-3 gap-4">
            {SECTIONS.map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="card-hover group bg-white rounded-2xl p-8 border border-gray-100 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-5 rounded-xl bg-navy text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-[15px] text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-[13px] text-gray-400 leading-relaxed">{s.desc}</p>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

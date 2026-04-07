import FadeIn from "./FadeIn";
import { Play, BookOpen, Users, Heart, Calendar, Megaphone } from "lucide-react";

const LINKS = [
  { icon: <Play className="w-5 h-5" />, label: "설교·찬양", desc: "Grace TV", href: "http://tv.gracecc.or.kr/%ec%a3%bc%ec%9d%bc%ec%98%88%eb%b0%b0-%ec%b4%88%ec%b2%ad/" },
  { icon: <BookOpen className="w-5 h-5" />, label: "양육·훈련", desc: "성장 프로그램", href: "https://www.gracecc.or.kr/%ec%96%91%ec%9c%a1-%ed%9b%88%eb%a0%a8/" },
  { icon: <Users className="w-5 h-5" />, label: "교육부서", desc: "주일학교·청년부", href: "https://edu.gracecc.or.kr" },
  { icon: <Heart className="w-5 h-5" />, label: "은혜나눔터", desc: "나눔 게시판", href: "http://cafe.gracecc.or.kr/share/" },
  { icon: <Calendar className="w-5 h-5" />, label: "교회소식", desc: "갤러리·사진", href: "http://gallery.gracecc.or.kr/" },
  { icon: <Megaphone className="w-5 h-5" />, label: "로뎀나무", desc: "공지·소식", href: "http://cafe.gracecc.or.kr/cafe/" },
];

export default function QuickLinks() {
  return (
    <section className="py-6 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <FadeIn>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex flex-col items-center text-center py-4 px-2 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/[0.06] text-primary flex items-center justify-center mb-2.5 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                  {link.icon}
                </div>
                <span className="text-[13px] font-medium text-gray-800">{link.label}</span>
                <span className="text-[10px] text-gray-400 mt-0.5">{link.desc}</span>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

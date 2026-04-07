import FadeIn from "./FadeIn";
import { CAMPUSES, EDUCATION_DEPTS } from "@/lib/constants";
import { MapPin, ExternalLink } from "lucide-react";

const NEWS_ITEMS = [
  { category: "주일예배", title: "4월 5일 1-2부 예배", date: "04.05" },
  { category: "청년부", title: "4월 5일 4부 청년부 예배", date: "04.05" },
  { category: "부활주일", title: "주일 저녁 청년찬양팀", date: "04.04" },
  { category: "송도채플", title: "4월 5일 송도 주일 3부", date: "04.05" },
  { category: "행사", title: "고난주간 특별새벽기도회", date: "04.01" },
];

const COMMUNITY_POSTS = [
  { title: "개업예배 — 킹스맨헤어 조혜숙집사", author: "기자부", date: "03.30" },
  { title: "개업 감사예배 — Teagather 카페", author: "기자부", date: "03.12" },
  { title: "2026 상반기 청년 비전장학금 공고", author: "청년부", date: "01.24" },
  { title: "2026년 설 명절 가정예배 순서지", author: "은혜의교회", date: "02.14" },
];

export default function MainContent() {
  const worshipCampuses = CAMPUSES.filter((c) => c.services.length > 0);

  return (
    <section className="py-10 lg:py-14 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-6">

          {/* LEFT: 교회소식 + 로뎀나무 (2열) */}
          <div className="lg:col-span-2 space-y-6">

            {/* 교회소식 */}
            <FadeIn>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
                  <h3 className="text-[14px] font-bold text-gray-900">교회소식</h3>
                  <a href="http://gallery.gracecc.or.kr/" className="text-[11px] text-gray-400 hover:text-primary flex items-center gap-1 transition-colors">
                    더보기 <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="divide-y divide-gray-50">
                  {NEWS_ITEMS.map((item, i) => (
                    <a key={i} href="http://gallery.gracecc.or.kr/" className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50/50 transition-colors">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-[10px] font-semibold text-primary bg-primary/[0.06] px-2 py-0.5 rounded-md shrink-0">
                          {item.category}
                        </span>
                        <span className="text-[13px] text-gray-700 truncate">{item.title}</span>
                      </div>
                      <span className="text-[11px] text-gray-300 tabular-nums shrink-0 ml-3">{item.date}</span>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* 로뎀나무 아래서 */}
            <FadeIn delay={80}>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
                  <h3 className="text-[14px] font-bold text-gray-900">로뎀나무 아래서</h3>
                  <a href="http://cafe.gracecc.or.kr/cafe/" className="text-[11px] text-gray-400 hover:text-primary flex items-center gap-1 transition-colors">
                    더보기 <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="divide-y divide-gray-50">
                  {COMMUNITY_POSTS.map((post, i) => (
                    <a key={i} href="http://cafe.gracecc.or.kr/cafe/" className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50/50 transition-colors">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md shrink-0">{post.author}</span>
                        <span className="text-[13px] text-gray-700 truncate">{post.title}</span>
                      </div>
                      <span className="text-[11px] text-gray-300 tabular-nums shrink-0 ml-3">{post.date}</span>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* 교육부서 그리드 */}
            <FadeIn delay={120}>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-50">
                  <h3 className="text-[14px] font-bold text-gray-900">교육부서</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 divide-x divide-y divide-gray-50">
                  {EDUCATION_DEPTS.map((dept) => (
                    <a
                      key={dept.name}
                      href="https://edu.gracecc.or.kr"
                      className="flex flex-col items-center justify-center py-6 px-3 hover:bg-gray-50/50 transition-colors text-center"
                    >
                      <span className="text-[13px] font-medium text-gray-800">{dept.name}</span>
                      <span className="text-[11px] text-gray-400 mt-0.5">{dept.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: 사이드바 */}
          <div className="space-y-6">

            {/* 예배 안내 */}
            <FadeIn delay={60}>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden" id="worship">
                <div className="px-5 py-4 border-b border-gray-50">
                  <h3 className="text-[14px] font-bold text-gray-900">예배 안내</h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {worshipCampuses.map((campus) => (
                    <div key={campus.id} className="px-5 py-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[12px] font-semibold text-gray-700">{campus.name}</span>
                      </div>
                      {campus.services.map((s, j) => (
                        <div key={j} className="flex justify-between py-1.5">
                          <span className="text-[12px] text-gray-400">{s.name}</span>
                          <span className="text-[12px] font-medium text-gray-700 tabular-nums">{s.time}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                  {/* 청년부 */}
                  <div className="px-5 py-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-[12px] font-semibold text-gray-700">청년부 예배</span>
                    </div>
                    {[
                      { name: "본교 4부 예배", time: "오후 2:00" },
                      { name: "금요 기도회", time: "오후 8:00" },
                    ].map((s, j) => (
                      <div key={j} className="flex justify-between py-1.5">
                        <span className="text-[12px] text-gray-400">{s.name}</span>
                        <span className="text-[12px] font-medium text-gray-700 tabular-nums">{s.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 새가족 안내 */}
            <FadeIn delay={100}>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden" id="newfamily">
                <div className="bg-primary/[0.03] px-5 py-5">
                  <h3 className="text-[14px] font-bold text-gray-900 mb-1.5">새가족을 환영합니다</h3>
                  <p className="text-[12px] text-gray-400 leading-relaxed">
                    4주 새가족 과정을 통해 은혜의교회 가족이 되어보세요.
                  </p>
                  <a href="https://www.gracecc.or.kr/%ea%b5%90%ed%9a%8c%ec%86%8c%ea%b0%9c/"
                    className="inline-flex items-center gap-1 text-[11px] text-primary font-medium mt-3 hover:underline">
                    자세히 보기 →
                  </a>
                </div>
                <div className="px-5 py-4 text-[11px] text-gray-400 space-y-1.5 border-t border-gray-50">
                  <p><span className="text-gray-600 font-medium">본교</span> 주일 8:30/11:00 예배 후 · 비전센터 2층</p>
                  <p><span className="text-gray-600 font-medium">송도</span> 주일 8:30/11:00/1:00 예배 후 · 2층</p>
                </div>
              </div>
            </FadeIn>

            {/* 오시는 길 */}
            <FadeIn delay={140}>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-50">
                  <h3 className="text-[14px] font-bold text-gray-900">오시는 길</h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {CAMPUSES.map((campus) => (
                    <div key={campus.id} className="px-5 py-4">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-3.5 h-3.5 text-gray-300 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-[12px] font-medium text-gray-700">
                            {campus.name} {campus.label && <span className="text-gray-400 font-normal">({campus.label})</span>}
                          </p>
                          <p className="text-[11px] text-gray-400 mt-0.5">{campus.address}</p>
                          {campus.tel && <p className="text-[11px] text-gray-400">TEL. {campus.tel}</p>}
                          <a href={campus.map} target="_blank" rel="noopener noreferrer"
                            className="text-[11px] text-primary font-medium hover:underline mt-1 inline-block">
                            지도 보기 →
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

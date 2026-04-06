import { CHURCH_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* 교회 정보 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">✦</span>
              </div>
              <span className="font-bold text-lg text-white">은혜의교회</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              예수님의 온전한 제자되어,
              <br />
              상처가 별이되는 은혜의 공동체
            </p>
            <div className="flex gap-3">
              <a
                href={CHURCH_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors"
                title="YouTube"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 00.5 6.19 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </a>
              <a
                href={CHURCH_INFO.kakao}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-500 flex items-center justify-center transition-colors"
                title="카카오톡"
              >
                <span className="text-white text-lg font-bold">K</span>
              </a>
            </div>
          </div>

          {/* 예배 & 사역 */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 tracking-wide">예배 & 사역</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://www.gracecc.or.kr/%ea%b5%90%ed%9a%8c%ec%86%8c%ea%b0%9c/" className="hover:text-white transition-colors">교회소개</a></li>
              <li><a href="https://www.gracecc.or.kr/%ec%96%91%ec%9c%a1-%ed%9b%88%eb%a0%a8/" className="hover:text-white transition-colors">양육·훈련</a></li>
              <li><a href="http://tv.gracecc.or.kr/%ec%a3%bc%ec%9d%bc%ec%98%88%eb%b0%b0-%ec%b4%88%ec%b2%ad/" className="hover:text-white transition-colors">설교·찬양 (Grace TV)</a></li>
              <li><a href="https://edu.gracecc.or.kr" className="hover:text-white transition-colors">교육부서</a></li>
            </ul>
          </div>

          {/* 커뮤니티 */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 tracking-wide">커뮤니티</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="http://gallery.gracecc.or.kr/" className="hover:text-white transition-colors">교회소식</a></li>
              <li><a href="http://cafe.gracecc.or.kr/cafe/" className="hover:text-white transition-colors">로뎀나무 아래서</a></li>
              <li><a href="http://cafe.gracecc.or.kr/share/" className="hover:text-white transition-colors">은혜나눔터</a></li>
            </ul>
          </div>

          {/* 바로가기 */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 tracking-wide">바로가기</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="http://staff.gracecc.or.kr/" className="hover:text-white transition-colors">예배 Staff</a></li>
              <li><a href="http://www.jesuson.net/interface/BizMenu.aspx?church_id=gracecc" className="hover:text-white transition-colors">기부금영수증</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">오시는 길</a></li>
              <li><a href={CHURCH_INFO.youtubeLive} className="hover:text-white transition-colors">온라인 예배 (LIVE)</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {CHURCH_INFO.founded} – {new Date().getFullYear()} 은혜의교회 Grace Community Church. All rights reserved.
          </p>
          <div className="text-xs text-gray-600 text-center md:text-right">
            <p>그레이스홀 TEL. 032-866-3434 · 송도채플 TEL. 032-833-0191</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

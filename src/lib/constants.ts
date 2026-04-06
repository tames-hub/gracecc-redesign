export const CHURCH_INFO = {
  name: "은혜의교회",
  nameEn: "Grace Community Church",
  slogan: "예수님의 온전한 제자되어, 상처가 별이되는 은혜의 공동체",
  sloganEn: "Scars into Stars",
  founded: 1986,
  youtube: "https://youtube.com/c/은혜의교회",
  youtubeLive: "https://www.youtube.com/channel/UCXot4EKfUM7ppJdUxdLsdlg/live",
  kakao: "http://pf.kakao.com/_xcxhtAxb",
  kakaoStory: "https://story.kakao.com/location/da_8042506",
};

export const CAMPUSES = [
  {
    id: "grace-hall",
    name: "그레이스홀",
    label: "본교",
    address: "인천시 미추홀구 매소홀로 428",
    tel: "032-866-3434",
    fax: "032-872-3765",
    map: "https://naver.me/5Tv37515",
    emoji: "🏛️",
    color: "from-blue-500 to-blue-700",
    services: [
      { name: "주일 1부 예배", time: "오전 8:30" },
      { name: "주일 2부 예배", time: "오전 11:00" },
      { name: "주일 저녁 예배", time: "오후 5:00" },
      { name: "수요 예배", time: "오후 7:30" },
    ],
  },
  {
    id: "songdo",
    name: "송도채플",
    label: "",
    address: "인천시 연수구 해돋이로 107 더샵퍼스트월드 G동 2층",
    tel: "032-833-0191",
    fax: "",
    map: "https://naver.me/Fn2sC6vR",
    emoji: "⛪",
    color: "from-indigo-500 to-indigo-700",
    services: [
      { name: "주일 1부 예배", time: "오전 8:30" },
      { name: "주일 2부 예배", time: "오전 11:00" },
      { name: "주일 3부 예배", time: "오후 1:00" },
      { name: "수요 예배", time: "오후 7:30" },
    ],
  },
  {
    id: "gimpo",
    name: "김포수양관",
    label: "",
    address: "경기 김포시 하성면 평화공원로70번길 290-87",
    tel: "",
    fax: "",
    map: "https://naver.me/FkP9GoVm",
    emoji: "🏕️",
    color: "from-emerald-500 to-emerald-700",
    services: [],
  },
];

export const NAV_LINKS = [
  { label: "교회소개", href: "https://www.gracecc.or.kr/%ea%b5%90%ed%9a%8c%ec%86%8c%ea%b0%9c/" },
  { label: "오시는 길", href: "#location" },
  { label: "양육·훈련", href: "https://www.gracecc.or.kr/%ec%96%91%ec%9c%a1-%ed%9b%88%eb%a0%a8/" },
  { label: "교회소식", href: "http://gallery.gracecc.or.kr/" },
  { label: "로뎀나무 아래서", href: "http://cafe.gracecc.or.kr/cafe/" },
  { label: "은혜나눔터", href: "http://cafe.gracecc.or.kr/share/" },
  { label: "설교·찬양", href: "http://tv.gracecc.or.kr/%ec%a3%bc%ec%9d%bc%ec%98%88%eb%b0%b0-%ec%b4%88%ec%b2%ad/" },
  { label: "교육부서", href: "https://edu.gracecc.or.kr" },
  { label: "기부금영수증", href: "http://www.jesuson.net/interface/BizMenu.aspx?church_id=gracecc" },
];

export const VISIONS = [
  {
    emoji: "🙏",
    title: "예배의 감격이\n있는 교회",
    subtitle: "Seeking to Experience God in Worship",
  },
  {
    emoji: "🤝",
    title: "평신도를 동역자로\n세우는 교회",
    subtitle: "Training to Make Disciples of Jesus",
  },
  {
    emoji: "🌍",
    title: "지역 사회와 민족을\n섬기는 교회",
    subtitle: "Assisting the Community and the Nations with the Gospel",
  },
  {
    emoji: "🌱",
    title: "다음 세대를\n준비하는 교회",
    subtitle: "Raising Up the Next Generation",
  },
];

export const EDUCATION_DEPTS = [
  { emoji: "👶", name: "주일학교 I", desc: "유아 · 유치부", color: "bg-blue-100" },
  { emoji: "📚", name: "주일학교 II", desc: "유년 · 소년부", color: "bg-green-100" },
  { emoji: "🎓", name: "청년 예배", desc: "대학 · 청년부", color: "bg-indigo-100" },
  { emoji: "❤️", name: "사랑부", desc: "특수 교육부서", color: "bg-rose-100" },
  { emoji: "🏫", name: "송도 주일학교", desc: "송도채플 교육부서", color: "bg-cyan-100" },
  { emoji: "🌟", name: "송도 청년부", desc: "송도채플 청년부", color: "bg-violet-100" },
];

import { CAMPUSES } from "@/lib/constants";
import FadeIn from "./FadeIn";
import { MapPin } from "lucide-react";

export default function Location() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Location
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">오시는 길</h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </FadeIn>

        <FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {CAMPUSES.map((campus) => (
              <div
                key={campus.id}
                className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className={`h-48 bg-gradient-to-br ${campus.color} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <span className="text-5xl block mb-2">{campus.emoji}</span>
                    <span className="font-bold text-lg">{campus.name}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-1">
                    {campus.name} {campus.label && `(${campus.label})`}
                  </h4>
                  <p className="text-sm text-gray-500 mb-3">{campus.address}</p>
                  {campus.tel && <p className="text-sm text-gray-400 mb-1">TEL. {campus.tel}</p>}
                  {campus.fax && <p className="text-sm text-gray-400 mb-1">FAX. {campus.fax}</p>}
                  <div className={campus.tel || campus.fax ? "mt-4" : ""}>
                    <a
                      href={campus.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                    >
                      <MapPin className="w-4 h-4" />
                      네이버 지도 보기
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

import { CAMPUSES } from "@/lib/constants";
import FadeIn from "./FadeIn";
import { MapPin } from "lucide-react";

export default function Location() {
  return (
    <section className="py-24 lg:py-32 bg-white" id="location">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <FadeIn className="text-center mb-16">
          <span className="section-label text-primary/60 mb-3 block">Location</span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-gray-900 tracking-tight">
            오시는 길
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="grid md:grid-cols-3 gap-4">
            {CAMPUSES.map((campus) => (
              <div
                key={campus.id}
                className="card-hover bg-surface rounded-2xl border border-gray-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-navy/[0.06] text-navy flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[14px] text-gray-900">
                        {campus.name} {campus.label && <span className="text-gray-400 font-normal">({campus.label})</span>}
                      </h4>
                      <p className="text-[12px] text-gray-400 mt-0.5 leading-relaxed">{campus.address}</p>
                    </div>
                  </div>
                  {campus.tel && <p className="text-[12px] text-gray-400 ml-[52px]">TEL. {campus.tel}</p>}
                  {campus.fax && <p className="text-[12px] text-gray-400 ml-[52px]">FAX. {campus.fax}</p>}
                  <div className="mt-4 ml-[52px]">
                    <a
                      href={campus.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12px] text-primary font-medium hover:underline"
                    >
                      네이버 지도 →
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

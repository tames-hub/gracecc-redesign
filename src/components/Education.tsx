import { EDUCATION_DEPTS } from "@/lib/constants";
import FadeIn from "./FadeIn";

export default function Education() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">교육부서</h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </FadeIn>

        <FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EDUCATION_DEPTS.map((dept) => (
              <a
                key={dept.name}
                href="https://edu.gracecc.or.kr"
                className="card-hover group flex items-center gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <div className={`w-14 h-14 rounded-xl ${dept.color} flex items-center justify-center text-2xl shrink-0`}>
                  {dept.emoji}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {dept.name}
                  </h4>
                  <p className="text-sm text-gray-500">{dept.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

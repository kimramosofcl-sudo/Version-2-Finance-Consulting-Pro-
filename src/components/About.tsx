import { CheckCircle2, Award, Users, Target, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useRef, useState } from "react";

const values = [
  "Industry-leading expertise across multiple sectors",
  "Data-driven insights and actionable recommendations",
  "Customized solutions tailored to your business",
  "Long-term partnership and ongoing support"
];

const achievements = [
  { icon: Award, value: "25+", label: "Years of Excellence" },
  { icon: Users, value: "500+", label: "Satisfied Clients" },
  { icon: Target, value: "98%", label: "Client Retention" },
  { icon: TrendingUp, value: "$2.5B", label: "Assets Managed" }
];

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-block mb-4 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
              <span className="text-blue-600">About Us</span>
            </div>
            <h2 className="mb-6">
              Your Trusted Partner in Financial Success
            </h2>
            <p className="text-slate-600 mb-6 text-lg">
              For over 25 years, FinanceConsult Pro has been at the forefront of finance and accounting consulting, helping businesses navigate complex regulatory environments and achieve sustainable growth.
            </p>
            <p className="text-slate-600 mb-6 text-lg">
              Our team of certified professionals brings deep expertise across SOX compliance, financial reporting, risk management, and strategic advisory. We don't just provide services—we build lasting partnerships that drive real business value.
            </p>
            <p className="text-slate-600 mb-8 text-lg">
              Whether you're a growing startup or an established enterprise, we deliver customized solutions that address your unique challenges and position you for long-term success in an ever-changing financial landscape.
            </p>
            
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzYxMDUzMTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl text-slate-900 mb-2">
                  {achievement.value}
                </div>
                <div className="text-slate-600">
                  {achievement.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

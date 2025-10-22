import { Shield, FileCheck, TrendingUp, Calculator, BarChart3, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Shield,
    title: "SOX Consulting & Compliance",
    description: "Comprehensive Sarbanes-Oxley compliance services including internal controls assessment, documentation, testing, and remediation to ensure your organization meets all regulatory requirements."
  },
  {
    icon: Calculator,
    title: "Finance & Accounting Services",
    description: "Full-spectrum accounting solutions from bookkeeping and financial reporting to CFO advisory services, helping you maintain accurate records and make informed financial decisions."
  },
  {
    icon: TrendingUp,
    title: "Risk Assessment & Management",
    description: "Proactive identification and mitigation of financial risks through thorough analysis, stress testing, and strategic planning to protect your business assets and ensure stability."
  },
  {
    icon: FileCheck,
    title: "Audit Support & Preparation",
    description: "Expert guidance through external audits, internal audit function development, and preparation services to ensure smooth audit processes and favorable outcomes."
  },
  {
    icon: BarChart3,
    title: "Financial Planning & Analysis",
    description: "Strategic financial planning, budgeting, forecasting, and variance analysis to drive business growth and optimize financial performance across all operations."
  },
  {
    icon: Users,
    title: "Advisory & Strategic Consulting",
    description: "Executive-level consulting on mergers & acquisitions, business valuations, capital structure optimization, and strategic growth initiatives to maximize shareholder value."
  }
];

export function Services() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(services.length).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
            <span className="text-blue-600">Our Services</span>
          </div>
          <h2 className="mb-4">
            Comprehensive Financial Expertise
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            From SOX compliance to strategic advisory, we deliver tailored solutions that address your unique challenges and drive measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`transition-all duration-700 ${
                  visibleCards[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="border-slate-200 hover:border-blue-300 transition-all hover:shadow-xl h-full group">
                  <CardHeader>
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                      <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* CTA at bottom of services */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">
            Need a custom solution? We're here to help.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            className="text-blue-600 hover:text-blue-700 underline"
          >
            Contact us to discuss your specific needs →
          </button>
        </div>
      </div>
    </section>
  );
}

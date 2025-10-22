import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "FinanceConsult Pro transformed our SOX compliance process. Their expertise saved us countless hours and gave us confidence in our internal controls. The team is professional, responsive, and truly understands the complexities of regulatory compliance.",
    name: "Sarah Mitchell",
    title: "CFO",
    company: "TechVision Corp",
    rating: 5
  },
  {
    quote: "Working with FinanceConsult Pro has been a game-changer for our financial operations. Their strategic insights helped us optimize our accounting processes and improve our bottom line by 30%. I highly recommend their services.",
    name: "Michael Chen",
    title: "VP of Finance",
    company: "Global Innovations Inc",
    rating: 5
  },
  {
    quote: "The risk assessment services provided by FinanceConsult Pro were comprehensive and eye-opening. They identified vulnerabilities we didn't know existed and provided actionable strategies to mitigate them. Outstanding work!",
    name: "Jennifer Rodriguez",
    title: "CEO",
    company: "Meridian Financial Group",
    rating: 5
  }
];

export function Testimonials() {
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
    <section id="testimonials" ref={sectionRef} className="py-24 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 border border-blue-300 rounded-full">
            <span className="text-blue-700">Client Testimonials</span>
          </div>
          <h2 className="mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what industry leaders have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="bg-white border-slate-200 hover:shadow-xl transition-all h-full">
                <CardContent className="pt-6">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Quote className="h-6 w-6 text-blue-600" />
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-slate-900">
                        {testimonial.name}
                      </div>
                      <div className="text-slate-600 text-sm">
                        {testimonial.title}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-200 rounded-full shadow-md">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-slate-700 ml-2">
              Rated 4.9/5 from 500+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

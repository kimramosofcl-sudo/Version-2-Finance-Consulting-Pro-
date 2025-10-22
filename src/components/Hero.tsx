import { Button } from "./ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1615914143778-1a1a6e50c5dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzYxMDg0NzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Business consulting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-blue-900/75"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full">
            <span className="text-blue-400">Trusted by 500+ Businesses Nationwide</span>
          </div>
          
          <h1 className="text-white mb-6">
            Expert Finance & Accounting Solutions for Your Business Success
          </h1>
          
          <p className="text-slate-300 text-xl mb-10 leading-relaxed">
            Navigate complex financial landscapes with confidence. Our certified experts provide comprehensive SOX compliance, accounting services, and risk management tailored to your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white group"
            >
              Get Free Consultation 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection("services")}
              className="border-white bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Explore Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl text-blue-400 mb-1">25+</div>
                <div className="text-slate-300 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl text-blue-400 mb-1">500+</div>
                <div className="text-slate-300 text-sm">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl text-blue-400 mb-1">98%</div>
                <div className="text-slate-300 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Linkedin, Twitter, Facebook, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { Logo } from "./Logo";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log("Newsletter subscription:", email);
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

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
    <footer className="bg-slate-900 text-slate-300">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white mb-3">
              Stay Updated with Financial Insights
            </h3>
            <p className="text-slate-400 mb-6">
              Subscribe to our newsletter for expert tips, industry trends, and regulatory updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Logo showText={true} variant="light" />
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Expert finance and accounting consulting for forward-thinking businesses. Building financial clarity and compliance excellence since 2000.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors text-left">
                  SOX Compliance
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors text-left">
                  Finance & Accounting
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors text-left">
                  Risk Management
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors text-left">
                  Audit Support
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors text-left">
                  Financial Planning
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors text-left">
                  Strategic Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-blue-400 transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("testimonials")} className="hover:text-blue-400 transition-colors text-left">
                  Client Testimonials
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-blue-400 transition-colors text-left">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@financeconsultpro.com" className="hover:text-blue-400 transition-colors">
                  contact@financeconsultpro.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500">Phone:</span>
                <a href="tel:+15551234567" className="hover:text-blue-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500">Address:</span>
                <span>123 Financial District<br />New York, NY 10004</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left">
            © 2025 FinanceConsult Pro. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

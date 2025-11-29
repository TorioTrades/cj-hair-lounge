import { Phone, Mail, MapPin, Clock, Facebook, ChevronDown } from "lucide-react";
import { useState } from "react";
const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  return <footer id="contact" className="bg-gradient-to-b from-secondary/30 to-secondary/50 pt-6 md:pt-12 pb-4 md:pb-6 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div className="space-y-2 md:space-y-3">
            <div className="flex items-center space-x-2 mb-2 md:mb-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-base md:text-lg font-serif">CJ</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg md:text-xl text-foreground">CJ Hair Lounge</h3>
                <p className="text-xs text-muted-foreground">Beauty & Wellness</p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Your premier destination for complete beauty transformation in Angeles City, Pampanga.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <button onClick={() => toggleSection('links')} className="flex items-center justify-between w-full md:cursor-default">
              <h4 className="font-semibold text-sm md:text-base text-foreground mb-2 md:mb-3">Quick Links</h4>
              <ChevronDown className={`w-4 h-4 text-foreground transition-transform md:hidden ${openSection === 'links' ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-1.5 md:space-y-2 text-xs md:text-sm ${openSection === 'links' ? 'block' : 'hidden md:block'}`}>
              <li>
                <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <button onClick={() => toggleSection('services')} className="flex items-center justify-between w-full md:cursor-default">
              <h4 className="font-semibold text-sm md:text-base text-foreground mb-2 md:mb-3">Services</h4>
              <ChevronDown className={`w-4 h-4 text-foreground transition-transform md:hidden ${openSection === 'services' ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground ${openSection === 'services' ? 'block' : 'hidden md:block'}`}>
              <li>Hair Cut & Styling</li>
              <li>Brazilian Keratin</li>
              <li>Hair Color & Highlights</li>
              <li>Rebonding</li>
              <li>Balayage</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <button onClick={() => toggleSection('contact')} className="flex items-center justify-between w-full md:cursor-default">
              <h4 className="font-semibold text-sm md:text-base text-foreground mb-2 md:mb-3">Contact Us</h4>
              <ChevronDown className={`w-4 h-4 text-foreground transition-transform md:hidden ${openSection === 'contact' ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-2 md:space-y-3 ${openSection === 'contact' ? 'block' : 'hidden md:block'}`}>
              <li className="flex items-start space-x-2">
                <Phone className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:09552219851" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                    09552219851
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:cjhairlounge.07@gmail.com" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                    cjhairlounge.07@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-xs md:text-sm text-muted-foreground">
                  Unit 3 MB Building Arayat Blvd.<br />
                  Pampang, Angeles City, Philippines
                </div>
              </li>
              
              <li className="flex items-start space-x-2">
                <Facebook className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="https://www.facebook.com/CJhairlounge" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                    Follow us on Facebook
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 md:pt-6 border-t border-border">
          <div className="text-center space-y-2">
            <p className="text-[10px] md:text-xs text-muted-foreground">
              © {new Date().getFullYear()} CJ Hair Lounge. All rights reserved. Crafted with care for your beauty journey.
            </p>
            <p className="text-[10px] text-muted-foreground/80">
              Powered by <span className="text-primary font-semibold">TORIOWEB</span>
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
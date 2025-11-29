import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import hero4 from "@/assets/hero-4.png";

interface HeroProps {
  onBookingClick: () => void;
}

const Hero = ({ onBookingClick }: HeroProps) => {

  return (
    <section className="relative min-h-[50vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden -mt-16">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://i.imgur.com/b19YYix.mp4#t=2" type="video/mp4" />
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container mx-auto max-w-7xl relative z-10 px-4 py-8 md:py-12">
        <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
          {/* Text Content */}
          <div className="animate-fade-in-up space-y-3 md:space-y-4 max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-serif text-balance leading-tight">
              <span className="text-white">YOUR ONE STOP </span>
              <span className="text-primary">BEAUTY SHOP</span>
            </h1>
            
            <p className="text-sm md:text-base lg:text-lg text-white/90 max-w-2xl mx-auto text-balance">
              Experience premium hair transformations with Brazilian Keratin, expert coloring, balayage, and precision styling. Your journey to stunning, healthy hair starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full px-4 sm:px-0">
              <Button 
                size="lg" 
                onClick={onBookingClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 py-3 md:px-7 md:py-4 text-sm md:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Book Your Transformation
              </Button>
              
              <a
                href="https://www.facebook.com/CJhairlounge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-4 py-2.5 md:px-5 md:py-3 text-xs md:text-sm rounded-full border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <Facebook className="h-3 w-3 md:h-4 md:w-4" />
                <span>Message us on Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

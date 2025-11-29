import { Button } from "@/components/ui/button";
import heroWoman from "@/assets/hero-woman-new.png";
import { useState } from "react";
import GalleryDialog from "./GalleryDialog";

interface PromotionsProps {
  onBookingClick: () => void;
}

const Promotions = ({ onBookingClick }: PromotionsProps) => {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <>
    <section className="py-6 md:py-10 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Promotion 1 */}
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-xl group animate-fade-in-up bg-gradient-to-br from-primary to-primary/80 p-6 md:p-10 flex flex-col justify-center min-h-[280px] md:min-h-[350px]">
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-2 md:mb-3">
                Discover Your
                <span className="block mt-1">New Look</span>
              </h3>
              <p className="text-primary-foreground/90 text-xs md:text-base mb-4 md:mb-6 max-w-md mx-auto">
                Transform your style with our expert team
              </p>
              <Button 
                onClick={onBookingClick}
                className="bg-background text-primary hover:bg-background/90 font-semibold px-5 py-2.5 md:px-7 md:py-4 text-xs md:text-base rounded-full shadow-lg hover:scale-105 transition-all w-full sm:w-auto mx-auto"
              >
                Book Now
              </Button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-transparent" />
          </div>

          {/* Promotion 2 */}
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-xl group animate-fade-in-up">
            <img 
              src={heroWoman} 
              alt="Beautiful confident woman - CJ Hair Lounge transformation" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-10 p-6 md:p-10 flex flex-col justify-end h-full min-h-[280px] md:min-h-[350px]">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 md:mb-3">
                Explore Our
                <span className="block mt-1 text-primary">Hair Gallery</span>
              </h3>
              <p className="text-white/90 text-xs md:text-base mb-3 md:mb-5">
                See stunning transformations and beautiful hair artistry
              </p>
              <Button 
                onClick={() => setGalleryOpen(true)}
                className="self-start bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 py-2.5 md:px-7 md:py-4 text-xs md:text-base rounded-full shadow-lg hover:scale-105 transition-all w-full sm:w-auto"
              >
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>

      <GalleryDialog open={galleryOpen} onOpenChange={setGalleryOpen} />
    </section>
    </>
  );
};

export default Promotions;

import { Card } from "@/components/ui/card";
import hairColorImg from "@/assets/package-hair-color-new.jpg";
import hairMaskImg from "@/assets/package-hair-mask-custom.jpg";
import highlightsImg from "@/assets/package-highlights.jpg";
import balayageImg from "@/assets/package-balayage.jpg";
import keratinImg from "@/assets/package-keratin-custom.jpg";
import keratinBrazilianImg from "@/assets/package-keratin-brazilian.jpg";
import brazilianImg from "@/assets/package-brazilian.jpg";
import rebondImg from "@/assets/package-rebond.jpg";

interface ServicesProps {
  onBookingClick: () => void;
}

const Services = ({ onBookingClick }: ServicesProps) => {
  const packageServices = [
    {
      title: "Hair Color",
      image: hairColorImg,
      prices: [
        { length: "Starting at", price: "₱1500" },
      ],
    },
    {
      title: "Hair Mask or Treatment",
      image: hairMaskImg,
      prices: [
        { length: "Starting at", price: "₱1500" },
      ],
    },
    {
      title: "Highlights and Tone with Hair Mask Treatment",
      image: highlightsImg,
      prices: [
        { length: "Starting at", price: "₱3000" },
      ],
    },
    {
      title: "Balayage & Tone with Hair Mask Treatment",
      image: balayageImg,
      prices: [
        { length: "Starting at", price: "₱3500" },
      ],
    },
    {
      title: "Keratin & Brazilian with Hair Color and Hair Mask",
      image: keratinBrazilianImg,
      prices: [
        { length: "Starting at", price: "₱3000" },
      ],
    },
    {
      title: "Keratin with Hair Color and Hair Mask",
      image: keratinImg,
      prices: [
        { length: "Starting at", price: "₱3500" },
      ],
    },
    {
      title: "Brazilian Blow Out Original with Hair Color and Hair Mask",
      image: brazilianImg,
      prices: [
        { length: "Starting at", price: "₱4000" },
      ],
    },
    {
      title: "One Step Rebond with Hair Color and Hair Mask",
      image: rebondImg,
      prices: [
        { length: "Starting at", price: "₱2500" },
      ],
    },
  ];

  return (
    <section id="services" className="py-6 md:py-10 px-4 bg-background relative overflow-hidden">
      {/* Wave decoration */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full h-12 md:h-20 fill-secondary/50">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-6 md:mb-10 animate-fade-in-up">
          <p className="text-primary font-medium tracking-wider uppercase text-xs md:text-sm mb-1.5">Price List</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-foreground mb-2 md:mb-3">Hair Services</h2>
          <p className="text-xs md:text-base text-muted-foreground max-w-2xl mx-auto">
            Professional hair care and styling services with transparent pricing
          </p>
        </div>

        {/* Package Services */}
        <div className="mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-bold font-serif text-foreground mb-4 text-center">Packages</h3>
          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {packageServices.map((service, index) => (
              <Card 
                key={service.title}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={`${service.title} at CJ Hair Lounge`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3">
                    <h4 className="text-white text-xs md:text-base font-serif font-bold leading-tight">
                      {service.title}
                    </h4>
                  </div>
                </div>
                <div className="p-3 md:p-4 bg-secondary/20">
                  <div className="space-y-1">
                    {service.prices.map((priceItem) => (
                      <div key={priceItem.length} className="flex justify-between items-center py-1.5 border-t border-border/50">
                        <span className="text-[10px] md:text-sm text-muted-foreground">{priceItem.length}</span>
                        <span className="text-xs md:text-lg font-bold text-primary">{priceItem.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-6 md:mt-8">
          <button 
            onClick={onBookingClick}
            className="inline-flex items-center justify-center px-5 py-2.5 md:px-7 md:py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-md text-xs md:text-sm w-full sm:w-auto"
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

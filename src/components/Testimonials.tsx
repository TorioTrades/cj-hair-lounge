import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Lourdes Reyes",
      review: "Service ambiance experience price all great! 😍",
      rating: 5,
    },
    {
      name: "Carmen Bautista",
      review: "Nice services, affordable prices. Nice staff 👍",
      rating: 5,
    },
    {
      name: "Isabella Ramos",
      review: "Staff is really kind... and services are also good! ⭐️⭐️",
      rating: 5,
    },
  ];

  return (
    <section className="py-6 md:py-10 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6 md:mb-10 animate-fade-in-up">
          <p className="text-primary font-medium tracking-wider uppercase text-xs md:text-sm mb-1.5">Testimonials</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-foreground mb-2 md:mb-3">
            What They're Talking About us
          </h2>
          <button 
            onClick={() => window.open('https://www.facebook.com/CJhairlounge', '_blank')}
            className="inline-flex items-center justify-center mt-3 px-4 py-2 md:px-5 md:py-2.5 bg-black hover:bg-black/90 text-white font-semibold rounded-full transition-all text-xs md:text-sm w-full sm:w-auto"
          >
            Share Your Feedback
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="p-3 md:p-5 bg-card border-0 shadow-lg hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex mb-2 md:mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm md:text-base text-foreground mb-3 md:mb-4 leading-relaxed">
                "{testimonial.review}"
              </p>
              <p className="font-semibold text-sm md:text-base text-foreground">{testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

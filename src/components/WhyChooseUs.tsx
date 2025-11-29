const WhyChooseUs = () => {
  const benefits = [
    {
      title: "✓ Advanced Hair Techniques",
      description: "Brazilian Keratin treatments, precision coloring, and balayage by certified stylists.",
    },
    {
      title: "✓ Personalized Hair Solutions",
      description: "Customized treatments for your unique hair type, texture, and desired transformation.",
    },
    {
      title: "✓ Premium Quality Products",
      description: "Only the finest professional-grade hair products for lasting, healthy results.",
    },
    {
      title: "✓ Experienced Hair Specialists",
      description: "Skilled stylists dedicated to bringing your hair vision to life with expert precision.",
    },
  ];

  return (
    <section className="py-6 md:py-10 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-6 md:mb-10 animate-fade-in-up">
          <p className="text-primary font-medium tracking-wider uppercase text-xs md:text-sm mb-1.5">Why Choose Us</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-foreground">
            Why Choose CJ Hair Lounge?
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="text-center space-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-sm md:text-base font-semibold text-foreground">{benefit.title}</h3>
              <p className="text-[10px] md:text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Punjab, India",
      quote: "I grew 20% more crops this year thanks to HarvestPay. The AI recommendations were spot-on, and the micro-loan helped me invest in better seeds.",
      rating: 5,
      crop: "Wheat & Rice"
    },
    {
      name: "Maria Santos",
      location: "Cebu, Philippines",
      quote: "The weather alerts saved my entire harvest during the last typhoon season. HarvestPay is like having an expert advisor in my pocket.",
      rating: 5,
      crop: "Coconut & Corn"
    },
    {
      name: "James Okonkwo",
      location: "Kaduna, Nigeria",
      quote: "Getting a loan used to take months. With HarvestPay, I got approved in minutes and my cassava yield doubled this season.",
      rating: 5,
      crop: "Cassava & Yam"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            What Farmers Are{" "}
            <span className="text-accent">Saying</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Real stories from farmers who've transformed their harvests
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 animate-scale-in"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <blockquote className="text-card-foreground mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-card-foreground">
                  {testimonial.name}
                </div>
                <div className="text-muted-foreground text-sm">
                  {testimonial.location}
                </div>
                <div className="text-primary text-sm font-medium mt-1">
                  Grows: {testimonial.crop}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
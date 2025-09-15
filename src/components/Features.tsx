import { Brain, CloudRain, DollarSign, Mic } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Personalized Crop Guidance",
      description: "AI-driven recommendations based on your soil type, climate, and market conditions to maximize your harvest."
    },
    {
      icon: CloudRain,
      title: "Real-Time Weather & Soil Insights",
      description: "Get accurate weather forecasts and soil health monitoring to make informed farming decisions."
    },
    {
      icon: DollarSign,
      title: "Micro-Loans for Crop Investment",
      description: "Access instant funding for seeds, fertilizers, and equipment with flexible repayment terms."
    },
    {
      icon: Mic,
      title: "Multilingual Voice Support",
      description: "Interact with HarvestPay in your native language through advanced voice recognition technology."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Everything You Need to{" "}
            <span className="text-accent">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Comprehensive tools designed specifically for modern farmers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 animate-scale-in"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
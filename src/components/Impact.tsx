import { TrendingUp, Leaf, Droplets, Shield } from "lucide-react";

const Impact = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Higher Income",
      description: "Increase your crop yields by up to 40% with AI-optimized farming strategies",
      metric: "+40%",
      color: "text-accent"
    },
    {
      icon: Leaf,
      title: "Soil Health",
      description: "Improve soil quality and sustainability through data-driven recommendations",
      metric: "+60%",
      color: "text-success"
    },
    {
      icon: Droplets,
      title: "Water Efficiency",
      description: "Reduce water consumption while maintaining optimal crop growth",
      metric: "-30%",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Reduced Risk",
      description: "Minimize crop loss with predictive weather alerts and expert guidance",
      metric: "-50%",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Real Impact for{" "}
            <span className="text-accent">Real Farmers</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in">
            Join thousands of farmers who have transformed their livelihoods with HarvestPay
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105 animate-scale-in"
            >
              <div className="flex items-center justify-between mb-4">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
                <span className={`text-2xl font-bold ${benefit.color}`}>
                  {benefit.metric}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-primary-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
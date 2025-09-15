import { Database, Lightbulb, CreditCard, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Database,
      title: "Enter Soil/Field Data",
      description: "Input your field location, soil type, and current conditions through our easy-to-use interface."
    },
    {
      number: 2,
      icon: Lightbulb,
      title: "Get AI Crop Recommendation",
      description: "Our AI analyzes your data against thousands of variables to recommend the optimal crops for your farm."
    },
    {
      number: 3,
      icon: CreditCard,
      title: "Apply for Micro-Loan",
      description: "Secure funding instantly for seeds, fertilizers, and equipment with our streamlined loan process."
    },
    {
      number: 4,
      icon: TrendingUp,
      title: "Get Insights & Alerts",
      description: "Receive ongoing guidance, weather alerts, and market updates to optimize your farming success."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            How{" "}
            <span className="text-primary">HarvestPay</span>{" "}
            Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Four simple steps to transform your farming experience
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="relative mb-6">
                  <div className="bg-gradient-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-elegant">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
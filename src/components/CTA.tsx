import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { email, phone });
    setEmail("");
    setPhone("");
  };

  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-6 animate-fade-in">
            Ready to Transform Your{" "}
            <span className="text-primary">Harvest?</span>
          </h2>
          
          <p className="text-xl text-accent-foreground/80 mb-8 animate-fade-in">
            Join thousands of farmers already growing smarter and earning more with HarvestPay
          </p>
          
          <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-elegant animate-scale-in">
            <h3 className="text-2xl font-semibold text-card-foreground mb-6">
              Start Your Free Trial Today
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full h-12 text-lg"
              >
                Join the Waitlist - It's Free!
              </Button>
            </form>
            
            <p className="text-muted-foreground text-sm mt-4">
              No credit card required. Get early access and exclusive farming tips.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button variant="outline" size="lg" className="bg-card/20 border-card text-card-foreground hover:bg-card">
              Download Brochure
            </Button>
            <Button variant="ghost" size="lg" className="text-accent-foreground hover:bg-card/20">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
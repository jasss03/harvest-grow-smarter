const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in">
          Revolutionizing Agriculture with AI
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in">
          HarvestPay combines cutting-edge artificial intelligence with financial accessibility to empower farmers worldwide. 
          Get personalized crop guidance, real-time weather insights, and instant micro-loans — all in your pocket.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-scale-in">
            <div className="text-4xl font-bold text-accent mb-2">25M+</div>
            <p className="text-muted-foreground">Farmers Empowered</p>
          </div>
          <div className="text-center animate-scale-in">
            <div className="text-4xl font-bold text-success mb-2">40%</div>
            <p className="text-muted-foreground">Average Yield Increase</p>
          </div>
          <div className="text-center animate-scale-in">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <p className="text-muted-foreground">Loan Approval Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react";

const Index = () => {
  const featuredContent = [
    {
      type: "Case Study",
      title: "Startup Scales 300% with AI Customer Support",
      description: "How a SaaS startup reduced response time by 90% and increased customer satisfaction using our custom AI agents.",
      readTime: "5 min read"
    },
    {
      type: "Blog",
      title: "The Future of AI Agents in Business",
      description: "Exploring how intelligent automation is reshaping industries and creating new opportunities for growth.",
      readTime: "3 min read"
    },
    {
      type: "Case Study", 
      title: "Agency Automates Client Reporting",
      description: "Marketing agency saves 20 hours per week with AI-powered client dashboards and automated insights.",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl gradient-primary shadow-elegant"></div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">import.ai</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth font-medium">Services</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth font-medium">Case Studies</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth font-medium">Blog</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth font-medium">About</a>
          </div>
          <Button className="shadow-elegant hover:shadow-hover transition-smooth px-6">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 lg:py-40 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
              <Zap className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">AI Automation Experts</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              Custom AI agents for{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                startups, solo founders, and agencies
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Measurable wins in days, not months. Transform your business with intelligent automation that delivers real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-lg px-10 py-4 shadow-elegant hover:shadow-hover transition-smooth">
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-4 border-primary/20 hover:bg-primary/5 transition-smooth">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                import.ai?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We specialize in building custom AI agents that integrate seamlessly with your existing workflows, 
              delivering immediate impact and measurable ROI for growing businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center gradient-card shadow-card hover:shadow-hover transition-smooth border-0 group">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Rapid Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  Get your AI agents up and running in days, not months. Our proven process ensures quick deployment with immediate results.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center gradient-card shadow-card hover:shadow-hover transition-smooth border-0 group">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Tailored Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  Every AI agent is custom-built for your specific needs, ensuring perfect integration with your business processes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center gradient-card shadow-card hover:shadow-hover transition-smooth border-0 group">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Measurable ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  Track real metrics and see tangible improvements in efficiency, cost savings, and business growth from day one.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-24 bg-muted/20">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Featured Case Studies &{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Insights
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how businesses like yours are achieving remarkable results with custom AI agents.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <Card key={index} className="group cursor-pointer gradient-card shadow-card hover:shadow-hover transition-smooth border-0 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                      {item.type}
                    </span>
                    <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">{item.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-smooth text-xl leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6 leading-relaxed text-muted-foreground">
                    {item.description}
                  </CardDescription>
                  <div className="flex items-center text-primary group-hover:translate-x-2 transition-smooth font-medium">
                    <span className="text-sm">Read more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="px-8 py-3 border-primary/20 hover:bg-primary/5 transition-smooth">
              View All Content
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-12 opacity-95 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of businesses already benefiting from custom AI agents. 
              Let's discuss how we can accelerate your growth.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-10 py-4 shadow-elegant hover:shadow-hover transition-smooth">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="h-8 w-8 rounded-xl gradient-primary"></div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">import.ai</span>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-primary transition-smooth font-medium">Privacy</a>
              <a href="#" className="hover:text-primary transition-smooth font-medium">Terms</a>
              <a href="#" className="hover:text-primary transition-smooth font-medium">Contact</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm opacity-70">
            © 2024 import.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

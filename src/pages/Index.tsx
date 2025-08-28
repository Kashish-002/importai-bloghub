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
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-primary"></div>
            <span className="text-xl font-bold text-foreground">import.ai</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          </div>
          <Button>Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-muted/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Custom AI agents for startups, solo founders, and agencies
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Measurable wins in days, not months. Transform your business with intelligent automation that delivers real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Why Choose import.ai?
            </h2>
            <p className="text-lg text-muted-foreground">
              We specialize in building custom AI agents that integrate seamlessly with your existing workflows, 
              delivering immediate impact and measurable ROI for growing businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Rapid Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Get your AI agents up and running in days, not months. Our proven process ensures quick deployment with immediate results.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Tailored Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Every AI agent is custom-built for your specific needs, ensuring perfect integration with your business processes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Measurable ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Track real metrics and see tangible improvements in efficiency, cost savings, and business growth from day one.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Case Studies & Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how businesses like yours are achieving remarkable results with custom AI agents.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {item.type}
                    </span>
                    <span className="text-sm text-muted-foreground">{item.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {item.description}
                  </CardDescription>
                  <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Read more</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Content
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join hundreds of businesses already benefiting from custom AI agents. 
              Let's discuss how we can accelerate your growth.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-6 w-6 rounded bg-primary"></div>
              <span className="text-lg font-bold">import.ai</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm opacity-70">
            © 2024 import.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

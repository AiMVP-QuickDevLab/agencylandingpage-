const ServicesSection = () => {
  const services = [
    {
      icon: "fas fa-robot",
      title: "Agentic AI",
      description: "Intelligent autonomous agents that can perform complex tasks, make decisions, and interact with users naturally to streamline your business processes.",
      features: ["Autonomous Decision Making", "Natural Language Processing", "Task Automation", "Intelligent Workflows"],
      link: "#contact"
    },
    {
      icon: "fas fa-comments",
      title: "Chatbot Development", 
      description: "Custom conversational AI solutions that engage customers 24/7, handle inquiries, and provide seamless user experiences across platforms.",
      features: ["Multi-platform Support", "Natural Conversations", "CRM Integration", "Analytics & Insights"],
      link: "#contact"
    },
    {
      icon: "fas fa-rocket",
      title: "MVP Development",
      description: "Rapid prototyping and development of minimum viable products to validate your ideas and get to market faster with proven methodologies.",
      features: ["Rapid Prototyping", "Market Validation", "Agile Development", "User Testing"],
      link: "#contact"
    },
    {
      icon: "fas fa-brain",
      title: "Custom AI Services",
      description: "Tailored artificial intelligence solutions designed specifically for your business needs, from machine learning models to AI integrations.",
      features: ["Machine Learning", "AI Integration", "Data Analysis", "Predictive Models"],
      link: "#contact"
    },
    {
      icon: "fas fa-server",
      title: "Backend Services",
      description: "Robust, scalable backend infrastructure and API development to power your applications with reliable and secure server-side solutions.",
      features: ["API Development", "Database Design", "Cloud Infrastructure", "Security Implementation"],
      link: "#contact"
    },
    {
      icon: "fas fa-paint-brush",
      title: "Webflow Development",
      description: "Professional Webflow websites and applications with custom interactions, responsive design, and seamless content management systems.",
      features: ["Custom Interactions", "Responsive Design", "CMS Integration", "Performance Optimization"],
      link: "#contact"
    }
  ];

  return (
    <section id="services" className="relative z-10 section-spacing">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-6">
            Our Expertise
          </div>
          <h2 className="text-foreground mb-6">Services We Offer</h2>
          <p className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-base glass-effect hover:bg-white/10 transition-all duration-300 group transform hover:scale-105"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors touch-target">
                <i className={`${service.icon} text-purple-400 text-xl`}></i>
              </div>
              
              <h3 className="text-xl text-foreground font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 text-base leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-muted-foreground text-sm">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href={service.link}
                className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-all group-hover:translate-x-1 transform duration-200 touch-target"
              >
                Learn More <i className="fas fa-arrow-right ml-2 text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

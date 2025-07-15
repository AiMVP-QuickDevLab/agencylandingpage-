
const PortfolioSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce platform with advanced features, payment integration, and seamless user experience built for a leading retail brand.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "/projects/ecommerce-platform",
      metrics: { users: "10K+", conversion: "15%" }
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development", 
      description: "Comprehensive healthcare mobile application for patient management, telemedicine, and health tracking with HIPAA compliance.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "AI/ML", "HIPAA"],
      link: "/projects/healthcare-app",
      metrics: { downloads: "50K+", rating: "4.8★" }
    },
    {
      title: "Financial Analytics Dashboard",
      category: "Data Analytics",
      description: "Real-time financial analytics dashboard with advanced reporting, insights, and predictive modeling for investment firms.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Python", "AWS", "D3.js"],
      link: "/projects/financial-dashboard",
      metrics: { data: "1TB+", users: "500+" }
    },
    {
      title: "IoT Management Platform",
      category: "Cloud Solutions",
      description: "Scalable IoT device management platform with real-time monitoring, analytics, and automated control systems.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      technologies: ["Angular", "Microservices", "Docker", "Azure"],
      link: "/projects/iot-platform",
      metrics: { devices: "100K+", uptime: "99.9%" }
    },
    {
      title: "AI-Powered CRM System",
      category: "AI & Machine Learning",
      description: "Intelligent customer relationship management system with predictive analytics, automated workflows, and smart insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "Python", "TensorFlow", "PostgreSQL"],
      link: "/projects/ai-crm-system",
      metrics: { accuracy: "94%", leads: "+40%" }
    },
    {
      title: "Enterprise Design System",
      category: "UI/UX Design",
      description: "Comprehensive design system and component library for enterprise applications with accessibility and scalability focus.",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=600&h=400&fit=crop",
      technologies: ["Figma", "Storybook", "React", "Sass"],
      link: "/projects/design-system",
      metrics: { components: "200+", teams: "15+" }
    }
  ];

  return (
    <section id="portfolio" className="relative z-10 section-spacing">
      <div className="container">
        <div className="text-center section-spacing-sm">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-6">
            Our Work
          </div>
          <h2 className="text-foreground mb-6">Featured Projects</h2>
          <p className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their digital transformation goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="card-base glass-effect hover:bg-white/10 transition-all duration-300 group transform hover:scale-105 overflow-hidden p-0">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm text-purple-300 text-xs rounded-full border border-purple-500/30">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl text-foreground font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">{project.description}</p>
                
                {/* Metrics */}
                <div className="flex gap-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-purple-400 font-semibold text-sm">{value}</div>
                      <div className="text-muted-foreground text-xs capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/10 text-muted-foreground text-xs rounded border border-white/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-all group-hover:translate-x-1 transform duration-200 touch-target"
                >
                  View Case Study <i className="fas fa-arrow-right ml-2 text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#contact" 
            className="btn-base bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all transform hover:scale-105 touch-target"
          >
            Start Your Project <i className="fas fa-arrow-right ml-2 text-xs"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

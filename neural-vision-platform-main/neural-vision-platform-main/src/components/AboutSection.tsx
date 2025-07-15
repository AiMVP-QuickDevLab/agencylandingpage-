
const AboutSection = () => {
  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Support" }
  ];

  const values = [
    {
      icon: "fas fa-zap",
      title: "Speed",
      description: "We deliver projects faster without compromising on quality through efficient processes and proven methodologies."
    },
    {
      icon: "fas fa-users",
      title: "Collaboration", 
      description: "We work closely with our clients to ensure their vision becomes reality through partnership and transparency."
    },
    {
      icon: "fas fa-award",
      title: "Excellence",
      description: "We deliver high-quality solutions that exceed expectations and drive measurable business success."
    },
    {
      icon: "fas fa-rocket",
      title: "Innovation",
      description: "We leverage the latest technologies and best practices to build future-ready applications that scale."
    }
  ];

  return (
    <section id="about" className="relative z-10 section-spacing">
      <div className="container">
        {/* Header */}
        <div className="text-center section-spacing-sm">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-6">
            About Us
          </div>
          <h2 className="text-foreground mb-6">About QuickDevLab</h2>
          <p className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto">
            We are a passionate team of developers, designers, and strategists dedicated to rapid development and exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl text-foreground mb-6">Our Story</h3>
              <div className="space-y-6">
                <p className="text-responsive-base text-muted-foreground">
                  Founded with a vision to accelerate digital transformation, QuickDevLab has been delivering 
                  rapid, high-quality development solutions for businesses of all sizes for over 5 years.
                </p>
                <p className="text-base text-muted-foreground">
                  Our mission is to eliminate the barriers between great ideas and successful products. We believe 
                  in the power of speed, efficiency, and continuous innovation to help businesses stay competitive 
                  in today's fast-paced digital landscape.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="card-base glass-effect text-center">
                  <div className="text-2xl text-purple-400 font-bold">{stat.number}</div>
                  <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="card-base glass-effect">
              <h3 className="text-2xl text-foreground mb-8">Our Values</h3>
              
              <div className="space-y-8">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 touch-target">
                      <i className={`${value.icon} text-purple-400 text-lg`}></i>
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold mb-2 text-lg">{value.title}</h4>
                      <p className="text-muted-foreground text-base">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-8">
          <h3 className="text-3xl text-foreground">Ready to Build Something Amazing?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-responsive-base">
            Let's transform your ideas into reality with our expert development team and proven methodologies.
          </p>
          <a 
            href="#contact" 
            className="btn-base bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 transition-all touch-target"
          >
            Start Your Project <i className="fas fa-arrow-right ml-2 text-xs"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

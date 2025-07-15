const HeroSection = () => {
  return (
    <section className="relative z-10 min-h-[90vh] flex items-center section-spacing">
      <div className="container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                Rapid Development Excellence
              </span>
            </div>
            
            <h1 className="text-foreground">
              Build <span className="text-purple-400">Faster</span>, Launch <span className="text-purple-400">Smarter</span>
            </h1>
            
            <p className="text-responsive-base text-muted-foreground max-w-xl">
              QuickDevLab transforms your ideas into reality with lightning-fast development, cutting-edge technology, and proven expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="btn-base bg-purple-600 hover:bg-purple-700 text-white font-medium text-center transition-all transform hover:scale-105 touch-target"
              >
                Start Your Project
              </a>
              <a 
                href="#portfolio" 
                className="btn-base bg-white/10 hover:bg-white/15 text-foreground border border-white/10 transition-all touch-target"
              >
                <i className="fas fa-eye text-xs mr-2"></i> View Our Work
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-4">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-foreground">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Enhanced Floating Cards */}
          <div className="relative h-[500px] flex items-center justify-center hidden lg:block">
            {/* Main glass card */}
            <div className="card-base glass-effect w-80 h-80 absolute transform rotate-6 floating-delay">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <i className="fas fa-code text-purple-400 text-sm"></i>
                  </div>
                  <span className="ml-3 text-foreground text-lg">AI Development</span>
                </div>
                <div className="flex-1 bg-white/5 rounded-lg p-4 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500/10 via-purple-600/20 to-purple-500/10 rounded-md flex items-center justify-center">
                    <i className="fas fa-laptop-code text-4xl text-purple-400/70"></i>
                  </div>
                </div>
                <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-purple-500 rounded-full"></div>
                </div>
                <div className="mt-2 text-xs text-muted-foreground text-right">Progress: 85%</div>
              </div>
            </div>
            
            {/* Secondary glass cards */}
            <div className="card-base glass-effect w-64 h-44 absolute -bottom-4 -left-4 transform -rotate-12 floating">
              <div className="flex justify-between items-center mb-3">
                <span className="text-foreground text-sm">Client Satisfaction</span>
                <i className="fas fa-star text-yellow-400 text-xs"></i>
              </div>
              <div className="text-3xl text-foreground font-bold mb-2">100%</div>
              <div className="text-xs text-muted-foreground">Based on 30+ reviews</div>
              <div className="flex mt-3 gap-1">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 text-xs"></i>
                ))}
              </div>
            </div>
            
            <div className="card-base glass-effect w-48 h-48 absolute top-0 right-0 transform rotate-12 floating">
              <div className="h-full flex flex-col">
                <div className="text-foreground text-sm mb-2">Technologies</div>
                <div className="flex-1 flex flex-wrap gap-2 items-start">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">Webflow</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded">Python</span>
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded">AWS</span>
                  <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded">AI/ML</span>
                  <span className="px-2 py-1 bg-teal-500/20 text-teal-300 text-xs rounded">Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
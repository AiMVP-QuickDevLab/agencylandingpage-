const Footer = () => {
  const services = ["Rapid Web Development", "Mobile App Development", "Cloud Solutions", "AI & Machine Learning", "UI/UX Design", "Digital Strategy"];
  const company = [{
    name: "About Us",
    href: "#about"
  }, {
    name: "Our Team",
    href: "#about"
  }, {
    name: "Careers",
    href: "#contact"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  const resources = [{
    name: "Blog",
    href: "#"
  }, {
    name: "Case Studies",
    href: "#portfolio"
  }, {
    name: "Documentation",
    href: "#"
  }, {
    name: "Support",
    href: "#contact"
  }];
  return (
    <footer className="relative z-10 bg-black/20 border-t border-white/10">
      <div className="container section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center border border-white/10">
                <i className="fas fa-code text-white"></i>
              </div>
              <span className="text-foreground text-xl font-semibold">
                Quick<span className="text-purple-400">DevLab</span>
              </span>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              Accelerating digital transformation through rapid development, cutting-edge technology solutions, and innovative design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="touch-target w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-purple-600/30 transition-all">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="touch-target w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-purple-600/30 transition-all">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="touch-target w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-purple-600/30 transition-all">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="touch-target w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-purple-600/30 transition-all">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors text-base touch-target block py-1">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-foreground font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-muted-foreground hover:text-foreground transition-colors text-base touch-target block py-1">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-base">
            © 2024 QuickDevLab. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
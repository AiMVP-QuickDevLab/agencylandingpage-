import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="relative z-10 w-full py-5">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center border border-white/10">
              <i className="fas fa-code text-white"></i>
            </div>
            <span className="text-foreground text-xl font-semibold">
              Quick<span className="text-purple-400">DevLab</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors text-base font-medium">
              Services
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-base font-medium">
              About
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors text-base font-medium">
              Portfolio
            </a>
          </div>
          
          {/* CTA and Mobile Menu */}
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="btn-base bg-purple-600/20 hover:bg-purple-600/30 text-foreground border border-purple-500/30 touch-target"
            >
              Start Project
            </a>
            <button 
              className="md:hidden text-foreground touch-target p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-4 right-4 mt-2 glass-effect bg-white/5 border border-white/10 rounded-lg p-4 md:hidden">
              <div className="flex flex-col gap-4">
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors py-2 touch-target">
                  Services
                </a>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors py-2 touch-target">
                  About
                </a>
                <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors py-2 touch-target">
                  Portfolio
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors py-2 touch-target">
                  Contact
                </a>
                <hr className="border-white/10" />
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors py-2 touch-target">
                  Get Quote
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
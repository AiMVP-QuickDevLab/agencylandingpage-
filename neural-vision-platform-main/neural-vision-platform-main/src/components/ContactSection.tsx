
const ContactSection = () => {
  return (
    <section id="contact" className="relative z-10 section-spacing">
      <div className="container">
        <div className="text-center section-spacing-sm">
          <h2 className="text-foreground mb-6">Get In Touch</h2>
          <p className="text-responsive-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-base glass-effect">
            <h3 className="text-2xl text-foreground mb-8">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-field">
                  <label className="form-label">First Name</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="John"
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">Last Name</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="form-field">
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-input"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="form-field">
                <label className="form-label">Project Type</label>
                <select className="form-input">
                  <option value="" className="bg-gray-800">Select a service</option>
                  <option value="web" className="bg-gray-800">Web Development</option>
                  <option value="mobile" className="bg-gray-800">Mobile Development</option>
                  <option value="cloud" className="bg-gray-800">Cloud Solutions</option>
                  <option value="ai" className="bg-gray-800">AI & Machine Learning</option>
                  <option value="design" className="bg-gray-800">UI/UX Design</option>
                  <option value="strategy" className="bg-gray-800">Digital Strategy</option>
                </select>
              </div>
              
              <div className="form-field">
                <label className="form-label">Message</label>
                <textarea 
                  rows={4}
                  className="form-input resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-base w-full bg-purple-600 hover:bg-purple-700 text-white font-medium touch-target"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="card-base glass-effect">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center touch-target">
                  <i className="fas fa-envelope text-purple-400"></i>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Email Us</h4>
                  <p className="text-muted-foreground">contact@quickdevlab.com</p>
                </div>
              </div>
            </div>

            <div className="card-base glass-effect">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center touch-target">
                  <i className="fas fa-phone text-purple-400"></i>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="card-base glass-effect">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center touch-target">
                  <i className="fas fa-map-marker-alt text-purple-400"></i>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">Visit Us</h4>
                  <p className="text-muted-foreground">123 Tech Street, Digital City, DC 12345</p>
                </div>
              </div>
            </div>

            <div className="card-base glass-effect">
              <h4 className="text-foreground font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="touch-target w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/20 transition-all">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="touch-target w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/20 transition-all">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="touch-target w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/20 transition-all">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="touch-target w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/20 transition-all">
                  <i className="fab fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

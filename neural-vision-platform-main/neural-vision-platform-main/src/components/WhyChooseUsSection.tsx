
const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: "fas fa-award",
      title: "Proven Excellence",
      description: "5+ years of delivering exceptional results with a track record of successful projects across various industries."
    },
    {
      icon: "fas fa-users",
      title: "Expert Team",
      description: "Skilled professionals with deep expertise in cutting-edge technologies and industry best practices."
    },
    {
      icon: "fas fa-clock",
      title: "Timely Delivery",
      description: "We respect deadlines and ensure projects are delivered on time without compromising quality."
    },
    {
      icon: "fas fa-headset",
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your applications run smoothly and efficiently at all times."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Security First",
      description: "We prioritize security in every aspect of development, ensuring your data and applications are protected."
    },
    {
      icon: "fas fa-expand-arrows-alt",
      title: "Scalable Solutions",
      description: "Built for growth - our solutions scale with your business needs and accommodate future expansions."
    }
  ];

  return (
    <section className="relative z-10 py-20 px-4 md:px-8 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-6">What Sets Us Apart</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We combine technical expertise with innovative thinking to deliver solutions that drive real business results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors">
                <i className={`${reason.icon} text-purple-400 text-2xl`}></i>
              </div>
              
              <h3 className="text-xl text-white font-semibold mb-3">{reason.title}</h3>
              <p className="text-white/70 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

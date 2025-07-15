
const ClientsSection = () => {
  // Dummy client logos/names for the marquee
  const clients = [
    { name: "TechStartup", icon: "fas fa-rocket" },
    { name: "InnovateCorp", icon: "fas fa-lightbulb" },
    { name: "DataFlow", icon: "fas fa-chart-line" },
    { name: "CloudTech", icon: "fas fa-cloud" },
    { name: "AI Solutions", icon: "fas fa-brain" },
    { name: "DevStudio", icon: "fas fa-code" },
    { name: "NextGen", icon: "fas fa-arrow-right" },
    { name: "ScaleUp", icon: "fas fa-expand-arrows-alt" },
    { name: "DigitalEdge", icon: "fas fa-digital-tachograph" },
    { name: "FutureLab", icon: "fas fa-flask" },
    { name: "TechVision", icon: "fas fa-eye" },
    { name: "SmartFlow", icon: "fas fa-stream" }
  ];

  return (
    <section className="relative z-10 py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-4">
            Our Clients
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-6">Trusted by Teams Worldwide</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Trusted by early-stage startups and global teams to bring their ideas to life
          </p>
        </div>

        {/* Infinite Marquee */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {clients.map((client, index) => (
                <div key={index} className="mx-8 flex items-center">
                  <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-4 flex items-center space-x-3 min-w-[180px]">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <i className={`${client.icon} text-purple-400 text-lg`}></i>
                    </div>
                    <span className="text-white/80 font-medium">{client.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex animate-marquee2 whitespace-nowrap absolute top-0">
              {clients.map((client, index) => (
                <div key={index} className="mx-8 flex items-center">
                  <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-4 flex items-center space-x-3 min-w-[180px]">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <i className={`${client.icon} text-purple-400 text-lg`}></i>
                    </div>
                    <span className="text-white/80 font-medium">{client.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

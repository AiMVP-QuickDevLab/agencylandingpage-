
import { ArrowLeft, Cpu, Cloud, Zap, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import NeuroBackground from '../../components/NeuroBackground';

const IoTPlatform = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: '#181025' }}>
      <NeuroBackground />
      
      {/* Header */}
      <div className="relative z-10 px-4 md:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/#portfolio" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
          
          <div className="text-center mb-12">
            <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm text-purple-300 text-sm rounded-full border border-purple-500/30 mb-4 inline-block">
              Cloud Solutions
            </span>
            <h1 className="text-4xl md:text-6xl text-white mb-6">IoT Management Platform</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Scalable IoT device management platform with real-time monitoring, analytics, and automated control systems.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative z-10 px-4 md:px-8 mb-16">
        <div className="max-w-6xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop" 
            alt="IoT Management Platform"
            className="w-full h-96 object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Cpu className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">100K+</div>
              <div className="text-white/60 text-sm">Connected Devices</div>
            </div>
            <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Activity className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-white/60 text-sm">Uptime</div>
            </div>
            <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Cloud className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-white/60 text-sm">Enterprise Clients</div>
            </div>
            <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">1M+</div>
              <div className="text-white/60 text-sm">Events/Day</div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl text-white mb-6">Project Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Developed a comprehensive IoT management platform capable of handling over 100,000 connected devices simultaneously. The platform provides real-time monitoring, predictive maintenance, and automated control systems for industrial and commercial IoT deployments.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              The solution has transformed how enterprises manage their IoT infrastructure, reducing maintenance costs by 45% and improving operational efficiency significantly.
            </p>
          </div>

          {/* Technologies Used */}
          <div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl text-white mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {['Angular', 'Microservices', 'Docker', 'Azure', 'MQTT', 'InfluxDB', 'Kubernetes', 'Node.js'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl text-white mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl text-white mb-3">Real-time Monitoring</h3>
                <p className="text-white/70">Live device status tracking with customizable alerts and automated responses.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">Predictive Maintenance</h3>
                <p className="text-white/70">AI-powered analytics to predict device failures before they occur.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">Scalable Architecture</h3>
                <p className="text-white/70">Microservices-based design that scales horizontally with demand.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">Device Management</h3>
                <p className="text-white/70">Centralized device provisioning, configuration, and firmware updates.</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl text-white mb-6">Results & Impact</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Managing 100K+ IoT devices with 99.9% uptime</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Reduced maintenance costs by 45%</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Processing 1M+ device events daily</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Serving 50+ enterprise clients across multiple industries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IoTPlatform;

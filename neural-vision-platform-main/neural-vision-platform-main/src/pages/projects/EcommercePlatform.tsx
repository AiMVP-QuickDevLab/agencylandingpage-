
import { ArrowLeft, ExternalLink, Calendar, Users, TrendingUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import NeuroBackground from '../../components/NeuroBackground';

const EcommercePlatform = () => {
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
              Web Development
            </span>
            <h1 className="text-4xl md:text-6xl text-white mb-6">E-commerce Platform</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Modern e-commerce platform with advanced features, payment integration, and seamless user experience built for a leading retail brand.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative z-10 px-4 md:px-8 mb-16">
        <div className="max-w-6xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop" 
            alt="E-commerce Platform"
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
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-white/60 text-sm">Active Users</div>
            </div>
            <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">15%</div>
              <div className="text-white/60 text-sm">Conversion Rate</div>
            </div>
            <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Calendar className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">6</div>
              <div className="text-white/60 text-sm">Months</div>
            </div>
            <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Star className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">4.9</div>
              <div className="text-white/60 text-sm">User Rating</div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl text-white mb-6">Project Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Our team was tasked with creating a modern, scalable e-commerce platform that could handle high traffic volumes while providing an exceptional user experience. The platform needed to integrate with multiple payment providers, support international shipping, and provide real-time inventory management.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              The solution we delivered exceeded expectations, resulting in a 40% increase in sales within the first quarter and significantly improved customer satisfaction scores.
            </p>
          </div>

          {/* Technologies Used */}
          <div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl text-white mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Redis', 'Docker', 'GraphQL'].map((tech) => (
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
                <h3 className="text-xl text-white mb-3">Advanced Search & Filtering</h3>
                <p className="text-white/70">Intelligent search with auto-suggestions, filters, and sorting options to help users find products quickly.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">Multi-Payment Integration</h3>
                <p className="text-white/70">Support for multiple payment methods including Stripe, PayPal, and cryptocurrency payments.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">Real-time Inventory</h3>
                <p className="text-white/70">Live inventory tracking with automatic stock updates and low-stock alerts.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">Mobile-First Design</h3>
                <p className="text-white/70">Responsive design optimized for mobile devices with progressive web app capabilities.</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl text-white mb-6">Results & Impact</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Increased sales by 40% within the first quarter</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Reduced page load times by 60%</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Improved conversion rate from 8% to 15%</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Achieved 99.9% uptime with auto-scaling infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommercePlatform;

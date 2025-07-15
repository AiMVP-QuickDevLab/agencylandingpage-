
import { ArrowLeft, BarChart3, Database, TrendingUp, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import NeuroBackground from '../../components/NeuroBackground';

const FinancialDashboard = () => {
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
              Data Analytics
            </span>
            <h1 className="text-4xl md:text-6xl text-white mb-6">Financial Analytics Dashboard</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real-time financial analytics dashboard with advanced reporting, insights, and predictive modeling for investment firms.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative z-10 px-4 md:px-8 mb-16">
        <div className="max-w-6xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop" 
            alt="Financial Analytics Dashboard"
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
              <Database className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">1TB+</div>
              <div className="text-white/60 text-sm">Data Processed</div>
            </div>
            <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-white/60 text-sm">Active Users</div>
            </div>
            <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <BarChart3 className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-white/60 text-sm">Custom Reports</div>
            </div>
            <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <DollarSign className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">$2B+</div>
              <div className="text-white/60 text-sm">Assets Tracked</div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl text-white mb-6">Project Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Built a sophisticated financial analytics platform that processes over 1TB of market data daily. The dashboard provides real-time insights, predictive modeling, and custom reporting capabilities for investment professionals managing billions in assets.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              The platform has become an essential tool for portfolio managers, providing them with the data-driven insights needed to make informed investment decisions.
            </p>
          </div>

          {/* Technologies Used */}
          <div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl text-white mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {['Vue.js', 'Python', 'AWS', 'D3.js', 'PostgreSQL', 'Redis', 'Apache Kafka', 'Machine Learning'].map((tech) => (
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
                <h3 className="text-xl text-white mb-3">Real-time Market Data</h3>
                <p className="text-white/70">Live market data feeds with millisecond-level updates and historical trend analysis.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">Predictive Analytics</h3>
                <p className="text-white/70">Machine learning models for risk assessment and market trend predictions.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">Custom Reporting</h3>
                <p className="text-white/70">Drag-and-drop report builder with automated scheduling and distribution.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">Risk Management Tools</h3>
                <p className="text-white/70">Advanced risk calculation and portfolio optimization algorithms.</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl text-white mb-6">Results & Impact</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Processing 1TB+ of financial data daily</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Reduced report generation time by 85%</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Improved investment decision accuracy by 35%</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Serving 500+ portfolio managers across 15 countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;

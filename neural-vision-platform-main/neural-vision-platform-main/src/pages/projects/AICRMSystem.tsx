
import { ArrowLeft, Brain, Users, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import NeuroBackground from '../../components/NeuroBackground';

const AICRMSystem = () => {
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
              AI & Machine Learning
            </span>
            <h1 className="text-4xl md:text-6xl text-white mb-6">AI-Powered CRM System</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Intelligent customer relationship management system with predictive analytics, automated workflows, and smart insights.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative z-10 px-4 md:px-8 mb-16">
        <div className="max-w-6xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop" 
            alt="AI-Powered CRM System"
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
              <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">94%</div>
              <div className="text-white/60 text-sm">AI Accuracy</div>
            </div>
            <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">+40%</div>
              <div className="text-white/60 text-sm">Lead Generation</div>
            </div>
            <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-white/60 text-sm">Active Users</div>
            </div>
            <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">75%</div>
              <div className="text-white/60 text-sm">Process Automation</div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl text-white mb-6">Project Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Built an intelligent CRM system that leverages machine learning to predict customer behavior, automate sales processes, and provide actionable insights. The system processes thousands of customer interactions daily and provides sales teams with AI-powered recommendations.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              The platform has revolutionized sales operations, increasing lead conversion rates by 40% and automating 75% of routine sales tasks.
            </p>
          </div>

          {/* Technologies Used */}
          <div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl text-white mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {['React', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'FastAPI', 'Docker', 'Scikit-learn'].map((tech) => (
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
                <h3 className="text-xl text-white mb-3">Predictive Lead Scoring</h3>
                <p className="text-white/70">AI algorithms that score leads based on conversion probability and engagement patterns.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">Automated Workflows</h3>
                <p className="text-white/70">Smart automation for email sequences, follow-ups, and task assignments.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">Customer Insights</h3>
                <p className="text-white/70">Deep analytics on customer behavior with actionable recommendations.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">Smart Forecasting</h3>
                <p className="text-white/70">AI-powered sales forecasting with accuracy rates exceeding 94%.</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl text-white mb-6">Results & Impact</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Achieved 94% accuracy in predictive analytics</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Increased lead generation by 40%</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Automated 75% of routine sales tasks</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Serving 10,000+ sales professionals across 200+ companies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICRMSystem;

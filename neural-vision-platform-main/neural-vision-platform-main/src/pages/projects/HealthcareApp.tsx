
import { ArrowLeft, Smartphone, Shield, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import NeuroBackground from '../../components/NeuroBackground';

const HealthcareApp = () => {
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
              Mobile Development
            </span>
            <h1 className="text-4xl md:text-6xl text-white mb-6">Healthcare Mobile App</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive healthcare mobile application for patient management, telemedicine, and health tracking with HIPAA compliance.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative z-10 px-4 md:px-8 mb-16">
        <div className="max-w-6xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop" 
            alt="Healthcare Mobile App"
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
              <Smartphone className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-white/60 text-sm">Downloads</div>
            </div>
            <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Heart className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">4.8★</div>
              <div className="text-white/60 text-sm">App Rating</div>
            </div>
            <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-white/60 text-sm">Healthcare Providers</div>
            </div>
            <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-white/60 text-sm">HIPAA Compliant</div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl text-white mb-6">Project Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Developed a comprehensive healthcare mobile application that connects patients with healthcare providers through secure telemedicine capabilities. The app features appointment scheduling, health tracking, prescription management, and secure messaging - all while maintaining strict HIPAA compliance.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              The application has revolutionized patient care delivery, reducing wait times by 70% and improving patient satisfaction scores significantly.
            </p>
          </div>

          {/* Technologies Used */}
          <div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl text-white mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {['React Native', 'Firebase', 'AI/ML', 'HIPAA', 'WebRTC', 'Node.js', 'PostgreSQL', 'AWS'].map((tech) => (
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
                <h3 className="text-xl text-white mb-3">Telemedicine Video Calls</h3>
                <p className="text-white/70">High-quality, secure video consultations with built-in prescription and note-taking capabilities.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">Health Tracking Dashboard</h3>
                <p className="text-white/70">Comprehensive health metrics tracking with AI-powered insights and trend analysis.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">Appointment Management</h3>
                <p className="text-white/70">Smart scheduling system with automated reminders and calendar integration.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">Secure Messaging</h3>
                <p className="text-white/70">HIPAA-compliant messaging system for patient-provider communication.</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl text-white mb-6">Results & Impact</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Reduced patient wait times by 70%</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Achieved 4.8-star rating with 50K+ downloads</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Onboarded 500+ healthcare providers</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Maintained 100% HIPAA compliance with zero security incidents</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareApp;

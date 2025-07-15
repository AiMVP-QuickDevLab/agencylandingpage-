
import { ArrowLeft, Palette, Layers, Users, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import NeuroBackground from '../../components/NeuroBackground';

const DesignSystem = () => {
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
              UI/UX Design
            </span>
            <h1 className="text-4xl md:text-6xl text-white mb-6">Enterprise Design System</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive design system and component library for enterprise applications with accessibility and scalability focus.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative z-10 px-4 md:px-8 mb-16">
        <div className="max-w-6xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=1200&h=600&fit=crop" 
            alt="Enterprise Design System"
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
              <Layers className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">200+</div>
              <div className="text-white/60 text-sm">Components</div>
            </div>
            <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-white/60 text-sm">Development Teams</div>
            </div>
            <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Code className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-white/60 text-sm">Applications</div>
            </div>
            <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <Palette className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-white/60 text-sm">WCAG Compliant</div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl text-white mb-6">Project Overview</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Created a comprehensive design system that standardizes UI components across 50+ enterprise applications. The system includes 200+ reusable components, detailed documentation, and automated testing to ensure consistency and accessibility across all products.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              The design system has reduced development time by 60% and ensures consistent user experience across all enterprise applications.
            </p>
          </div>

          {/* Technologies Used */}
          <div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl text-white mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {['Figma', 'Storybook', 'React', 'Sass', 'TypeScript', 'Jest', 'Chromatic', 'Webpack'].map((tech) => (
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
                <h3 className="text-xl text-white mb-3">Component Library</h3>
                <p className="text-white/70">200+ reusable components with comprehensive documentation and usage examples.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">Accessibility First</h3>
                <p className="text-white/70">100% WCAG 2.1 AA compliant with built-in screen reader support.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">Design Tokens</h3>
                <p className="text-white/70">Centralized design tokens for colors, typography, spacing, and animations.</p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-3">Automated Testing</h3>
                <p className="text-white/70">Visual regression testing and automated accessibility checks.</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="glass-effect bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl text-white mb-6">Results & Impact</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Created 200+ reusable components</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Reduced development time by 60%</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Adopted by 15+ development teams</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span className="text-white/80">Powering 50+ enterprise applications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSystem;

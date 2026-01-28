import React from 'react';
import { Hero } from './components/Hero';
import { Agitation } from './components/Agitation';
import { TransitionCard } from './components/TransitionCard';
import { SocialProof } from './components/SocialProof';
import { TargetAudience } from './components/TargetAudience';
import { Pricing } from './components/Pricing';
import { FluidButton } from './components/ui/FluidButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-clinical-white font-sans selection:bg-alert-orange selection:text-white pt-[76px]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 py-4 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-display font-bold text-xl tracking-tight text-slate-900 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-alert-orange to-red-500 flex items-center justify-center text-white text-xs">LN</div>
            DR. LUCAS NEMES
          </div>
          <FluidButton
            className="hidden md:flex px-6 py-2 text-sm"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            GARANTIR VAGA
          </FluidButton>
        </div>
      </nav>

      <Hero />
      <Agitation />
      <TransitionCard />
      <SocialProof />
      <TargetAudience />
      <Pricing />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-xs text-slate-500 mb-4 tracking-widest uppercase">
            Protocolo Médico Registrado — CRM/SP 123.456
          </p>
          <div className="font-display font-bold text-2xl mb-8 text-white">
            MÉTODO VIDA PLENA © 2024
          </div>
          <div className="flex justify-center gap-6 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

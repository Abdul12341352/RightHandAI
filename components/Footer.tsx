
import React from 'react';
import Logo from './Logo';

interface FooterProps {
  onOpenDemo: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenDemo }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenDemo();
    }
  };

  const handleAction = (e: React.MouseEvent, type: 'scroll' | 'demo', target?: string) => {
    e.preventDefault();
    if (type === 'scroll' && target) {
      scrollTo(target);
    } else {
      onOpenDemo();
    }
  };

  return (
    <footer className="bg-[#0a0f1d] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-8 text-slate-400 max-w-sm text-lg leading-relaxed font-light">
              The definitive communications platform for the world's most successful Med Spas. We replace administrative friction with intelligent automation.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold mb-8 text-white uppercase text-[11px] tracking-[3px] opacity-50">Platform</h4>
              <ul className="space-y-4">
                <li><button onClick={(e) => handleAction(e, 'scroll', 'demos')} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">AI Answering</button></li>
                <li><button onClick={(e) => handleAction(e, 'scroll', 'pricing')} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Calendar Sync</button></li>
                <li><button onClick={(e) => handleAction(e, 'demo')} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">CRM Integrations</button></li>
                <li><button onClick={(e) => handleAction(e, 'scroll', 'demos')} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Revenue Tracking</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-8 text-white uppercase text-[11px] tracking-[3px] opacity-50">Company</h4>
              <ul className="space-y-4">
                <li><button onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">About Us</button></li>
                <li><button onClick={(e) => handleAction(e, 'scroll', 'demos')} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Success Stories</button></li>
                <li><button onClick={(e) => handleAction(e, 'demo')} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Contact Support</button></li>
                <li><button onClick={onOpenDemo} className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-bold">Book a Demo</button></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold mb-8 text-white uppercase text-[11px] tracking-[3px] opacity-50">Status</h4>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            <button onClick={onOpenDemo} className="text-slate-500 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors">Privacy Policy</button>
            <button onClick={onOpenDemo} className="text-slate-500 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors">Terms of Service</button>
            <button onClick={onOpenDemo} className="text-slate-500 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors">HIPAA Compliance</button>
          </div>
          <p className="text-slate-600 text-[11px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} RightHandAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

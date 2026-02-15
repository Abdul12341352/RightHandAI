
import React from 'react';
import Logo from './Logo';

interface HeaderProps {
  scrolled: boolean;
  onOpenDemo: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrolled, onOpenDemo }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo />
        </div>

        <div className="flex items-center gap-10">
          <nav className="hidden xl:flex items-center gap-8 text-[12px] font-bold text-slate-700 uppercase tracking-widest">
            <button 
              onClick={() => scrollTo('demos')} 
              className="hover:text-[#2563eb] transition-colors"
            >
              Hear It
            </button>
            <button 
              onClick={() => scrollTo('pricing')} 
              className="hover:text-[#2563eb] transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollTo('qna')} 
              className="hover:text-[#2563eb] transition-colors"
            >
              Q&A
            </button>
          </nav>
          
          <button 
            onClick={onOpenDemo}
            className="px-7 py-3 bg-[#2563eb] text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200 active:scale-95"
          >
            Activate Your AI
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

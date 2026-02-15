
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import AudioDemos from './components/AudioDemos';
import CallSection from './components/CallSection';
import Pricing from './components/Pricing';
import DemoSlideout from './components/DemoSlideout';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDemo = () => setIsDemoOpen(!isDemoOpen);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 overflow-x-hidden">
      <Header scrolled={scrolled} onOpenDemo={toggleDemo} />
      
      <main>
        <Hero onOpenDemo={toggleDemo} />
        <CallSection />
        <AudioDemos />
        <Pricing onOpenDemo={toggleDemo} />
      </main>

      <Footer onOpenDemo={toggleDemo} />

      <AnimatePresence>
        {isDemoOpen && (
          <DemoSlideout onClose={toggleDemo} />
        )}
      </AnimatePresence>

      {/* Background Gradients for depth */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-50/20 blur-[120px]" />
      </div>
    </div>
  );
};

export default App;

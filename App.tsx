import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 overflow-x-hidden">
      <Header scrolled={scrolled} onOpenDemo={toggleDemo} />
      
      <main>
        <Hero onOpenDemo={toggleDemo} />
        <CallSection />
        <AudioDemos />
        <Pricing onOpenDemo={toggleDemo} />
      </main>

      <Footer onOpenDemo={toggleDemo} />

      {/* Fixed: mode="wait" prevents Safari crashes during transitions */}
      <AnimatePresence mode="wait">
        {isDemoOpen && (
          <DemoSlideout onClose={toggleDemo} />
        )}
      </AnimatePresence>

      {/* Optimized Background: Lower blur for iPhone 13 stability */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[300px] h-[300px] rounded-full bg-blue-100/20 blur-[60px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[300px] h-[300px] rounded-full bg-blue-50/20 blur-[60px]" />
      </div>

      <Analytics />
    </div>
  );
};

export default App;

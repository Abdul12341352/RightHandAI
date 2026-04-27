import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AudioDemos from './components/AudioDemos';
import CallSection from './components/CallSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import DemoSlideout from './components/DemoSlideout'; // This is the piece we missed

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false); // Controls the slideout

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
      
      {/* The actual slideout component */}
      <DemoSlideout isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
};

export default App;

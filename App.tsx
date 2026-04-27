import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AudioDemos from './components/AudioDemos';
import CallSection from './components/CallSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const footer = document.querySelector('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 overflow-x-hidden">
      <Header scrolled={scrolled} onOpenDemo={scrollToContact} />
      <main>
        <Hero onOpenDemo={scrollToContact} />
        <CallSection />
        <AudioDemos />
        <Pricing onOpenDemo={scrollToContact} />
      </main>
      <Footer onOpenDemo={scrollToContact} />
    </div>
  );
};

export default App;

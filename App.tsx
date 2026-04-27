import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AudioDemos from './components/AudioDemos';
import CallSection from './components/CallSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDemo = () => {
    // This makes the button scroll to the bottom instead of crashing the site
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 overflow-x-hidden">
      <Header scrolled={scrolled} onOpenDemo={openDemo} />
      <main>
        <Hero onOpenDemo={openDemo} />
        <CallSection />
        <AudioDemos />
        <Pricing onOpenDemo={openDemo} />
      </main>
      <Footer onOpenDemo={openDemo} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

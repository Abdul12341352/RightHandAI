import React from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2 } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const scrollToDemos = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('demos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#2563eb] rounded-full text-xs font-bold uppercase tracking-wider mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Built for Top-Tier Med Spas
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-8">
            Turn Every Missed Call Into a <br className="hidden md:block" />
            <span className="text-[#2563eb]">Booked Appointment.</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-lg leading-relaxed">
            AI receptionist built specifically for med spas. Answers calls, books appointments, and follows up instantly — even after hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <button 
              onClick={onOpenDemo}
              className="px-10 py-5 bg-[#2563eb] text-white rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
            >
              Activate Your AI
            </button>
            <a 
              href="#demos"
              onClick={scrollToDemos}
              className="px-10 py-5 bg-white border border-slate-200 text-slate-700 rounded-full font-bold text-xl hover:bg-slate-50 transition-all inline-flex items-center justify-center gap-3"
            >
              <Play size={22} fill="currentColor" />
              Hear It In Action
            </a>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[51, 52, 53, 54].map((seed) => (
                <img 
                  key={seed} 
                  src={`https://picsum.photos/seed/${seed}/100/100`} 
                  alt="Spa Owner" 
                  className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm bg-slate-100" 
                  loading="lazy" 
                />
              ))}
            </div>
            <p className="text-sm font-medium text-slate-500">
              Trusted by <span className="font-bold text-slate-900">200+ Luxury Spas</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative p-1 rounded-[2.5rem] bg-blue-100/50 shadow-xl">
            <div className="bg-white rounded-[2.3rem] overflow-hidden p-2">
              <div className="aspect-video relative bg-slate-900 overflow-hidden rounded-[1.8rem]">
                {/* Fixed Video: Removed 'muted' so audio works, but added 'controls' and 'poster' */}
                <video
                  className="w-full h-full object-cover"
                  controls
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src="/superad.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          
          {/* Subtle hint for users */}
          <div className="mt-4 flex justify-center items-center gap-2 text-slate-400 text-sm">
            <Volume2 size={16} />
            <span>Tap video for sound</span>
          </div>

          <div className="absolute -z-10 -top-5 -right-5 w-32 h-32 bg-blue-400/10 blur-2xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, PhoneCall } from 'lucide-react';

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
        {/* Left Side: Content */}
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
              className="px-10 py-5 bg-[#2563eb] text-white rounded-full font-bold text-xl hover:bg-blue-700 transition-all hover:shadow-2xl hover:shadow-blue-200 transform hover:-translate-y-1 active:translate-y-0"
            >
              Activate Your AI
            </button>
            <a 
              href="#demos"
              onClick={scrollToDemos}
              className="px-10 py-5 bg-white border border-slate-200 text-slate-700 rounded-full font-bold text-xl hover:bg-slate-50 transition-all transform hover:-translate-y-1 inline-flex items-center justify-center gap-3"
            >
              <Play size={22} fill="currentColor" />
              Hear It In Action
            </a>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/${i + 50}/100/100`} 
                  alt="Spa Owner" 
                  className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" 
                />
              ))}
            </div>
            <p className="text-sm font-medium text-slate-500">
              Trusted by <span className="font-bold text-slate-900">200+ Luxury Spas</span>
            </p>
          </div>
        </motion.div>

        {/* Right Side: Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Outer Glow/Border Container */}
          <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-blue-400/20 to-blue-600/20 shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]">
            <div className="bg-white rounded-[2.3rem] overflow-hidden p-2 shadow-inner">
              <div className="aspect-video relative bg-slate-900 overflow-hidden rounded-[1.8rem]">
  <video
    src="/superad.mp4"
    className="w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    controls   // optional: add if you want play/pause buttons
  />
</div>

            </div>
          </div>
          
          {/* Decorative elements behind the video */}
          <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-blue-400/10 blur-3xl rounded-full" />
          <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-indigo-400/10 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

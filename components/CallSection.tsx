
import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

const CallSection: React.FC = () => {
  return (
    <section id="call-demo" className="py-24 bg-[#001f4d] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-20 opacity-5">
        <PhoneCall size={400} />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Call your future AI receptionist.</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto opacity-80 leading-relaxed">
            Don't take our word for it. Experience it yourself.
          </p>
          
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-white/5 backdrop-blur-lg border border-white/10 p-10 md:p-14 rounded-[50px] shadow-2xl">
            <div className="w-24 h-24 bg-white text-[#2563eb] rounded-full flex items-center justify-center shadow-lg border-4 border-white/20">
              <PhoneCall size={48} fill="currentColor" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm font-black uppercase tracking-[5px] text-blue-300 mb-2">Live 24/7 Demo Line</p>
              <a 
                href="tel:+12134447562" 
                className="text-4xl md:text-7xl font-black hover:text-[#2563eb] transition-all"
              >
                +1-213-444-7562
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallSection;

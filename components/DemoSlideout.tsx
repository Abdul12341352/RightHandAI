import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface DemoSlideoutProps {
  onClose: () => void;
}

const DemoSlideout: React.FC<DemoSlideoutProps> = ({ onClose }) => {
  useEffect(() => {
    // Load Cal.com script dynamically
    const script = document.createElement("script");
    script.src = "https://cal.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (typeof (window as any).Cal !== "undefined") {
        (window as any).Cal("book-demo", { 
          calLink: "https://cal.com/work-please-joasem/ai-receptionist-client" 
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] z-[50]"
      />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="fixed top-0 right-0 h-full w-full max-w-4xl bg-white z-[60] shadow-[-40px_0_80px_rgba(0,0,0,0.15)] flex flex-col"
      >
        <div className="p-8 md:p-12 border-b border-slate-100 flex justify-between items-center bg-white">
          <div className="max-w-3xl mx-auto w-full flex justify-between items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-heading tracking-tight">
                Schedule Your Activation
              </h2>
              <p className="text-sm md:text-base text-slate-500 mt-1">
                Reserve your strategy call with our AI implementation team
              </p>
            </div>
            <button 
              onClick={onClose}
              className="p-3 hover:bg-slate-100 rounded-2xl transition-colors text-slate-400 hover:text-slate-900"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar bg-slate-50/30 flex flex-col items-center justify-center">
          <button
            id="book-demo"
            className="w-full py-4 md:py-5 bg-[#2563eb] text-white rounded-2xl font-bold text-lg md:text-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 mt-6 md:mt-8 shadow-xl shadow-blue-100 transform hover:-translate-y-1 active:translate-y-0"
          >
            Book a Demo
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default DemoSlideout;

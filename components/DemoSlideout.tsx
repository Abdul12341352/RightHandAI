import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface DemoSlideoutProps {
  onClose: () => void;
}

const DemoSlideout: React.FC<DemoSlideoutProps> = ({ onClose }) => {
  return (
    <>
      {/* Background overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] z-[50]"
      />

      {/* Slideout panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="fixed top-0 right-0 h-full w-full max-w-4xl bg-white z-[60] shadow-[-40px_0_80px_rgba(0,0,0,0.15)] flex flex-col"
      >
        {/* Header */}
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

        {/* Body with styled iframe */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar bg-slate-50/30">
          <div style={{ backgroundColor: "#f8fafc", borderRadius: "12px", overflow: "hidden", height: "100%" }}>
            <iframe
              src="https://cal.com/work-please-joasem/ai-receptionist-client?layout=month_view&theme=light&brandColor=%232563eb&brandColorDark=%23fafafa"
              style={{ width: "100%", height: "100%", border: "none" }}
              title="Book a Demo"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default DemoSlideout;

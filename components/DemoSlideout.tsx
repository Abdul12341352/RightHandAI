import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface DemoSlideoutProps {
  onClose: () => void;
}

const DemoSlideout: React.FC<DemoSlideoutProps> = ({ onClose }) => {
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

        <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar bg-slate-50/30">
          {/* Cal.com Inline Embed */}
          <div style={{ width: "100%", height: "100%", overflow: "scroll" }} id="my-cal-inline-ai-receptionist-client"></div>
          <script type="text/javascript">
            {`
              (function (C, A, L) { 
                let p = function (a, ar) { a.q.push(ar); }; 
                let d = C.document; 
                C.Cal = C.Cal || function () { 
                  let cal = C.Cal; 
                  let ar = arguments; 
                  if (!cal.loaded) { 
                    cal.ns = {}; 
                    cal.q = cal.q || []; 
                    d.head.appendChild(d.createElement("script")).src = A; 
                    cal.loaded = true; 
                  } 
                  if (ar[0] === L) { 
                    const api = function () { p(api, arguments); }; 
                    const namespace = ar[1]; 
                    api.q = api.q || []; 
                    if(typeof namespace === "string"){ 
                      cal.ns[namespace] = cal.ns[namespace] || api; 
                      p(cal.ns[namespace], ar); 
                      p(cal, ["initNamespace", namespace]); 
                    } else p(cal, ar); 
                    return;
                  } 
                  p(cal, ar); 
                }; 
              })(window, "https://app.cal.com/embed/embed.js", "init");
              Cal("init", "ai-receptionist-client", {origin:"https://app.cal.com"});
              Cal.ns["ai-receptionist-client"]("inline", {
                elementOrSelector:"#my-cal-inline-ai-receptionist-client",
                config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
                calLink: "work-please-joasem/ai-receptionist-client",
              });
              Cal.ns["ai-receptionist-client"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
            `}
          </script>
        </div>
      </motion.div>
    </>
  );
};

export default DemoSlideout;

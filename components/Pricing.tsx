
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

interface PricingProps {
  onOpenDemo: () => void;
}

const FAQS = [
  {
    q: "How does it integrate with my current calendar?",
    a: "RightHandAI integrates directly with Any Google Calendar you use. We sync in real-time to ensure no double-bookings ever occur across your entire team."
  },
  {
    q: "Do you help with the setup and scripting?",
    a: "Yes. We handle the custom script training and integration to your liking. We build it to sound exactly like your brand, following your specific protocols and tone."
  },
  {
    q: "Is RightHandAI HIPAA compliant?",
    a: "Absolutely. We maintain strict HIPAA compliance with enterprise-grade encryption for all patient data, call recordings, and transcriptions."
  },
  {
    q: "Can it handle complicated rescheduling requests?",
    a: "Yes. Our AI understands context. If a patient needs to move their appointment, it checks your availability and updates your calendar instantly without any human help."
  },
  {
    q: "What if my spa has multiple locations?",
    a: "Our Elite plan is built for multi-site operations. The AI can intelligently route calls to the correct location or manage a centralized booking pool across all your branches."
  },
  {
    q: "Can the AI process payments or deposits?",
    a: "Yes. We can integrate with your payment processor to collect deposits or card-on-file details during the booking flow, reducing your no-show rate even further."
  },
  {
    q: "What happens if a caller has a medical emergency?",
    a: "We train the AI to recognize urgent keywords. In an emergency, it can be programmed to instantly patch the caller through to your direct line or provide emergency instructions."
  },
  {
    q: "Does it work in languages other than English?",
    a: "Yes. RightHandAI is multilingual and can seamlessly handle inquiries in Spanish, Arabic, French, and over 20 other languages based on your patient demographic."
  },
  {
    q: "What happens if the AI makes a mistake?",
    a: "While our AI resolution rate is over 98%, if any confusion occurs, the system instantly notifies your staff with a summary of the call and a request for human intervention."
  },
  {
    q: "Can I use my existing business phone number?",
    a: "Yes. You don't need to change your number. You simply set up a conditional forward to your dedicated RightHandAI line so we capture every missed opportunity."
  }
];

const Pricing: React.FC<PricingProps> = ({ onOpenDemo }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Simple, Transparent Pricing</h2>
          <p className="text-lg md:text-xl text-slate-500">Choose the plan that fits your practice's growth stage.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-32">
          {/* Plan 1: Standard */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-slate-50 rounded-[40px] p-12 border border-slate-100 shadow-sm flex flex-col"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2 font-heading">RightHandAI</h3>
              <p className="text-slate-500 text-sm">For growing practices with moderate volume.</p>
            </div>
            
            <div className="mb-10">
              <span className="text-6xl font-black text-slate-900">$99</span>
              <span className="text-slate-400 ml-2 font-bold uppercase text-xs tracking-widest">/mo</span>
            </div>

            <ul className="space-y-5 mb-12">
              <li className="flex items-center gap-4 text-slate-600 font-medium">
                <Check size={24} className="text-[#2563eb] flex-shrink-0" />
                <span>AI receptionist answering calls</span>
              </li>
              <li className="flex items-center gap-4 text-slate-600 font-medium">
                <Check size={24} className="text-[#2563eb] flex-shrink-0" />
                <span>Appointment booking</span>
              </li>
              <li className="flex items-center gap-4 text-slate-600 font-medium">
                <Check size={24} className="text-[#2563eb] flex-shrink-0" />
                <span>Basic automation</span>
              </li>
              <li className="flex items-center gap-4 text-slate-600 font-medium">
                <Check size={24} className="text-[#2563eb] flex-shrink-0" />
                <span>Basic analytics</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400 font-bold border-t border-slate-200 pt-5 mt-5 italic">
                <X size={24} className="text-red-400 flex-shrink-0" />
                <span className="line-through">Unlimited monthly minutes</span>
              </li>
            </ul>

            <button 
              onClick={onOpenDemo}
              className="mt-auto w-full py-5 bg-white border-2 border-[#2563eb] text-[#2563eb] rounded-full font-black text-lg hover:bg-blue-50 transition-all"
            >
              Activate Your AI
            </button>
          </motion.div>

          {/* Plan 2: Elite */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-[#001f4d] rounded-[40px] p-12 text-white shadow-2xl relative overflow-hidden flex flex-col border border-white/5"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Sparkles size={140} />
            </div>
            
            <div className="mb-8 relative z-10">
              <div className="inline-block px-4 py-1.5 bg-[#2563eb] rounded-full text-[11px] font-black uppercase tracking-[3px] mb-6">
                Most Popular
              </div>
              <h3 className="text-3xl font-black mb-3 font-heading">RightHand Elite</h3>
              <p className="text-white font-black text-lg italic underline decoration-[#2563eb] decoration-4 underline-offset-8">Perfect for 20+ staff.</p>
            </div>
            
            <div className="mb-10 relative z-10">
              <span className="text-5xl font-black tracking-tight">Book a Demo</span>
              <p className="text-blue-400 text-xs mt-2 font-bold uppercase tracking-widest">Enterprise Volume Pricing</p>
            </div>

            <ul className="space-y-5 mb-12 relative z-10">
              {[
                "Unlimited monthly minutes",
                "24/7 dedicated answering",
                "Advanced routing / triage",
                "Multi-location support",
                "Advanced CRM integrations",
                "Priority support line"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-4 text-white font-bold">
                  <Check size={24} className="text-[#2563eb] flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={onOpenDemo}
              className="mt-auto w-full py-6 bg-[#2563eb] text-white rounded-full font-black text-xl hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-600/30 transform transition-all active:scale-95"
            >
              Book a Demo
            </button>
          </motion.div>
        </div>

        {/* Q&A Section */}
        <div id="qna" className="max-w-4xl mx-auto pt-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-heading">Questions & Answers</h2>
            <p className="text-slate-500">Everything you need to know about scaling your spa with AI.</p>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-800 text-lg">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="text-[#2563eb]" /> : <ChevronDown className="text-slate-400" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-slate-50"
                    >
                      <div className="p-6 text-slate-600 leading-relaxed border-t border-slate-200">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

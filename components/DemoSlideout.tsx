
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { MonthlyCallVolume, DemoFormData } from '../types';

interface DemoSlideoutProps {
  onClose: () => void;
}

const DemoSlideout: React.FC<DemoSlideoutProps> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<DemoFormData & { teamSize: string }>>({
    callVolume: MonthlyCallVolume.LOW,
    teamSize: '1-5'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate === null) {
      alert("Please select a demo date.");
      return;
    }
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simple calendar dates for current/next few days
  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      day: d.getDate(),
      weekday: d.toLocaleDateString('en-US', { weekday: 'short' }),
      full: d.toDateString()
    };
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[50] flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
          className="relative h-full max-h-[90vh] w-full max-w-xl bg-white z-[60] shadow-2xl rounded-[40px] flex flex-col overflow-hidden"
        >
          <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <div>
              <h2 className="text-2xl font-black text-slate-900 font-heading tracking-tight">Schedule Your Activation</h2>
              <p className="text-sm text-slate-500 font-medium">Reserve your demo slot instantly</p>
            </div>
            <button 
              onClick={onClose}
              className="p-3 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">First Name</label>
                    <input
                      required
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-50 transition-all outline-none font-medium"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Last Name</label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-50 transition-all outline-none font-medium"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Business Name</label>
                  <input
                    required
                    type="text"
                    name="businessName"
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-50 transition-all outline-none font-medium"
                    placeholder="The Glow Med Spa"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Work Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-50 transition-all outline-none font-medium"
                    placeholder="jane@glowmedspa.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">How many people in your team?</label>
                  <select
                    name="teamSize"
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-50 transition-all outline-none bg-white font-medium"
                  >
                    <option value="1-5">1-5 people</option>
                    <option value="6-10">6-10 people</option>
                    <option value="11-20">11-20 people</option>
                    <option value="20+">20+ people</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Select Your Date</label>
                    <span className="text-[11px] text-[#2563eb] font-black uppercase tracking-widest">October 2024</span>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-3">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                      <div key={d} className="text-center text-[11px] font-black text-slate-300">{d}</div>
                    ))}
                    <div className="h-12 w-full" /> 
                    <div className="h-12 w-full" />
                    {days.map((d, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedDate(i)}
                        className={`h-12 w-full rounded-2xl flex flex-col items-center justify-center transition-all ${
                          selectedDate === i 
                          ? 'bg-[#2563eb] text-white shadow-xl scale-110 z-10' 
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:shadow-md'
                        }`}
                      >
                        <span className="text-sm font-black leading-none">{d.day}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-6 bg-[#2563eb] text-white rounded-full font-black text-2xl hover:shadow-2xl hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-3 mt-6"
                >
                  Schedule My Demo
                  <ChevronRight size={28} />
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center px-4 py-20"
              >
                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-8 shadow-inner">
                  <CheckCircle size={56} />
                </div>
                <h3 className="text-4xl font-black text-slate-900 mb-4 font-heading">Booking Confirmed</h3>
                <p className="text-slate-600 mb-10 text-xl leading-relaxed">
                  Your AI activation strategy call is set. Keep an eye on your inbox for the invitation.
                </p>
                <button
                  onClick={onClose}
                  className="px-12 py-5 bg-slate-900 text-white rounded-full font-black text-xl hover:bg-slate-800 transition-colors shadow-lg"
                >
                  Close
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default DemoSlideout;

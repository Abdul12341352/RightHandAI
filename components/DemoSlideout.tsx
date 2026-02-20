
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
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-heading tracking-tight">Schedule Your Activation</h2>
              <p className="text-sm md:text-base text-slate-500 mt-1">Reserve your strategy call with our AI implementation team</p>
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
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                  <input
                    required
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-50 transition-all outline-none text-sm md:text-base font-medium bg-white shadow-sm"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                  <input
                    required
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-50 transition-all outline-none text-sm md:text-base font-medium bg-white shadow-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Business Name</label>
                  <input
                    required
                    type="text"
                    name="businessName"
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-50 transition-all outline-none text-sm md:text-base font-medium bg-white shadow-sm"
                    placeholder="The Glow Med Spa"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Team Size</label>
                  <select
                    name="teamSize"
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-50 transition-all outline-none bg-white text-sm md:text-base font-medium shadow-sm appearance-none"
                  >
                    <option value="1-5">1-5 people</option>
                    <option value="6-10">6-10 people</option>
                    <option value="11-20">11-20 people</option>
                    <option value="20+">20+ people</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-50 transition-all outline-none text-sm md:text-base font-medium bg-white shadow-sm"
                  placeholder="jane@glowmedspa.com"
                />
              </div>

              <div className="pt-4 space-y-4 md:space-y-6">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Select Your Date</label>
                  <span className="text-xs text-[#2563eb] font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">October 2024</span>
                </div>
                
                <div className="grid grid-cols-7 gap-2 md:gap-3">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                    <div key={`${d}-${i}`} className="text-center text-[10px] font-bold text-slate-300 uppercase tracking-widest">{d}</div>
                  ))}
                  <div className="h-10 md:h-12 w-full" /> 
                  <div className="h-10 md:h-12 w-full" />
                  {days.map((d, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedDate(i)}
                      className={`h-10 md:h-12 w-full rounded-xl md:rounded-2xl flex flex-col items-center justify-center transition-all ${
                        selectedDate === i 
                        ? 'bg-[#2563eb] text-white shadow-xl shadow-blue-200 scale-105 z-10' 
                        : 'bg-white text-slate-600 hover:bg-slate-50 shadow-sm border border-slate-100'
                      }`}
                    >
                      <span className="text-sm md:text-base font-bold leading-none">{d.day}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 md:py-5 bg-[#2563eb] text-white rounded-2xl font-bold text-lg md:text-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 mt-6 md:mt-8 shadow-xl shadow-blue-100 transform hover:-translate-y-1 active:translate-y-0"
              >
                Schedule My Demo
                <ChevronRight size={24} />
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-full flex flex-col items-center justify-center text-center py-12"
            >
              <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-3 font-heading">Booking Confirmed</h3>
              <p className="text-slate-500 mb-8 text-lg leading-relaxed">
                Your AI activation strategy call is set. Keep an eye on your inbox for the invitation.
              </p>
              <button
                onClick={onClose}
                className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold transition-colors"
              >
                Close
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default DemoSlideout;

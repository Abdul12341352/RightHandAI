import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, TrendingUp } from 'lucide-react';
import { AudioCard } from '../types';

const DEMOS: AudioCard[] = [
  {
    id: 'botox-1',
    title: 'Botox Booking Call',
    description: 'AI handles a complex multi-area booking while checking clinician availability.',
    revenueImpact: 'Recovered $800 booking'
  },
  {
    id: 'botox-2',
    title: 'Botox Consultation',
    description: 'Patient inquiring about units and downtime. AI qualifies and books instantly.',
    revenueImpact: 'Secured $1,200 plan'
  },
  {
    id: 'massage',
    title: 'Deep Tissue Massage',
    description: '90-minute therapeutic session booking with specific therapist preference.',
    revenueImpact: 'Booked $250 session'
  },
  {
    id: 'lipfiller',
    title: 'Lip Filler Appointment',
    description: 'New patient inquiry regarding filler types. AI handles education and booking.',
    revenueImpact: 'Captured $650 appointment'
  }
];

// 👇 New mapping for audio files
const AUDIO_FILES: Record<string, string> = {
  "botox-1": "/Botox.mp3",
  "botox-2": "/Botox2.mp3",
  "massage": "/DeepTissue.mp3",
  "lipfiller": "/LipFiller.mp3",
};

const AudioDemos: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  // 👇 Replaced togglePlay function
  const togglePlay = (id: string) => {
    const audioEl = document.getElementById(id) as HTMLAudioElement | null;

    if (playingId === id) {
      if (audioEl) audioEl.pause();
      setPlayingId(null);
    } else {
      if (playingId) {
        const currentEl = document.getElementById(playingId) as HTMLAudioElement | null;
        if (currentEl) currentEl.pause();
      }
      if (audioEl) {
        audioEl.currentTime = 0;
        audioEl.play();
      }
      setPlayingId(id);
    }
  };

  return (
    <section id="demos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Experience the Intelligence</h2>
          <p className="text-lg text-slate-600 italic">"I didn't even realize I was talking to an AI." — Director, Serenity Medical Spa</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {DEMOS.map((demo) => (
            <motion.div
              key={demo.id}
              whileHover={{ y: -5 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm transition-all"
            >
              <div className="flex justify-center mb-6">
                <button
                  onClick={() => togglePlay(demo.id)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                    playingId === demo.id
                      ? 'royal-blue-gradient text-white scale-110 shadow-xl'
                      : 'bg-white text-[#0047AB] shadow-md hover:shadow-lg'
                  }`}
                >
                  {playingId === demo.id ? (
                    <Pause size={24} fill="white" />
                  ) : (
                    <Play size={24} className="ml-1" fill="currentColor" />
                  )}
                </button>
              </div>

              {/* 👇 Hidden audio element for each card */}
             <audio
  id={demo.id}
  src={AUDIO_FILES[demo.id]}
  onEnded={() => setPlayingId(null)}
/>


              <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">{demo.title}</h3>
              <p className="text-slate-500 text-sm mb-6 text-center leading-relaxed">
                {demo.description}
              </p>

              <div className="mt-auto pt-4 border-t border-slate-200">
                <div className="inline-flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider bg-emerald-50 px-3 py-1.5 rounded-full w-full justify-center">
                  <TrendingUp size={14} />
                  {demo.revenueImpact}
                </div>
              </div>

              {playingId === demo.id && (
                <div className="mt-4 flex justify-center items-end gap-1 h-8">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [4, Math.random() * 20 + 8, 4] }}
                      transition={{ repeat: Infinity, duration: 0.5 + Math.random(), ease: "easeInOut" }}
                      className="w-1 bg-[#0047AB] rounded-full"
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudioDemos;

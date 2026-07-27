import React from 'react';
import Meta from '../components/Meta';
import { useData } from '../contexts/DataContextPublic';
import { motion } from 'framer-motion';

export default function SubmitApp() {
  const { settings } = useData();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="min-h-screen pt-32 px-4 pb-20">
        <Meta 
          title={`Submit Your App | ${settings?.site_title || 'RummyDex'}`}
          description={`Submit your Android application for listing and promotion on ${settings?.site_title || 'RummyDex'}.`}
          canonical={window.location.origin + "/submit-app"}
        />
        <div className="max-w-3xl mx-auto py-12 text-left bg-white/70 dark:bg-zinc-900/70 p-8 rounded-3xl border border-black/5 dark:border-white/5 backdrop-blur-md shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-zinc-900 dark:text-white">Submit Your App</h1>
          <p className="prose text-zinc-750 dark:text-zinc-300 leading-relaxed font-semibold">
            Submit your Android application for listing and promotion on {settings?.site_title || 'RummyDex'}.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

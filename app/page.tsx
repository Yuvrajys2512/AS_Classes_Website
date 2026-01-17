'use client';

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen">
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold tracking-wide"
        >
          AS <span className="text-purple-400">Classes</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-xl md:text-2xl text-gray-300"
        >
          Where Concepts Become <span className="text-blue-400">Clarity</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-3 text-gray-400 max-w-xl"
        >
          All Subjects up to Class 10 • Humanities for Class 11 & 12
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="tel:8873827378"
            className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition shadow-lg shadow-purple-600/40"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/918873827378"
            target="_blank"
            className="px-6 py-3 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition shadow-lg shadow-blue-400/40"
          >
            WhatsApp
          </a>
        </motion.div>

      </div>
    </main>
  );
}

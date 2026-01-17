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
          AS <span className="text-purple-400">Classes</span> ✨
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
      {/* About Section */}
{/* About Section */}
<section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">

  {/* Slow rotating aura */}
  <div className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/30 via-blue-500/20 to-transparent rounded-full blur-3xl animate-spin-slow" />

  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ once: true }}
    className="relative group max-w-2xl w-full rounded-3xl p-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-gradient"
  >
    <div className="bg-black/70 backdrop-blur-2xl rounded-3xl p-10 md:p-14 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_60px_rgba(139,92,246,0.4)]">

      <h2 className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
        About the Mentor
      </h2>

      <p className="text-gray-300 text-center text-lg leading-relaxed">
        <span className="text-white font-semibold">M.A., B.Ed.</span> • UPSC Aspirant  
        <br />
        Specialization in <span className="text-blue-300">Political Science & International Relations</span>
        <br /><br />
        Focused on building strong conceptual foundations, analytical thinking, and deep clarity —
        ensuring students don’t just memorize, but truly understand and apply.
      </p>

    </div>
  </motion.div>
  </section>
  



  

  {/* ----------Vertical timeline section */}
  {/* Courses Timeline Section */}
<section className="relative py-32 px-6">

  <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-20">
    Courses Offered
  </h2>

  <div className="relative max-w-5xl mx-auto">

    {/* Center Line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-purple-500 via-blue-400 to-purple-500 opacity-60" />

    {/* Item 1 - Left */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative mb-24 w-full md:w-1/2 pr-8 text-right"
    >
      <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg">
        <h3 className="text-2xl font-semibold text-purple-300 mb-2">
          Classes 6 – 10
        </h3>
        <p className="text-gray-300">
          Comprehensive teaching of all core subjects with strong emphasis on
          conceptual clarity, academic discipline, and foundation building.
        </p>
      </div>
    </motion.div>

    {/* Item 2 - Right */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative mb-24 w-full md:w-1/2 ml-auto pl-8 text-left"
    >
      <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg">
        <h3 className="text-2xl font-semibold text-blue-300 mb-2">
          Classes 11 – 12 (Humanities)
        </h3>
        <p className="text-gray-300">
          Specialized guidance in Humanities subjects with focus on Political
          Science, analytical thinking, and preparation aligned with board and
          competitive examination standards.
        </p>
      </div>
    </motion.div>

  </div>
</section>





    </main>
  );
}

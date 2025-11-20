'use client';

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";


export default function SocialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activated, setActivated] = useState(false);

const handleHover = () => {
  if (!activated && videoRef.current) {
    videoRef.current.play();
    setActivated(true);
  }
};

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!isInView) {
      video.pause();
    } 
  }, [isInView, activated]);

  return (
    <section ref={ref} className="bg-[#0b0b0b] py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* 📰 Columna izquierda */}
        <motion.div
          className="bg-[#111] rounded-2xl overflow-hidden shadow-xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/tryout.png"
            alt="SadHub Esports Win"
            className="w-full h-64 object-cover"
          />

          <div className="p-6 space-y-3">
            <p className="text-sm text-gray-400">NOV 2025</p>
            <h3 className="text-2xl font-bold leading-snug">
              ¡GRACIAS POR TODO, ESCUADRA! 
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
             El cuervo se retira del Gansito Gaming Hub con un Top 4 junto a los panas de @moonglow.gg 🧃🔥
          <br />
          Cada ronda, cada clutch, cada tilt valió la pena 😂
        Gracias a Saint, Zyco, LauGuz ...
            </p>

            <a
              target="_blank"
              href="https://www.instagram.com/p/DQM3Fmdkfb-"
              className="inline-block mt-4 text-[#f5c16c] hover:text-white transition-colors font-semibold"
            >
              Leer más →
            </a>
          </div>
        </motion.div>

        {/* 🌐 Columna derecha */}
        <motion.div
          className="flex items-center justify-center h-full"
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <video
          ref={videoRef}
            playsInline
            controls
            onMouseEnter={handleHover}
            className="w-full h-full rounded-2xl object-cover min-h-[420px]"
            src="/video/camisetas.mp4"
            poster="/Logo/logo.png"
          />
        </motion.div>


      </div>
    </section>
  );
}

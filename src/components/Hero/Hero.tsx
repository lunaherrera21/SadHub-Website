'use client';

import styles from "./Hero.module.css"
import { motion } from "framer-motion";


export default function HeroSection() {
  return (
      <section
      className={`${styles.image_hero} relative h-[100vh] overflow-hidden flex items-center justify-center text-center`}
    >

    {/* Capa oscura encima de la imagen */}
    <div className="absolute inset-0 bg-black/75 z-10">
    </div>

    {/* Contenido visible encima */}
    <div className="relative z-20 px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bienvenido a <br /> SadHub Esports
      </motion.h1>

      <motion.p
        className="text-gray-200 mt-4 text-lg md:text-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Competimos. Creamos comunidad. Inspiramos.
      </motion.p>

      {/**
       *<motion.button
        className="mt-6 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
      >
        Únete al equipo
      </motion.button>
       */}
    </div>
  </section>
  );
}

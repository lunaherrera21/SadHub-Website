'use client'

import { motion } from "framer-motion";

export default function SponsorSpotlight() {
  return (
    <section className="relative h-[200px] flex items-center justify-center overflow-hidden bg-[#0a0a0a] px-6">
      {/* Contenedor centrado */}
      <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        
        {/* Columna izquierda (logo alineado a la derecha) */}
        <div className="flex flex-col md:items-end items-center  text-right md:pr-10">
          {/* Luz animada */}
          <motion.div
            className="absolute w-64 h-64 bg-gradient-radial from-yellow-500/20 to-transparent rounded-full blur-3xl"
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          />
          {/* Contenido */}
          <div className="relative z-10 flex flex-col text-center">
            <p className="text-gray-400 text-sm mb-2">Patrocinador oficial</p>
            <motion.img
              src="/exitLag.svg"
              alt="Sponsor"
              className="w-48 h-auto object-contain drop-shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        {/* Columna derecha (texto alineado a la izquierda) */}
        <div className="flex  md:justify-start justify-center text-left md:border-l-1 md:border-gray-400 md:pl-10 md:py-5 py-2">
          <p className=" text-gray-300 text-sm sm:text-base">
            Utiliza nuestro código de <br /> descuento dando clic <a className="text-red-500" href="https://www.exitlag.com/refer/10122291" target="_blank">aquí</a>
          </p>
        </div>

      </div>
    </section>
  );
}

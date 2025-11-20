'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Lineicons } from '@lineiconshq/react-lineicons';
import {
  InstagramOutlined,
  XOutlined
} from '@lineiconshq/free-icons';

import teamData from '@/data/teamData.json';

// Define interfaces para tipar correctamente
interface Social {
  icon: string;
  url: string;
  color: string;
}

interface TeamMember {
  name: string;
  image: string;
  socials: Social[];
}

// Mapa tipado para convertir string → componente real
const iconMap: Record<string, React.ComponentType> = {
  InstagramOutlined,
  XOutlined
};

export default function EquipoPage() {
  const players: TeamMember[] = teamData.valorant_players;
  const coach: TeamMember[] = teamData.valorant_coach;

  return (
    <div className="bg-black text-white relative">
      {/* Overlay con mensaje "Próximamente" - altura mínima para permitir scroll */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center p-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-8xl font-bold text-yellow-500 tracking-widest mb-4"
          >
            PRÓXIMAMENTE
          </motion.h2>
        </motion.div>
      </div>

      {/* Resto del contenido... */}
      {/* Panel izquierdo */}
      <div className="relative lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[30%] overflow-hidden border-r border-gray-800 z-10">
        <div className="absolute inset-0">
          <Image
            src="/equipo/valorant.jpg"
            alt="Valorant Background"
            fill
            className="object-cover object-center brightness-75"
            priority
            sizes="(max-width: 1024px) 100vw, 30vw"
          />
        </div>

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex items-center justify-center h-[40vh] min-h-[300px] lg:h-full px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-200 tracking-widest drop-shadow-lg text-center">
            VALORANT
          </h1>
        </div>
      </div>

      {/* Panel derecho */}
      <div className="bg-black p-5 lg:ml-[30%]">
        <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 py-12 lg:py-20">
          {/* Jugadores */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-yellow-500 mb-8 text-center lg:text-left"
          >
            Jugadores
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {players.map((player, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-zinc-900 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 rounded-lg"
              >
                <div className="w-full h-64 sm:h-72 lg:h-80 relative">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="flex justify-between items-center px-4 py-3 bg-zinc-950">
                  <span className="text-lg font-semibold">{player.name}</span>
                  <div className="flex gap-3">
                    {player.socials.map((s, j) => {
                      const IconComponent = iconMap[s.icon];
                      return (
                        <a key={j} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                          <Lineicons icon={IconComponent} size={20} color={s.color} strokeWidth={1.5} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coach */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-yellow-500 mb-8 mt-10 text-center lg:text-left"
          >
            Coach
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coach.map((coach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-zinc-900 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 rounded-lg"
              >
                <div className="w-full h-64 sm:h-72 lg:h-80 relative">
                  <Image 
                    src={coach.image} 
                    alt={coach.name} 
                    fill 
                    className="object-cover" 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="flex justify-between items-center px-4 py-3 bg-zinc-950">
                  <span className="text-lg font-semibold">{coach.name}</span>
                  <div className="flex gap-3">
                    {coach.socials.map((s, j) => {
                      const IconComponent = iconMap[s.icon];
                      return (
                        <a key={j} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                          <Lineicons icon={IconComponent} size={20} color={s.color} strokeWidth={1.5} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import owners from '@/data/teamData.json';
import { Lineicons } from "@lineiconshq/react-lineicons";

// Importo los íconos para mapearlos dinámicamente
import {
  InstagramOutlined,
  XOutlined,
  TwitchOutlined,
  LinkedinOutlined,
} from "@lineiconshq/free-icons";

// Define el tipo para los íconos
type IconType = typeof InstagramOutlined | typeof XOutlined | typeof TwitchOutlined | typeof LinkedinOutlined;

// Mapeo tipado para convertir strings → componente real
const iconMap: Record<string, IconType> = {
  InstagramOutlined,
  XOutlined,
  TwitchOutlined,
  LinkedinOutlined
};

// También puedes tipar los datos del owner si quieres
interface Social {
  icon: string;
  url: string;
  color: string;
}

interface Owner {
  name: string;
  image: string;
  socials: Social[];
}

export default function OwnersSection() {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      <div className="bg-black">
        <section className="flex flex-col justify-center text-center py-25 px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-yellow-500 mb-10"
          >
            Owners
          </motion.h2>

          {/* Contenedor de cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {(owners.owners as Owner[]).map((owner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-zinc-900 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 w-56"
              >
                {/* Imagen */}
                <div className="relative w-full h-90">
                  <Image
                    src={owner.image}
                    alt={owner.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Info */}
                <div className="flex justify-between items-center px-4 py-3 bg-zinc-950">
                  <span className="text-base font-semibold">{owner.name}</span>

                  <div className="flex gap-3">
                    {owner.socials.map((s, j) => {
                      const IconComponent = iconMap[s.icon];

                      return (
                        <a
                          key={j}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:scale-110 transition-transform"
                        >
                          <Lineicons
                            icon={IconComponent}
                            size={20}
                            color={s.color}
                            strokeWidth={0}
                          />
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
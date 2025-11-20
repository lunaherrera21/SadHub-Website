'use client'

import styles from "../../src/components/Hero/Hero.module.css"
import { motion } from "framer-motion";
import { useState } from "react";
import faqData from '@/data/faqData.json';
import { Lineicons } from "@lineiconshq/react-lineicons";
import {
  AngleDoubleDownDuotone
} from "@lineiconshq/free-icons";
import Image from "next/image";



export default function NosotrosPage() {
  return (
    <div>
      <section
        className={`${styles.image_hero} relative h-[50vh] overflow-hidden flex items-center justify-center text-center`}
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
            Somos SadHub Esports
          </motion.h1>
        </div>

      </section>
      <section>
        <div className="p-20 px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
            <div className="flex flex-col items-center justify-center space-y-5 ">
              <img
                src="/sesionFotos/Foto_grupal_4.jpg"
                alt="SadHub Esports Win"
                className="w-full h-[400px] md:h-[500px]  object-cover"
              />
            </div>
            <div className="">
              <p className="py-5">
                SadHub Esports es una organización colombiana de esports dedicada a impulsar el talento emergente de Latinoamérica.
                Nacimos con la convicción de darle oportunidades reales a jugadores que sueñan con competir al más alto nivel.
                Actualmente competimos en Valorant (Tier 3), participando en torneos clave y construyendo equipos competitivos
                que buscan ascender y dejar huella en la escena regional.
              </p>
              <p className="font-semibold py-5 text-yellow">#BeSad no es solo un hashtag, es nuestro lema. </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-center mt-10">
            {/* 📝 Columna izquierda - Texto */}
            <div className="flex flex-col justify-center text-gray-200 leading-relaxed space-y-4">
              <p>
                Nuestro objetivo es impulsar el talento emergente en esports, ofreciendo formación, disciplina y oportunidades
                para alcanzar el máximo nivel competitivo. Nuestra visión es ser la organización referente de esports en LATAM,
                destacando por nuestro profesionalismo, competitividad y compromiso con el crecimiento del gaming
                en la región.
              </p>
            </div>

            {/* 🖼️ Columna derecha - Dos imágenes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="/sesionFotos/Foto_grupal_5.jpg"
                alt="SadHub Esports Win"
                className="w-full h-[400px] md:h-[500px]  object-cover  shadow-lg"
              />
              <img
                src="/sesionFotos/Foto_grupal_3.jpg"
                alt="SadHub Esports Win"
                className="w-full h-[400px] md:h-[500px]  object-cover shadow-lg"
              />
            </div>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center mt-10">
            <div className="flex flex-col items-center justify-center space-y-5 ">
              <img
                src="/sesionFotos/Foto_grupal_2.jpeg"
                alt="SadHub Esports Win"
                className="w-full h-[400px] md:h-[500px]  object-cover"
              />
            </div>
            <div className="col-sm-2 ">
              <p>
                En SadHub Esports creemos que en LATAM hay talento
                de sobra, lo que falta son oportunidades y estructura profesional. Decidimos ser el puente entre los jugadores con hambre
                de triunfar y el escenario competitivo.
              </p>
              <p className="py-5">
                <span className="font-semibold">
                  Bienvenidos a SadHub Esports. Aquí los sueños se entrenan, se luchan y se conquistan.
                  <br /><br />
                  <span className="text-yellow">#BeSad</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="py-10">
        </div>
      </section>
      {/* 📖 FAQ con acordeón */}
      <section className="bg-zinc-950 text-gray-200 py-16 px-6" id="faq">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-400">
            Conoce más sobre SadHub Esports y cómo puedes ser parte de nuestra comunidad.
          </p>
        </div>
        <div className="max-w-7xl mx-auto space-y-4">
          {faqData.sections.map((section, idx) => (
            <div key={idx} className="mb-10">
              <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}

/* 🎛️ Componente AccordionItem */
function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="border border-gray-700 rounded-lg overflow-hidden bg-zinc-900">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-zinc-800 transition-colors duration-300 cursor-pointer"
        >
          <span className="font-medium text-white">{question}</span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400 text-xl"
          >
            <Lineicons icon={AngleDoubleDownDuotone} size={22} color={"#fff"} />
          </motion.span>
        </button>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 overflow-hidden text-gray-400"
        >
          <p className="py-2" dangerouslySetInnerHTML={{ __html: answer }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

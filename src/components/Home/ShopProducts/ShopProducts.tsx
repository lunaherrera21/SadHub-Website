'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ShopProducts.module.css";
import data from "@/data/shopProducts.json"
import Link from "next/link";


type Category = "Camiseta" | "Próximamente";

export default function ShopSection() {
  const categories = data.categories as Category[];
  const [selectedCategory, setSelectedCategory] = useState<Category>("Camiseta");

  const products = data.products.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <section className={`${styles.section} overflow-hidden`}>

        <h3 className="text-3xl md:text-5xl font-bold mb-8 text-white text-center">
          Nuestros productos
        </h3>
              <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        {/* Botones de categorías */}
        <div className="flex justify-center gap-8 mb-12">
          {(["Camiseta", "Próximamente"] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-normal font-semibold pb-1 border-b-2 transition-all ${
                selectedCategory === cat
                  ? "text-yellow-500 border-yellow-500"
                  : "text-gray-400 border-transparent hover:text-white hover:border-gray-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Contenedor de productos */}
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className={`min-h-[500px] md:grid md:gap-10 justify-center sm:flex sm:flex-col ${
                products.length === 1
                  ? "grid-cols-1"
                  : products.length === 2
                  ? "grid-cols-2"
                  : "grid-cols-3"
              }`}
            >
              {products.map((p) => (
                 <Link href="/shop" key={p.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="relative w-[350px] h-[380px] md:w-[380px] overflow-hidden cursor-pointer group bg-[#BFBFBF] shadow-lg">
                    {/* Imagen principal */}
                    <motion.img
                      src={p.img}
                      alt={p.name}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500"
                      initial={{ opacity: 1 }}
                      whileHover={{ opacity: 0 }}
                    />
                    {/* Imagen hover */}
                    <motion.img
                      src={p.imgHover}
                      alt={p.name}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </div>
                  {/* Info inferior */}
                  <div>
                    <h3 className="text-normal font-normal text-white mt-2">
                      {p.name}
                    </h3>
                    {p.price && (
                      <p className="text-normal font-normal text-white">
                         ${p.price.toLocaleString('es-CO')} COP
                      </p>
                    )}
                  </div>
                </motion.div>
                </Link>
              ))}
            </motion.div>
            
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

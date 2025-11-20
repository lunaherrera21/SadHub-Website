'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductDetail({ product, onBack }: any) {
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="container px-4">
      <button
        onClick={onBack}
        className="flex items-center cursor-pointer gap-2 pb-10 text-gray-400 hover:text-white"
      >
        <ArrowLeft size={18} /> Volver
      </button>

      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto mt-6">
        {/* Columna izquierda - Galería lateral en desktop */}
        <div className="hidden md:flex flex-col items-center">
          {product.images.map((img: string, i: number) => (
            <button
              key={i}
              onClick={() => setMainImage(img)}
              className={`mb-3 border-2 overflow-hidden transition-all ${
                mainImage === img ? 'border-blue-500 scale-105' : 'border-transparent'
              }`}
            >
              <Image
                src={img}
                alt={product.name}
                width={100}
                height={100}
                className="object-cover w-20 h-20"
              />
            </button>
          ))}
        </div>

        {/* Imagen principal */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative bg-zinc-900 w-full h-[350px] sm:h-[450px] md:h-[550px] overflow-hidden">
            <AnimatePresence mode="sync">
              <motion.div
                key={mainImage}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={mainImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Miniaturas debajo (solo móviles) */}
          <div className="flex md:hidden gap-3 mt-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            {product.images.map((img: string, i: number) => (
              <button
                key={i}
                onClick={() => setMainImage(img)}
                className={`flex-shrink-0 border-2  overflow-hidden transition-all ${
                  mainImage === img ? 'border-blue-500 scale-105' : 'border-transparent'
                }`}
              >
                <Image
                  src={img}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="object-cover w-20 h-20"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Información del producto */}
        <div className="flex-1 flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-white-300 text-2xl font-bold">
            ${product.price.toLocaleString('es-AR')} COP
          </p>
          <div
            className="text-gray-300 leading-relaxed py-2"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
          <a target="_blank"
              href="https://wa.me/573058218557?text=Hola,%20quiero%20comprar%20la%20camiseta%20oficial%20de%20Sadhub%20Esports">
            <button className="mt-4 bg-blue-900 py-3 font-medium text-base rounded-lg w-full cursor-pointer text-white hover:bg-blue-800">
              Comprar
            </button>
          </a>

        </div>
      </div>
    </div>
  );
}

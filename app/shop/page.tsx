'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';
import data from '@/data/shopProducts.json';
import { Product } from '@/types/products'; // ✅ Importas desde types

const heroImages = [
  '/sesionFotos/Foto_grupal_2.jpeg',
  '/sesionFotos/Foto_grupal.jpg',
];

export default function StorePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [current, setCurrent] = useState(0);
  
  const products: Product[] = data.products; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-11">
      {/* 🖼️ Hero con fondo dinámico */}
      <section className="relative md:h-[80vh] h-[30vh] flex items-center justify-center overflow-hidden text-white">
        <AnimatePresence>
          {heroImages.map(
            (img, index) =>
              index === current && (
                <motion.div
                  key={img}
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${img})` }}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                />
              )
          )}
        </AnimatePresence>

        {/* Capa oscura encima */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Texto */}
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold md:mb-6">Shop</h1>
          <p className="text-gray-200 text-lg md:text-xl">
            Explora nuestros productos oficiales
          </p>
        </div>
      </section>

      {/* 🛍️ Sección de productos */}
      <section className="flex items-center justify-center text-white p-10  bg-[#0b0b0b]">
        {!selectedProduct ? (
          <div className="flex flex-wrap justify-center gap-10 py-5">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} onSelect={setSelectedProduct} />
            ))}
          </div>
        ) : (
          <ProductDetail
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
          />
        )}
      </section>
    </div>
  );
}
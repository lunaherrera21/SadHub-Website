import Image from 'next/image';
import { useState } from 'react';

export default function ProductCard({ product, onSelect }: any) {
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    if (product.isNew) onSelect(product); // solo clic si es nuevo lanzamiento
  };

  return (
    <div
      className={`relative transition-transform hover:duration-300 ${
        product.isNew ? 'cursor-pointer' : 'cursor-default'
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      {/* 🏷️ Etiqueta */}
      <div
        className={`absolute top-3 left-3 px-2 py-0.5  text-sm font-semibold rounded-full z-20 ${
          product.isNew
            ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
            : 'bg-neutral-400 text-neutral-600'
        }`}
      >
        {product.isNew ? 'Nuevo Lanzamiento' : 'Próximamente'}
      </div>

      {/* Imagen principal */}
      <div className="md:w-[380px] md:h-[380px] w-[300px] h-[300px]   bg-zinc-900 overflow-hidden flex items-center justify-center relative ">
        <Image
          src={hover ? product.images[1] : product.images[0]}
          alt={product.name}
          width={600}
          height={600}
          quality={95}
          className="w-full h-full object-cover"
        />

        {/* Capa gris para productos no disponibles */}
        {!product.isNew && (
          <div className="absolute inset-0 bg-black/40 " />
        )}
      </div>

      {/* Texto debajo */}
      <div className="mt-3 text-center">
        <h3 className="text-base font-medium">{product.name}</h3>
        {product.price ? (
          <p className="text-gray-300 text-normal">
            ${product.price.toLocaleString('es-CO')} COP
          </p>
        ) : (
          <p className="text-gray-500 text-sm italic">No disponible</p>
        )}
      </div>
    </div>
  );
}

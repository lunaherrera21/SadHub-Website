'use client'

import { siKick } from "simple-icons";
import { Lineicons } from "@lineiconshq/react-lineicons";
import {
  InstagramOutlined,
  XOutlined,
  TwitchOutlined,
  TiktokOutlined,
  AngleDoubleUpOutlined
} from "@lineiconshq/free-icons";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // desplazamiento suave
    });
  };

  return (
    <footer className="relative bg-black text-gray-300 py-10 px-6 z-50">
      <div className="relative w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
        {/* 🟣 Columna 1: Logo */}
        <div className="flex flex-col items-center space-y-3">
          <Link href="/">
            <Image
              src="/Logo/Logo-blanco.png"
              alt="SadHub Logo"
              width={96}  // 24 * 4 = 96 (w-24 en tailwind ≈ 96px)
              height={38} // altura proporcional
              className="w-24 h-auto"
            />
          </Link>
        </div>

        {/* 📨 Columna 2: Contacto y redes */}
        <div className="flex flex-col space-y-2 py-2">
          <div>
            <p className="text-gray-600 ">Contacto</p>
            <a
              href="mailto:sadhubesports@gmail.com"
              className="hover:text-yellow-500 transition text-base/10"
            >
              sadhubesports@gmail.com
            </a>
            <br />
            <a
              target="_blank"
              href="https://wa.me/573058218557?text=Hola,%20quiero%20más%20información%20de%20Sadhub%20Esports"
              className="hover:text-yellow-500 transition "
            >
              +57 305 8218557
            </a>
          </div>

          <div className="hidden md:flex items-center gap-5 mt-1">
            <a
              href="https://x.com/SadHubEsports"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-125"
            >
              <Lineicons icon={XOutlined} size={22} color="#FFF" />
            </a>

            <a
              href="https://instagram.com/sadhubesports"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-125"
            >
              <Lineicons icon={InstagramOutlined} size={22} color="#fff" />
            </a>

            <a
              href="https://www.twitch.tv/sadhubesports"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-125"
            >
              <Lineicons icon={TwitchOutlined} size={22} color="#FFF" />
            </a>

            <a
              href="https://tiktok.com/@sadhubesports"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-125"
            >
              <Lineicons icon={TiktokOutlined} size={22} color="#FFF" />
            </a>
            <a
              href="https://kick.com/sadhubesports"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-125"
            >
              <div
                dangerouslySetInnerHTML={{ __html: siKick.svg }}
                style={{ width: 19, height: 19, fill: "#fff"}}
              />
            </a>
          </div>
        </div>

        {/* 🌐 Columna 3: Sitemap */}
        <div className="flex flex-col space-y-2 py-2">
          <Link href="/" className="hover:text-yellow-500 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-500 transition">
            About
          </Link>
          <Link href="/team" className="hover:text-yellow-500 transition">
            Team
          </Link>
          <Link href="/shop" className="hover:text-yellow-500 transition">
            Shop
          </Link>
          <Link href="/about/#faq" className="hover:text-yellow-500 transition">
            FAQ
          </Link>
        </div>
      </div>

      {/* 🔸 Línea inferior de derechos */}
      <div className="text-center text-gray-500 text-sm mt-6 relative">
        © 2025 SadHub Esports. Todos los derechos reservados.
      </div>

      {/* 🔼 Flecha hacia arriba */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-45 pr-10 right-6 cursor-pointer text-white p-3 rounded-full shadow-lg transition-all duration-300 "
        aria-label="Volver arriba"
      >
        <Lineicons icon={AngleDoubleUpOutlined} size={30} color="#fff" />
      </button>
    </footer>
  );
}
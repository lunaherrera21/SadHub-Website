'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { siKick } from "simple-icons";
import { Lineicons } from "@lineiconshq/react-lineicons";
import {
  InstagramOutlined,
  XOutlined,
  TwitchOutlined,
  TiktokOutlined,
} from "@lineiconshq/free-icons";

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Shop', href: '/shop' },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500 ease-in-out
        ${scrolled ? "bg-black/90 shadow-lg" : "bg-white/90 shadow-md"}
      `}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-8 md:px-20 transition-all duration-500 ease-in-out">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <div
            className={`transition-all duration-500 ease-in-out ${scrolled ? "w-[55px]" : "w-[70px]"
              }`}
          >
            <Image
              src={scrolled ? "/Logo/Logo-amarillo.png" : "/Logo/Logo-negro.png"}
              alt="logo"
              width={80}
              height={80}
              className="w-full h-auto transition-all duration-500 ease-in-out"
            />
          </div>
        </Link>

        {/* BOTÓN MENÚ (MÓVIL) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden focus:outline-none transition-colors duration-300 ${scrolled ? "text-white" : "text-gray-700"
            }`}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-all duration-500 ease-in-out font-medium ${pathname === link.href
                  ? scrolled
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "text-yellow-700 border-b-2 border-yellow-700"
                  : scrolled
                    ? "text-gray-200 hover:text-yellow-400"
                    : "text-gray-800 hover:text-yellow-600"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* REDES SOCIALES */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://x.com/SadHubEsports"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-125"
          >
            <Lineicons icon={XOutlined} size={22} color={scrolled ? "#fff" : "#000"} />
          </a>

          <a
            href="https://instagram.com/sadhubesports"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-125"
          >
            <Lineicons icon={InstagramOutlined} size={22} color={scrolled ? "#fff" : "#000"} />
          </a>

          <a
            href="https://www.twitch.tv/sadhubesports"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-125"
          >
            <Lineicons icon={TwitchOutlined} size={22} color={scrolled ? "#fff" : "#000"} />
          </a>

          <a
            href="https://tiktok.com/@sadhubesports"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-125"
          >
            <Lineicons icon={TiktokOutlined} size={22} color={scrolled ? "#fff" : "#000"} />
          </a>

          <a
            href="https://kick.com/sadhubesports"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-125"
          >
            <div
              dangerouslySetInnerHTML={{ __html: siKick.svg }}
              style={{ width: 19, height: 19, fill: scrolled ? "#fff" : "#000" }}
            />
          </a>
        </div>

      </div>

      {/* MENU MÓVIL */}
      {isOpen && (
        <div
          className={`md:hidden flex flex-col items-center py-4 space-y-4 transition-all duration-500 ease-in-out ${scrolled ? "bg-black/95 text-white" : "bg-white text-gray-800"
            }`}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg ${pathname === link.href
                  ? scrolled
                    ? "text-yellow-400 font-semibold"
                    : "text-yellow-700 font-semibold"
                  : scrolled
                    ? "hover:text-yellow-400"
                    : "hover:text-yellow-700"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Cerrar menú al presionar Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  // Función mejorada para detectar enlace activo
  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500 ease-in-out
        ${scrolled ? "bg-black/95 shadow-lg" : "bg-white/95 shadow-md"}
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
          className={`md:hidden focus:outline-none transition-colors duration-300 ${scrolled ? "text-yellow-600" : "text-gray-700"
            }`}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* LINKS DESKTOP - MEJORADO */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  relative transition-all duration-300 ease-in-out font-medium px-2 py-1
                  ${isActive
                    ? scrolled
                      ? "text-yellow-600 font-bold"  // Amarillo brillante en scroll
                      : "text-yellow-600 font-bold"  // Amarillo oscuro sin scroll
                    : scrolled
                      ? "text-gray-300 hover:text-yellow-600"  // Gris claro en scroll
                      : "text-gray-700 hover:text-yellow-600"  // Gris oscuro sin scroll
                  }
                  ${isActive ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600 after:rounded-full" : ""}
                `}
              >
                {link.name}
              </Link>
            );
          })}
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

      {/* MENU MÓVIL - MEJORADO */}
      {isOpen && (
        <>
          {/* Overlay para cerrar al hacer clic fuera */}
          <div 
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          

          {/* Contenido del menú */}
          <div 
            ref={menuRef}
            className={`fixed top-0 left-0 w-full z-50 md:hidden flex flex-col items-center py-4 space-y-4 transition-all duration-500 ease-in-out ${
              scrolled ? "bg-black/95 text-white" : "bg-white text-gray-800"
            }`}
          >
                                {/* LOGO */}
        <Link href="/" className="flex items-">
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

            {links.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    text-lg px-4 py-2 transition-all duration-300 w-32 text-center
                    ${isActive
                      ? scrolled
                        ? "text-yellow-600 font-semibold"  // Amarillo brillante en scroll
                        : "text-yellow-600 font-semibold"  // Amarillo oscuro sin scroll
                      : scrolled
                        ? "text-gray-300 hover:text-yellow-600"  // Gris claro en scroll
                        : "text-gray-700 hover:text-yellow-600"  // Gris oscuro sin scroll
                    }
                    ${isActive ? "border-b-2 border-yellow-600" : ""}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="md:flex items-center flex">
              <a
                href="https://x.com/SadHubEsports"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-125 mr-1"
              >
                <Lineicons icon={XOutlined} size={22} color={scrolled ? "#fff" : "#000"} />
              </a>

              <a
                href="https://instagram.com/sadhubesports"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-125 mr-1"
              >
                <Lineicons icon={InstagramOutlined} size={22} color={scrolled ? "#fff" : "#000"} />
              </a>

              <a
                href="https://www.twitch.tv/sadhubesports"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-125 mr-1"
              >
                <Lineicons icon={TwitchOutlined} size={22} color={scrolled ? "#fff" : "#000"} />
              </a>

              <a
                href="https://tiktok.com/@sadhubesports"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-125 mr-1"
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
        </>
      )}
    </nav>
  );
}
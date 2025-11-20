import type { Metadata } from "next";
import "../src/ui/globals.css";
import { montserrat } from "@/ui/fonts";
import NavLinks from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/footer";


export const metadata: Metadata = {
  title: "SadHub",
  description: "SadHub: La comunidad gamer más vibrante de Colombia. Equipos profesionales de Valorant, torneos, noticias de esports y contenido exclusivo del gaming colombiano.",
  keywords: "esports colombia, esports , valorant colombia, valorant, equipos esports, sadhub esports, esports, sadhub, torneos gaming, gaming competitivo, gaming colombiano",
  authors: [{ name: "SadHub" }],
  creator: "SadHub",
  publisher: "SadHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sadhub.online'), // ¡IMPORTANTE! Cambia esto
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SadHub",
    description: "La comunidad gamer más vibrante de Colombia. Equipos profesionales de Valorant y esports.",
    url: 'https://sadhub.online',
    siteName: 'SadHub',
    images: [
      {
        url: '/header.png', // Crea una imagen OG para redes sociales
        width: 1200,
        height: 630,
        alt: 'SadHub - Comunidad Gaming Colombiana',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SadHub - Comunidad Gaming Colombiana",
    description: "La comunidad gamer más vibrante de Colombia. Equipos profesionales de Valorant y esports.",
    images: ['/header.png'], // Crea una imagen específica para Twitter
    creator: '@SaHubEsports', // Si tienes Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased flex flex-col min-h-screen`}>
        <header className="border-b border-gray-200 mb-5.5">
          <NavLinks/>
        </header>
         <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

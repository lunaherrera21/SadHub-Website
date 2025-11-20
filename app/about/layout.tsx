import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SadHub - About",
  description: "Conoce la historia de SadHub Esports, organización colombiana de esports. Nuestra misión, visión y compromiso con el talento gaming de Latinoamérica.",
  keywords: "esports colombia, esports , valorant colombia, valorant, equipos esports, sadhub esports, esports, sadhub, torneos gaming, gaming competitivo, gaming colombiano",
  openGraph: {
    title: "SadHub - About",
    description: "Conoce la historia de SadHub Esports y nuestro compromiso con el talento gaming de Latinoamérica",
    images: ['/sesionFotos/Foto_grupal_2.jpeg'],
  },
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
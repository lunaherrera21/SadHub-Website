import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SadHub - Valorant Team",
  description: "Conoce a nuestro equipo profesional de Valorant en SadHub. Jugadores, stats, perfiles y logros del equipo gaming colombiano.",
    keywords: "esports colombia, esports , valorant colombia, valorant, equipos esports, sadhub esports, esports, sadhub, torneos gaming, gaming competitivo, gaming colombiano",
  openGraph: {
    title: "SadHub - Valorant Team",
    description: "Conoce a nuestro equipo profesional de Valorant en SadHub",
    images: ['/header.png'],
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
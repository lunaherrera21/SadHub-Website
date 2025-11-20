import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SadHub - Oficial Shop",
    description: "Shop oficial de SadHub Esports. Compra merchandising exclusivo, camisetas y productos gaming. Envíos a toda Colombia. #BeSad",
    keywords: "sadhub esports shop, camisetas esports, productos gamer colombia, camiseta sadhub, store oficial, gaming merchandise, ropa esports, esports, sadhub, sadhub esports",
    openGraph: {
        title: "SadHub - Oficial Shop",
        description: "Shop oficial de SadHub Esports. Merchandising exclusivo y productos gaming. #BeSad",
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
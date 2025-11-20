export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number | string;
  images: string[];
  img: string;
  imgHover: string;
  isNew: boolean;
}
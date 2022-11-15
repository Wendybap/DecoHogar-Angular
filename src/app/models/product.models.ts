// Creo un nueva interface para category porque en mi API es un objeto dentro de un array
export interface Category {
  id: string;
  name: string;
}
export interface Product {
  id: string;
  title: string;
  images: string[];
  price: number;
  description: string;
  category: Category;
  rating?: number;
}

// images: string[]; Indica que las imagenes son un array

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

export interface CreateProductDTO
  extends Omit<Product, 'id' | 'category' | 'rating'> {
  categoryId: number;
}

// Interface para actualizar el product y con el partial le decimos que todos los
// atributos sean opcionales, es decir que internamente les coloca el ? a todos los atributos
export interface UpdateProductDTO extends Partial<CreateProductDTO> {}

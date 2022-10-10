import { Injectable } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  // ** lo pongo privado para que solo sea del uso del servicio
  private myShoppingCart: Product[] = [];

  constructor() {}

  // Metodo para agregar elementos al carrito de compras
  addProduct(product: Product) {
    this.myShoppingCart.push(product);
  }

  // Metodo parar devolver el myShoppingCart
  getShoppingCart() {
    return this.myShoppingCart;
  }

  // Metodo para calcular el total de precios del carrito de compras
  getTotal() {
    return this.myShoppingCart.reduce((suma, item) => suma + item.price, 0);
  }
}

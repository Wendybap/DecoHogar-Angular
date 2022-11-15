import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  // * ESTE SERVIVIO TIENE TODA LA MANIPULACION DEL CARRITO DE COMPRAS

  // ** lo pongo privado para que solo sea del uso del servicio
  private myShoppingCart: Product[] = [];

  // Creo el observable para comunicar al estado global
  private myCart = new BehaviorSubject<Product[]>([]);

  // creo el subscriptor y creo el observable$ y luego se lo comparto
  // a quien lo necesite con .next

  myCart$ = this.myCart.asObservable();

  constructor() {}

  // Metodo para agregar elementos al carrito de compras
  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
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

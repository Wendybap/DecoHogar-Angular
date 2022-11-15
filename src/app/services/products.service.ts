import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // Hago una inyección de dependencia que inyecta a otro servicio
  constructor(private httpClient: HttpClient) {}

  // *Metodo que devuelve todos los productos haciendo la petición get a una URL
  // *Debo tipar mi petición para indicarle que es del tipo array de productos<Products[]>
  getAllProducts() {
    return this.httpClient.get<Product[]>(
      'https://young-sands-07814.herokuapp.com/api/products/'
    );
  }
}

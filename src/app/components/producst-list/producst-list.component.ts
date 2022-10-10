import { Component, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.models';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-producst-list',
  templateUrl: './producst-list.component.html',
  styleUrls: ['./producst-list.component.scss'],
})
export class ProducstListComponent implements OnInit {
  myShoppingCart: Product[] = [];
  total = 0;
  myProduct: Product[] = [];

  // **Creamos una inyección de dependencias dentro del controlador
  // ** para usar los servicios que que necesite en este caso stroreService y productsService
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    // Aqui obtengo la lista actual de elemntos que estan en el carrito de compras
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    // aqui obtengo los datos de la API
    this.productsService.getAllProducts().subscribe((data) => {
      this.myProduct = data;
    });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}

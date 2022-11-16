import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() myProduct: Product = {
    id: '',
    title: '',
    images: [],
    price: 0,
    description: '',
    category: {
      id: '',
      name: '',
    },
  };

  @Output() addMyProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>();
  // le enviamos solo un string porque solo necesitamos el id del producto
  constructor() {}

  onAddToCart() {
    this.addMyProduct.emit(this.myProduct);
  }

  // Funcion para ver detalle del producto
  onShowDetail() {
    this.showProduct.emit(this.myProduct.id);
  }
}

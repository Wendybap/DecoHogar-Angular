import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() myProduct: Product = {
    id: '',
    title: '',
    image: '',
    price: 0,
    description: '',
    category: '',
  };

  @Output() addMyProduct = new EventEmitter<Product>();
  constructor() {}

  ngOnInit(): void {}

  onAddToCart() {
    this.addMyProduct.emit(this.myProduct);
  }
}

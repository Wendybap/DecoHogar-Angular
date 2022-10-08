import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() myProduct: Product = {
    id: '',
    name: '',
    img: '',
    price: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}

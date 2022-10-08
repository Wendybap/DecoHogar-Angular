import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from './models/product.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // ? Parar información dinamicamente al hijo
  imgParent = '';

  @Output() myProduct: Product[] = [
    {
      id: '1',
      name: 'producto 1',
      img: '../../../assets/img/img1.jpg',
      price: 25,
    },
    {
      id: '2',
      img: '../assets/img/img1.jpg',
      name: 'Habitación',
      price: 20356,
      category: 'all',
    },
    { id: '3', img: '../assets/img/img2.jpg', name: 'Oficina', price: 30356 },
    { id: '4', img: '../assets/img/img3.jpg', name: 'Comedor', price: 20356 },
    { id: '5', img: '../assets/img/img4.jpg', name: 'Cocina', price: 20356 },
    {
      id: '6',
      img: '../assets/img/img5.jpg',
      name: 'Sala de estar',
      price: 20356,
    },
    { id: '7', img: '../assets/img/img6.jpg', name: 'Comedor', price: 20356 },
    {
      id: '8',
      img: '../assets/img/img7.jpg',
      name: 'Sala de estar',
      price: 20356,
    },
    {
      id: '9',
      img: '../assets/img/img.jpg',
      name: 'Deco Sala de estar',
      price: 20356,
    },
  ];

  // ? Metodo para que el padre escuche el evento creado por el hijo app-image
  onLoaded(img: string) {
    console.log('log PADRE', img);
  }
}

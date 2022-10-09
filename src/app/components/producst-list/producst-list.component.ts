import { Component, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-producst-list',
  templateUrl: './producst-list.component.html',
  styleUrls: ['./producst-list.component.scss'],
})
export class ProducstListComponent implements OnInit {
  @Output() myProduct: Product[] = [
    // {
    //   id: '1',
    //   name: 'producto 1',
    //   img: '../../../assets/img/img1.jpg',
    //   price: 25,
    // },
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
    {
      id: '10',
      img: '../assets/img/cocina1.jpg',
      name: 'Deco Sala de estar',
      price: 20356,
    },
    {
      id: '11',
      img: '../assets/img/img8.jpg',
      name: 'Deco Sala de estar',
      price: 20356,
    },
    {
      id: '12',
      img: '../assets/img/img9.jpg',
      name: 'Deco Sala de estar',
      price: 20356,
    },
    {
      id: '13',
      img: '../assets/img/img10.jpg',
      name: 'Deco Sala comedor',
      price: 20356,
    },
    {
      id: '14',
      img: '../assets/img/img11.jpg',
      name: 'Deco Sala de estar',
      price: 20356,
    },
    {
      id: '15',
      img: '../assets/img/img15.jpg',
      name: 'Deco Sala de estar',
      price: 20356,
    },
    {
      id: '16',
      img: '../assets/img/Baño1.jpg',
      name: 'Deco Sala de estar',
      price: 20356,
    },
    {
      id: '17',
      img: '../assets/img/img12.jpg',
      name: 'Deco Cocina',
      price: 20356,
    },
    {
      id: '18',
      img: '../assets/img/img13.jpg',
      name: 'Deco Cocina',
      price: 20356,
    },
    {
      id: '19',
      img: '../assets/img/img14.jpg',
      name: 'Deco Sala de estar',
      price: 20356,
    },
    {
      id: '20',
      img: '../assets/img/img16.jpg',
      name: 'Baño',
      price: 20356,
    },
    {
      id: '21',
      img: '../assets/img/cocina2.jpg',
      name: 'Cocina',
      price: 20356,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

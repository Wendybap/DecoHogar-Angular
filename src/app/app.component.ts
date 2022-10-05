import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'decoHogar-angular-platzi';
  name: string = 'Wendy';
  age: number = 25;
  img: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTx12fYnoka9A7KCQZ7t99UVXsd-Muw2Dutw&usqp=CAU';
  btnDisable: boolean = true;
  widthImg = 10;

  person = {
    name: 'wendy',
    age: 35,
    Image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTx12fYnoka9A7KCQZ7t99UVXsd-Muw2Dutw&usqp=CAU',
  };

  // Creo el objeto para llenar el formulario
  register = {
    name: '',
    email: '',
    password: '',
  };

  box = {
    width: 100,
    height: 100,
    background: 'red',
  };

  newNames: string[] = ['camilo', 'petra', 'pepito'];

  dynamicName = '';

  products: Product[] = [
    {
      img: '../assets/img/img1.jpg',
      name: 'Habitación',
      price: 20356,
      category: 'all',
    },
    { img: '../assets/img/img2.jpg', name: 'Oficina', price: 30356 },
    { img: '../assets/img/img3.jpg', name: 'Comedor', price: 20356 },
    { img: '../assets/img/img4.jpg', name: 'Cocina', price: 20356 },
    { img: '../assets/img/img5.jpg', name: 'Sala de estar', price: 20356 },
    {
      img: '../assets/img/img6.jpg',
      name: 'Comedor',
      price: 20356,
    },
    {
      img: '../assets/img/img7.jpg',
      name: 'Sala de estar',
      price: 20356,
    },
    { img: '../assets/img/img.jpg', name: 'Deco Sala de estar', price: 20356 },
  ];

  // función para capturar el evento Click
  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }

  // Metodo para incrementar la edad
  increaseAge() {
    this.person.age += 1;
  }

  // Metodo para Decrementar la edad
  decreaseAge() {
    this.person.age -= 1;
  }

  // metodo para captar el registro
  onRegister() {
    console.log(this.register);
  }

  // Metodo para el scroll

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTo);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  //  Metodo para agregar nombre dinamico
  addDynamicName() {
    this.newNames.push(this.dynamicName);
    this.dynamicName = '';
  }

  // Metodo para eliminar elementos del array
  deleteDynamicName(index: number) {
    this.newNames.splice(index, 1);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  // */ CON EL DECORADOR @Input pasamos info del PADRE al HIJO
  @Input() img: string = '';

  //** CON EL DECORADOR @Output pasamos info del HIJO al PADRE
  // ** y con el EventEmitter instanciamos el nuevo evento que le vamos a pasar al padre
  @Output() loaded = new EventEmitter<string>();
  imgDefault = '../../../assets/img/default.jpg';

  constructor() {}

  ngOnInit(): void {}

  // Metodo para validar si la URL de la img que recibimos es invalida
  errorImg() {
    this.img = this.imgDefault;
  }

  // Metodo para indicarle al padre que la img cargo correctamente
  imgLoaded() {
    console.log('log HIJO');
    this.loaded.emit(this.img);
  }
}

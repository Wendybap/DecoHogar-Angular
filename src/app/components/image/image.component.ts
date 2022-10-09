import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  // */ CON EL DECORADOR @Input pasamos info del PADRE al HIJO
  img: string = '';
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('quiero ver que solo esta img fur la que cambio =>', this.img);
  }
  @Input() img1: string = '';

  //** CON EL DECORADOR @Output pasamos info del HIJO al PADRE
  // ** y con el EventEmitter instanciamos el nuevo evento que le vamos a pasar al padre
  @Output() loaded = new EventEmitter<string>();
  imgDefault = '../../../assets/img/default.jpg';
  // counter = 0;
  // counterFunction: number | undefined;

  // ** Ciclo de vida de un componente
  constructor() {
    // ESte Hooks corre antes del render
    // aqui se corren cosas sincronas, es decir que ejecutemos la respuesta de inmediato,  y este componente corre una sola vez
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    // ESte Hooks corre antes del render
    // actualiza los cambios en los input
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
  }

  ngOnInit(): void {
    // Corre antes del render
    // aqui se corren cosas asincrinas como llamadas al una API etc

    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFunction = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000);
  }

  ngAfterViewInit() {
    // corre despues del render
    // aqui manejamos a los hijos
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // se corre solo Cuando se elimina el componente
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFunction);
  }

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

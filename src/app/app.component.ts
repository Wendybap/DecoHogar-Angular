import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // ? Parar información dinamicamente al hijo
  imgParent = '';
  showImg = true;

  // ? Metodo para que el padre escuche el evento creado por el hijo app-image
  onLoaded(img: string) {
    console.log('log PADRE', img);
  }

  // Metodo que capture el evento de click para la img
  toggleImg() {
    this.showImg = !this.showImg;
  }
}

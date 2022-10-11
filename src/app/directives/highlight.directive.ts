import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  // Escucho el evento (mouseenter) y accedo al elemento nativo del DOM para modificar un elemento
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'blue';
  }

  // aqui hago lo mismo pero esto es para cuando levanto el mouse
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
  }
  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.backgroundColor = 'blue';
  }
}

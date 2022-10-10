import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  // Este Pipe va a transformar una string al revés

  transform(value: string): string {
    // tomo el value que es una string y lo convierto en un array con split que tiene la función reversa
    // y luego lo vuelvo a convertir en un string con join
    return value.split('').reverse().join('');
  }
}

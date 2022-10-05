// Definición y tipado de variables y funciones
const username: string = 'wendy';

const suma = (a: number, b: number): number => {
  return a + b;
};
console.log(suma(8, 10));

// Creación de clases (Programación orientada a objeto)

//? class Persona { Aquí declaro las propiedades
//?  age: number;
//?  lastName: string;
// aqui les asigno valor
//?   constructor(age: number , lastName: string) {
//?     this.age = age;
//?     this.lastName = lastName;
//?   }
//? }

// Tambien lo puedo declarar de esta manera, indicando el tipo de
// accesibilidad dentro del constructor

class Persona {
  constructor(public age: number, public lastName: string) {}
}

// Instanciar la clase para crear un nuevo objeto a partir de esta clase

const wendy = new Persona(37, 'maria');
console.log(wendy);
console.log(wendy.lastName);

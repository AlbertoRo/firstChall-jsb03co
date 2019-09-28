'use strict';

// * * * * * * * * * * * * * * * *
// * 1. C A L C U L A D O R A *
// * * * * * * * * * * * * * * * *

// Crea un programa que permita realizar sumas, restas, multiplicaciones y divisiones.

//     - El programa debe recibir dos nÃºmeros(n1, n2).

//     - Debe existir una variable que permita seleccionar el tipo de operaciÃ³n(suma, resta, multiplicaciÃ³n o divisiÃ³n).

//     - Opcional: agrega una cuarta opciÃ³n que permita elevar n1 a la potencia n2.

// function calculator(number1, number2, operador) {
//   let operación;
//   if (operador === 'suma' || operador === '+') {
//     return number1 + number2;
//   }
//   if (operador === 'resta' || operador === '-') {
//     return number1 - number2;
//   }
//   if (operador === 'multiplicación' || operador === '*') {
//     return number1 * number2;
//   }
//   if (operador === 'división' || operador === '/') {
//     return number1 / number2;
//   }
// }
// console.log(calculator(20, 5, 'suma'));
// console.log(calculator(20, 5, '*'));

//  * * * * * * * * * * * * * * * * * * * * * * *
//     * 2. R E G I S T R O   A C A D Ã‰ M I C O *
//     * * * * * * * * * * * * * * * * * * * * * * *

//     Â¡Hack a BOS necesita tu ayuda! Hemos tenido un problema con nuestros servidores y se ha perdido el fichero que contenÃ­a el
// listado de alumnos y profesores.

//         - Crea la clase "Person" que incluya las propiedades: nombre, edad y gÃ©nero, y un mÃ©todo que muestre por pantalla las *
//     propiedades de una persona.

//         - Crea la clase "Teacher".Esta clase debe heredar de "Person", y debe incluÃ­r, a mayores, las propiedades: "subject" *
//     y "studentsList", y un mÃ©todo que permita asignar alumnos al profesor.Esta asignaciÃ³n se almacenarÃ¡ en el array
// "studentList" mencionado anteriormente.

//         - Crea la clase "Student".Esta clase debe heredar de "Person", y debe incluÃ­r, a mayores, las propiedades: "course"
// y "group", y un mÃ©todo que permita registrar un nuevo estudiante.

//         - El objetivo final es mostrar por pantalla la lista de profesores junto a todas sus propiedades, entre ellas, los alu -
//     mnos que tiene asignados.

//         - Deben figurar un mÃ­nimo de tres profesores.Cada profesor debe tener asignado un mÃ­nimo de dos alumnos.

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  static showAtributes() {
    const atributes = new Person();
    console.log(Object.keys(atributes));
  }
}
class Teacher extends Person {
  constructor(name, age, gender, subject) {
    super(name, age, gender);
    this.subject = subject;
    this.stundentList = [];
  }
  static stundenToTeacher() {}
}
class Student extends Person {
  constructor(name, age, gender, course, group) {
    super(name, age, gender);
    this.course = course;
    this.group = group;
  }
  static registerAStudent(name, age, gender, course, group) {
    return new Student(name, age, gender, course, group);
  }
}
const teacherNames = ['Juan', 'Lucía', 'Alberto'];
const ageTeacher = [44, 55, 70];
const genderTeacher = ['male', 'female', 'male'];
const subject = ['Historia', 'Lengua', 'Física'];
const teacherList = teacherNames.map((name, index) => {
  return new Teacher(name, ageTeacher[index], genderTeacher[index], subject[index]);
});
Person.showAtributes();
const alumno1 = Student.registerAStudent('María', 20, 'female', 2, 'Historia');
const alumno2 = Student.registerAStudent('Alberto', 18, 'male', 1, 'Física');
const alumno3 = Student.registerAStudent('Lucas', 18, 'male', 3, 'Lengua');
const listAlumns = [alumno1, alumno2, alumno3];

for (let i = 0; i < listAlumns.length; i++) {
  for (let j = 0; j < listAlumns.length; j++)
    if (teacherList[i].subject === listAlumns[j].group) {
      teacherList[i].stundentList = listAlumns[j];
    }
}
console.log(teacherList);

//    * * * * * * * * * * * * * * * * * * * * *
//     * 3. D A D O   E L E C T R Ã“ N I C O *
//     * * * * * * * * * * * * * * * * * * * * *

//     Simula el uso de un dado electrÃ³nico cuyos valores al azar irÃ¡n del 1 al 6.

//         - Crea una variable "gameOver" que pondrÃ¡ fin a la ejecuciÃ³n del programa.

//         - En esta variable se irÃ¡n sumando los distintos valores que nos devuelva el dado, y una vez alcanzados los 50 puntos el
// programa se detendrÃ¡.

// - Debes mostrar por pantalla los distintos valores que nos devuelva el dado(nÃºmeros del 1 al 6) asÃ­ como el valor de la
// variable "gameOver" tras cada tirada.

//         - Finalmente muestra un mensaje que indique el fin del juego.

// function tirarEldado() {
//   let puntos = 0;
//   for (let i = 0; i <= 50; i++) {
//     let carasDelDado = Math.round(Math.random() * 6);
//     puntos += carasDelDado;
//     console.log('dado', carasDelDado);
//     console.log('llevas acumulados ---> ', puntos);

//     if (puntos >= 50) {
//       return console.log('El juego se ha acabado, has superado los 50 puntos en ' + (i + 1), ' tiradas');
//     }
//   }
//   console.log(carasDelDado);
// }
// tirarEldado();

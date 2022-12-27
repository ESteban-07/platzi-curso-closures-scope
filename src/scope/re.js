// Var
var firstName; // undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = 'David'; // declarar / asignar
lastName = 'Ana'; // reasignar
console.log(lastName);

var secondName = 'David'; // declarando / asignando
var secondName = 'Ana'; // redeclarando / reasignando
console.log(secondName);

// Let
let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; // reasignar
console.log(fruit);

// let fruit = 'Banana'; // no se puede redeclarar
// console.log(fruit);

// Const
const animal = 'dog'; // declarar y asignar
// animal = 'cat'; // no se puede reasignar

// const animal = 'Snake'; // no se puede redeclarar
console.log(animal);

/*
Al trabajar objetos con const, los valores de estos pueden ser mutables.
Sin embargo, la referencia de esta variable no podrá ser redeclarada ni
reasignada ya que es única y existe previamente en memoria.
*/
const vehicles = [];
vehicles.push('🚗');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);

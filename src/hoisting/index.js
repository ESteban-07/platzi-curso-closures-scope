/*
Es importante recalcar que el Hoisting en las funciones, solo afecta a aquellas
que estén escritas con la sintaxis de “Function Declaration”, si intentamos con
otras sintaxis, arrow functions o function expression, nos mandará un error.
*/

// var nameOfDog; //undefined

// console.log(nameOfDog);
// var nameOfDog = 'Elmo';
// console.log(nameOfDog);

nameOfDog();

function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = 'Elmito';

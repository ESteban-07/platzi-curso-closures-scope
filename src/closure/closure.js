function greeting(username) {
    return function displayUserName() {
        return console.log(`Hello ${username}`);
    };
}

const greetOscar = greeting('Oscar');
const greetElisa = greeting('Elisa');

greetOscar();
greetElisa();

let  numbers = [1,3,4,6,7,8,];

console.log(numbers.includes(4));


const list = ['Oscar','David','Ana'];

console.log(list.includes('Oscar'));

const letras = { a: 1, b: 2, c: 3 }

console.log("a" in letras); // true
console.log(letras.hasOwnProperty("a")); // true
console.log(Object.hasOwn(letras, "a")); // true

const numeros = [1, 9, 2, 3, 7, 9];


/**
 * MAP
 */
// let nuevoArray = numeros.map(item => Math.pow(item, 2))

// // console.log(nuevoArray);
// let otroArray = numeros.map((number, index, array) => {
//   console.log(number, index, this);
// }, { nombre: "jorge" })

// console.log(otroArray);

/**
 * REDUCE
 */

// let sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0
// )

// console.log(sumaTotal);

/**
 * FIND
 */

// let encuentra = numeros.find(elemento => elemento === 9);

// console.log(encuentra);

/**
 * FILTER
 */

let datos = numeros.filter(elemento => elemento > 5);

console.log(datos);
// * EXERCISE 1
// let number = prompt("ingresa un número");


// function par(num) {
//   // let num = "12asd";
//   num = parseInt(num, 10);

//   // console.log(isNaN(num));
//   if (!isNaN(num)) {
//     if (num % 2 == 0) {
//       console.log(`El numero ${num} es par`);
//     } else {
//       console.log(`El numero ${num} es impar`);
//     }
//   } else {
//     console.log("debe ser un número");
//   }
// }

// par(number);


// * EXERCISE 2

// let number2 = 8;

// factorial(number2);

// function factorial(num) {

//   let i = 1;
//   let n = 1;
//   while (i < num) {
//     n += n * i;
//     console.log(n);
//     i++;
//   }
// }



// * EXERCISE 3

// let number = prompt("ingresa un número");
// number = parseInt(number, 10);

// // const array1 = [1, 2, 3];
// // const array2 = [4, 5, 6];
// const array1 = [];
// const array2 = [];


// function llenado() {
//   for (let i = 0; i < number; i++) {
//     array1.push(aleatorio());
//     array2.push(aleatorio());
//   }
//   // console.log(array2);

//   // let i = 0;
//   let n = 0;
//   let result = 0;
//   for (let i = 0; i < array1.length; i++) {
//     n = array1[i] * array2[i];
//     result = result + n;
//     // console.log(n);
//   }
//   console.log(result);
// }

// function aleatorio() {
//   return Math.round(Math.random() * 5);
// }

// llenado();

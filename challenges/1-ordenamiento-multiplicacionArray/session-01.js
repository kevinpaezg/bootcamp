
// console.log("EJERCICIO 1");

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



console.log("EJERCICIO 2");

const numbers = [];



function orden() {
  for (let i = 0; i < 10; i++) {
    numbers.push(aleatorio());
  }

  let max = Math.max(...numbers);
  console.log(numbers);
  // console.log(max);
  let newArray = [];
  for (let i = 0; i < max + 1; i++) {
    newArray.push(0);
  }
  // console.log(newArray);

  for (let i = 0; i < numbers.length; i++) {
    newArray[numbers[i]] += 1;
  }
  console.log(newArray);

  let finalArray = [];

  newArray.forEach((element, index) => {
    if (element > 0) {
      for (let i = 0; i < element; i++) {
        finalArray.push(index);
      }
    }
  });

  console.log(finalArray);

}

function aleatorio() {
  return Math.round(Math.random() * 10);
}

orden();

// * KEVIN PAEZ GALLARDO
const button1 = document.getElementById("button-1");
const answer1 = document.getElementById("answer-1");
button1.addEventListener("click", problem1);

const button2 = document.getElementById("button-2");
const answer2 = document.getElementById("answer-2");
button2.addEventListener("click", problem2);

const button3 = document.getElementById("button-3");
const answer3 = document.getElementById("answer-3");
button3.addEventListener("click", problem3);



function problem1() {
  let input1 = document.getElementById("problem-1").value;
  if (input1 != "") {
    num = parseInt(input1);
    if (num % 2 == 0) {
      answer1.innerHTML = `El número ${num} es par`;
    } else {
      answer1.innerHTML = `El número ${num} es impar`;
    }
  } else {
    answer1.innerHTML = "Escribe un número";
  }
}


function problem2() {
  let input2 = document.getElementById("problem-2").value;
  if (input2 != "") {
    num = parseInt(input2);
    if (num >= 0) {
      let i = 1;
      let n = 1;
      /*
       * FORMA WHILE
       */
      // while (i < num) {
      //   n += n * i;
      //   i++;
      // }

      /*
       * FORMA FOR
       */
      for (let j = 1; j < num; j++) {
        n += n * j;
      }
      answer2.innerHTML = `El factorial de ${num} es: ${n}`;
    } else {
      answer2.innerHTML = `No se puede factorizar números negativos`;

    }
  } else {
    answer2.innerHTML = "Escribe un número";
  }
}


function problem3() {
  let input3 = document.getElementById("problem-3").value;
  if (input3 != "") {
    num = parseInt(input3);
    if (num > 0) {
      const array1 = [];
      const array2 = [];

      for (let i = 0; i < num; i++) {
        array1.push(aleatorio());
        array2.push(aleatorio());
      }

      let n = 0;
      let result = 0;
      for (let i = 0; i < array1.length; i++) {
        n = array1[i] * array2[i];
        result = result + n;
        // console.log(n);
      }
      // console.log(result);

      answer3.innerHTML = `
      Array1[] = ${array1} <br> 
      Array2[] = ${array2} <br>
      El resultado es: ${result}`;
    } else {
      answer3.innerHTML = "El tamaño debe ser mayor a 0";

    }
  } else {
    answer3.innerHTML = "Escribe un número";
  }
}

function aleatorio() {
  return Math.round(Math.random() * 20);
}

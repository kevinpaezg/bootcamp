// comentario de una sola linea
/**
 * COmentarios de varias
 * lineas
 **/

function suma(parametro1, parametro2){
    return parametro1 + parametro2;
}

function saluda(nombrePersona){
    alert(nombrePersona);
    console.log(suma(3, 5));    
}

//saluda('Fausto');

//declaracion de las variables 
var numero1 = 23;
var numero2 = 50;

let  numero3 = 40;

function multiplica(){
    return numero1 * numero2;
}


function eleva() {
    return 2*numero3;
}

let s = 9;

function verifica() {

    let s = 2;
    console.log(s);
}
verifica();
alert(s);


function esmayor(numero1, numero2) {
    if (numero1 > numero2) {
       console.log("El numero1 es mayor que el numero 2"); 
    } else {
       if (numero1 < numero2) {
          console.log("El numero2 es mayor que el numero 1");
       } else {
          console.log("Son iguales");
       }
    }
}



function comparar(valor){
   switch (valor) {    //hoisting
      case 15: console.log("Algo fresco");
               break;
      case 20: console.log("Esta bien");
               break;
     default: console.log("Esta feo el clima (ni calor ni frio)");
     case 30: console.log("Iniciando calor");
               break;
      case 40: console.log("Muy caluroso");
               break; 
   }
}

function compararTemperaturas(valor) {
      if (valor < 10) {
          console.log("MUy frio!");
      }else {
          if (valor >= 10 && valor < 20) {
              console.log("Fresco!");
          } else {
              if (valor >= 20 && valor < 30) {
                  console.log("Estoy bien!");
              } else {
                  console.log("No me gusta el calor!!");
              }
          }
      }
}

function opcional(dia){
    if (dia === "Lunes" || dia === "Viernes") {
        console.log("No voy al trabajo");
    }
}

function invierte(valor) {
    console.log(!valor);
}

// comandos iterativos

function tablamultiplicar(base, limite){
    let contador = 1;

    console.log(limite);
    console.log(contador);
    while (contador <= limite) {
        console.log(base + " * " + contador + " = " + (base*contador));
        contador = contador + 1; // ++contador;   contador++;  contador += 1;
    }
}


function tablamultiplicar2(base, limite){
    for (let contador = 1; contador <= limite; ++contador) {
       console.log(base + " * " + contador + " = " + (base*contador)); 
    }
}

function verificador() {
    let a = 1;

    console.log(++a); a += 1
    console.log(a++);
    console.log(a);
}

const nocambia = 10;




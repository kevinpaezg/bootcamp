// Arreglos
const animales = ["Perro", "Gato", "Pescado"];

// para determinar el tamaño del arreglo
console.log(animales.length);

// obtener un elemento
console.log(animales[0]); // Perro

animales.forEach(function(item, index, array){
    console.log(item, index);
});

for (let i=0; i < animales.length; i++) {
    console.log(animales[i]);
}

console.log("Determinar el numero mayor de la lista")

function determinarMayor() {
    const numeros = [2,5,4,2,98, 45, 34, 200, 1];
    let maximo = numeros[0];
    numeros.forEach(function (item, index, array) {
         if (item >= maximo) {
             maximo = item;
         }
    });    
    return maximo;
}

console.log(determinarMayor());

let arreglo = [];

function devuelveNumeroAleatorio() {
    return Math.round(Math.random() * 400);
}

function generaElementos() {
    for (let i = 0; i < 100; i++) {
        arreglo.push(devuelveNumeroAleatorio());
    }
}

function muestra() {
     generaElementos();
     arreglo.forEach(function (item, index, array) {
         console.log(item);
     });
}







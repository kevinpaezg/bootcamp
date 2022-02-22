const start = document.getElementById("start");
const reboot = document.getElementById("reboot");

start.addEventListener("click", iniciarCarrera);
reboot.addEventListener("click", reiniciarCarrera);


let pixeles = 10;
let limite = window.innerWidth - 126;
let carrera;

function iniciarCarrera() {
  // console.log("start", limite);
  let i = 0;
  carrera = setInterval(() => {
    if (i < 250) {
      avanzar();
    } else {
      clearInterval(carrera);
    }
    i++;
    // console.log(i);
  }, 100);
  // console.log(carrera)

}

function reiniciarCarrera() {
  // console.log("reboot");
  for (let i = 1; i < 11; i++) {
    document.getElementById(`car-${i}`).style.left = "0px";
    clearInterval(carrera);
  }
}

function avanzar() {
  let numCar = carroAleatorio();
  let i = 1;
  // i++;
  if (pixeles < limite) {
    document.getElementById(`car-${numCar}`).style.left = pixeles + "px";
    pixeles = pixeles + 10;
    tablaGanadores(i, numCar);
  } else {
    document.getElementById(`car-${numCar}`).style.left = pixeles + "px";
    // console.log(numCar);
    i++;
  }
  // console.log(pixeles);
  if (pixeles > limite) {
    // console.log("el ganador es: " + numCar);
    // console.log("el limite");

  }

}

function tablaGanadores(i, numCar) {
  // console.log(i);
  document.getElementById(`point-car-${i}`).innerHTML = `${numCar}`;
  document.getElementById(`point-car-${i}`).innerHTML = `${numCar}`;

}

function carroAleatorio() {
  return Math.round(Math.random() * (10 - 1) + 1);
}
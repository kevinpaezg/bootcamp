let horas = 0;
let minutos = 0;
let segundos = 0;
let accion = true;
let proceso;

function inicializar() {
  horas = 0;
  minutos = 0;
  segundos = 0;
}

function inicia() {
  if (accion) {
    document.getElementById("btnInicio").innerHTML = "Detener";
    accion = false;
    proceso = setInterval(actualiza, 1000);
  } else {
    clearInterval(proceso);
    inicializar();
    document.getElementById("btnInicio").innerHTML = "Inicia tiempo";
    accion = true;
  }

}

function actualiza() {
  document.getElementById("tiempo").innerHTML = ++segundos;
}


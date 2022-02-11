const tiempo = document.getElementById("tiempo");
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
    proceso = setInterval(() => {
      actualiza();

    }, 50);
  } else {
    clearInterval(proceso);
    inicializar();
    document.getElementById("btnInicio").innerHTML = "Inicia tiempo";
    accion = true;
  }

}

function actualiza() {
  // document.getElementById("tiempo").innerHTML = ++segundos;
  if (segundos < 10 || minutos < 10) {
    if (minutos > 10) {
      tiempo.innerHTML = `0${horas}:${minutos}:0${segundos++}`;
    } else {
      tiempo.innerHTML = `0${horas}:0${minutos}:0${segundos++}`;
    }

    if (segundos > 10) {
      tiempo.innerHTML = `0${horas}:0${minutos}:${segundos++}`;
    }

  } else {
    // if (minutos >= 10) {
    //   tiempo.innerHTML = `0${horas}:${minutos}:${segundos++}`;

    // }
    tiempo.innerHTML = `0${horas}:${minutos}:${segundos++}`;
  }


  if (segundos == 60) {
    tiempo.innerHTML = `0${horas}:${minutos++}:59`;
    segundos = 0;
  }
  if (minutos == 60) {
    tiempo.innerHTML = `0${horas++}:59:00`;
    minutos = 0;

  }
}

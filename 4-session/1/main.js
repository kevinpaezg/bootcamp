let action = true;
// const valor = ["right", "left", "bottom", "top"];
let vleft = 0;
let vtop = 0;

function ocultar() {
  if (action) {
    document.getElementById("lion").style.visibility = "hidden";
  } else {
    generarValoresAleatorios();
    document.getElementById("lion").style.left = vleft + "px";
    document.getElementById("lion").style.top = vtop + "px";
    document.getElementById("lion").style.visibility = "visible";
  }
  action = !action;
}

function generarValoresAleatorios() {
  vleft = Math.round(Math.random() * (window.innerWidth - 64));
  vtop = Math.round(Math.random() * (window.innerHeight - 64));
}
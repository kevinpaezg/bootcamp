const start = document.getElementById("start");
const reboot = document.getElementById("reboot");
const topo = document.getElementById("topo");
const dynamite = document.getElementById("dynamite");
const user = document.getElementById("user");
const computer = document.getElementById("computer");
const winner = document.getElementById("winner");
// let toposDynamite = document.querySelector(".images");

start.addEventListener("click", startGame);
reboot.addEventListener("click", rebootGame);

topo.addEventListener("click", puntuacionA);
dynamite.addEventListener("click", puntuacionB);

let vleft = 0;
let vtop = 0;
let partida;
let countComputer = 1;
let countUser = 1;
topo.style.visibility = "hidden";
dynamite.style.visibility = "hidden";

function startGame() {
  // console.log("game start");
  partida = setInterval(() => {
    tamanoAleatorio();
    topo.style.left = vleft + "px";
    topo.style.top = vtop + "px";

    tamanoAleatorio();
    dynamite.style.left = vleft + "px";
    dynamite.style.top = vtop + "px";

    computer.innerHTML = `${countComputer++}`;
    // countComputer++;
  }, 1000);
  topo.style.visibility = "visible";
  dynamite.style.visibility = "visible";

  setTimeout(() => {
    clearInterval(partida);
    if (countUser >= countComputer) {
      winner.innerHTML = `El ganador es jugador`;
    } else {
      winner.innerHTML = `El ganador es computadora`;
    }
    // toposDynamite.classList.add('active');
    // toposDynamite.add('visibility');
  }, 12000);
}


function puntuacionA() {
  // console.log("topo");
  user.innerHTML = `${countUser++}`;
  // countUser++;
}

function puntuacionB() {
  // console.log("dinamite");
  // countUser--;
  user.innerHTML = `${--countUser}`;

}

function rebootGame() {
  // console.log("end game");
  clearInterval(partida);
  winner.innerHTML = ``;
  user.innerHTML = `0`;
  computer.innerHTML = `0`;
  topo.style.visibility = "hidden";
  dynamite.style.visibility = "hidden";
  countUser = 1;
  countComputer = 1;
  // tamanoAleatorio();
}

function tamanoAleatorio() {
  vleft = Math.round(Math.random() * (window.innerWidth - 100));
  vtop = Math.round(Math.random() * (window.innerHeight * 0.50));
}
function correTiempo() {
  setTimeout(verificaRespuesta, 5000);
}

function verificaRespuesta() {
  let resultado = document.getElementById("resultado").value;
  if (resultado === "9596000") {
    alert("Eres un super genio");
  } else {
    alert("BUUUUUUUUUUUUUUU, que mal jugador!!!");
  }
  document.getElementById("muestra").innerHTML = "";
}


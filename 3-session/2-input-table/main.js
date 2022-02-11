function verifica() {
  document.getElementById("error_email").innerHTML = "";
  document.getElementById("error_pass").innerHTML = "";
  let email = document.getElementById("correo").value;
  let pass = document.getElementById("pass").value;
  if (email === "") {
    document.getElementById("error_email").innerHTML = "Escribe tu correo";
    document.getElementById("error_email").style.color = "blue";
    return false;
  }
  if (pass === "") {
    document.getElementById("error_pass").innerHTML = "Escribe tu contraseña";
    return false;
  }
  return true;
}
function multiplicar(base, limite){
   debugger;
   let contador = 1;
   do{
     document.getElementById("resultado").innerHTML +=  
            base + " * " + contador + " = " + (contador*base) + "<br />";
     contador += 1;
   } while(contador <= limite);
   return true;
}

function limpiezaCampos() {
    document.getElementById("base").value = "";
    document.getElementById("limite").value = "";
    return true;
 }

function iniciaproceso() {
    let base   = document.getElementById("base").value;
    let limite = document.getElementById("limite").value;
    if (!parseInt(base)) {
        alert("Digita un numero entero en la base");
        limpiezaCampos();
        document.getElementById("base").focus();
        return false;
    }
    if (!parseInt(limite)) {
        alert("Digita un numero entero en el limite");
        limpiezaCampos();
        document.getElementById("limite").focus();
        return false;
    }
    multiplicar(base, limite);
    limpiezaCampos();
    return true;
}
let persona = {
  nombre: "jorge",
  apellido: "hernandez",
  edad: 36,
  correo: "jorge.hernandez@mozcalti.com"
}
// console.log(persona)
// console.log(persona.correo)
// console.log(persona.salario)
// console.log(persona.hasOwnProperty("salario"))

function Piolin(nombre, color) {
  let animal = Object.create(ObjectoConstructor);
  animal.nombre = nombre;
  animal.color = color;
  return animal;
}

let ObjectoConstructor = {
  cantar: function () {
    return "Estoy cantando...";
  }
}

let pajarito = Piolin("piolin", "amarillo")
console.log(pajarito)
console.log(pajarito.cantar())


class Person {
  constructor(nombre, apellidos, edad, correo) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.correo = correo;
  }

  getCorreo() {
    return this.correo;
  }

  setCorreo(nuevocorreo) {
    this.correo = nuevocorreo;
  }
}

let jorge = new Person("jorge", "hernandez", "37", "jorge.hernandez@yahoo.com")
console.log(jorge);
jorge.setCorreo("nuevo@hotmail.com")
console.log(jorge.getCorreo())

class Empleado extends Person {
  constructor(nombre, apellidos, edad, correo, salario) {
    super(nombre, apellidos, edad, correo);
    this.salario = salario;
  }

  getSalario() {
    return this.salario;
  }
}

let juana = new Empleado("juana", "perez", 20, "correo@yahoo.com", 20000);
console.log(juana)
console.log(juana.getCorreo())
console.log(juana.getSalario())

function miPersona(nombre, apellidos, edad, correo) {
  let refpersona = Object.create(ConstructorPersona);
  refpersona.nombre = nombre;
  refpersona.apellidos = apellidos;
  refpersona.edad = edad;
  refpersona.correo = correo;
  return refpersona;
}

let ConstructorPersona = {
  getCorreo: function () {
    return this.correo;
  },
  setCorreo: function (nuevo) {
    this.correo = nuevo;
  }
}
let ana = miPersona("ana", "gonzalez", 28, "ana@tina.com")
console.log(ana)
ana.setCorreo("kiko@gmail.com")
console.log(ana.getCorreo())

// *---------------------------
function miEmpleado(nombre, apellidos, edad, correo, salario) {
  let per = miPersona(nombre, apellidos, edad, correo)
  per.salario = salario; Object.setPrototypeOf(per, ConstructorMiEmpleado)

  return per;
}

let ConstructorMiEmpleado = {
  getSalario() {
    return this.salario;
  }
}
console.log("------------------------");
Object.setPrototypeOf(ConstructorMiEmpleado, ConstructorPersona)
let juan = miEmpleado("juan", "hernandez", 45, "correo@yahoo.com", 5000)

console.log(juan.getCorreo())
console.log("Datos", juan.getSalario());














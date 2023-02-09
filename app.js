/*
function greet() {
  console.log("Hello World!");
}
greet();

//console.log(greet);

function logGreeting(fn) {
  fn(); //Invocamos
}
logGreeting(greet);
*/
let greetMe = () => {
  console.log("Hello from the function expression!");
};
greetMe();
//console.log(greetMe);

let saluda = (nombre, tratamiento) => {
  console.log("Hola" + " " + tratamiento + " " + nombre);
};
//invocamos
saluda("Miguel", "Sr");

let cuadrado = (numero) => {
  return numero * numero;
};
console.log(cuadrado(10));

let cuadradoArrow = (numero) => console.log(numero * numero);
cuadradoArrow(11);

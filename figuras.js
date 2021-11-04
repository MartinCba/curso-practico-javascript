//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm cada uno");

function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado(lado) {
  return lado * lado;
}
//console.log("El perimetro del cuadrado es de "
//+ perimetroCuadrado()
//+ " cm"
//);
//console.log("El área del cuadrado es de "
//+ areaCuadrado()
//+ " cm^2"
//);
console.groupEnd();

//Código del triángulo

console.group("Triángulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2
}
//console.log(
//  "Los lados del triángulo miden "
//  + ladoTriangulo1
//  + " cm, "
// + ladoTriangulo2
//  + " cm, "
//  + baseTriangulo
//  + " cm"
//);
//console.log("La altura del triángulo es de "
//+ alturaTriangulo
//+ " cm"
//);
//console.log("El perimetro del triángulo es de "
//+ perimetroTriangulo()
//+ " cm"
//);
//console.log("El area del triángulo es de "
//+ areaTriangulo()
//+ " cm")
console.groupEnd();

//Código del círculo

console.group("Círculos");

//const radio = 4;
//const diametro = radio * 2;
const PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

//console.log("El radio del círculo es de "
//+ radio
//+ " cm"
//);
//console.log("Pi tiene un valor de "
//+ PI
//);
//console.log("El diametro del círculo es de "
//+ diametro
//+ " cm"
//);
//console.log("El perimetro del círculo es de "
//+ perimetroCirculo()
//+ " cm"
//);
//console.log("El area del círculo es de "
//+ areaCirculo()
//+ " cm^2"
//);

console.groupEnd();
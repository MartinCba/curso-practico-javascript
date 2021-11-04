//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

//Código del triángulo

console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
  const perimetro = parseInt(lado1) + parseInt(lado2) + parseInt(base);
  return perimetro;
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

//Código del círculo

console.group("Círculos");

const PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const inputA = document.getElementById("inputTrianguloA");
  const valueA = inputA.value;
  const inputB = document.getElementById("inputTrianguloB");
  const valueB = inputB.value;
  const inputC = document.getElementById("inputTrianguloBase");
  const valueBase = inputC.value;
  const perimetro = perimetroTriangulo(valueA, valueB, valueBase);
  alert(perimetro);
}
function calcularAreaTriangulo() {
  const inputA = document.getElementById("inputTrianguloBase");
  const valueBase = inputA.value;
  const inputB = document.getElementById("inputTrianguloAltura");
  const valueAltura = inputB.value;
  const perimetro = areaTriangulo(valueBase, valueAltura);
  alert(perimetro);
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}
function calcularAreaCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;
  const area = areaCirculo(value);
  alert(area);
}

///////////////////////reto triangulo isósceles///////////////////////////////

function alturaTrianguloIsosceles(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 !== base && lado2 !== base) {
    const altura = Math.sqrt(lado1 **2 - (base/2)**2);
    return altura;
  } else {
    return "El triángulo isósceles tiene 2 lados iguales";
  }
}
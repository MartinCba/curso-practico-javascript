//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount(price, discount) {
  const inputPrecio = document.getElementById("inputPrecio");
  const precio = inputPrecio.value;
  const inputDescuento = document.getElementById("inputDescuento");
  const descuento = inputDescuento.value;
  const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
  const resultado = document.getElementById("resultado");
  return resultado.innerText = "El precio con descuento es $" + precioConDescuento;
}

/*console.log({
  precioOriginal,
  descuento,
  porcentajePrecioConDescuento,
  precioConDescuento,
});*/

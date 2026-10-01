// Tarea Clase 10 Modulo 2

const precioJabon = 1500;
const cantidadJabon = 2;
const subtotalJabon = precioJabon * cantidadJabon;
const precioJugos = 8500;
const cantidadJugos = 3;
const subtotalJugos= precioJugos * cantidadJugos;
const precioBebidas = 12000;
const cantidadBebidas = 1;
const subtotalBebidas = precioBebidas * cantidadBebidas;
const costoEnvio = 3500;
const totalCompra = (subtotalJabon + subtotalJugos + subtotalBebidas);
const descuento = 5000;

console.log ("****Subtotal Precio Jabon*****");
console.log ("$" + " " + subtotalJabon);

console.log ("****Subtotal Precio Jugos*****");
console.log ("$" +" "+ subtotalJugos);

console.log ("****Subtotal Precio Bebidas*****");
console.log ("$" +" " + subtotalBebidas);

console.log ("****TOTAL COMPRA*****");
console.log ("$" +" " + totalCompra);

console.log ("****TOTAL CON DESCUENTO****");
console.log ("$" + (totalCompra - descuento));

console.log ("****Precio con Envio****");
console.log ("El precio con envio es " + "$" + (totalCompra + costoEnvio));

const cantidadCuotas = 3;

console.log ("****Precio por cuotas X3****");
console.log ( "$" + (totalCompra / cantidadCuotas));


let numero = -5;

if (numero >= 0) {
  console.log("El número es positivo");
} else if (numero <=0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}

let edad = 22;
let tieneEntrada = true;

// debe ser de 18 o mas y tener entrada para ingresars

if (edad >=22 && tieneEntrada) {
  console.log("Puede ingresar");
} else {
  console.log("No puede ingresar");
}

let precio = 10000;
let tieneDescuento = true;

if (precio) {
  precio = precio * 0.8;
  console.log(precio);
}

let temperatura = 32;

if (temperatura <= 15){
    console.log("hace frio")
}else if (temperatura <= 24)
    console.log ("Temperatura Agradable")
else {
    console.log("hace Mucho calor")
}
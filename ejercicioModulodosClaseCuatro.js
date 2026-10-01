// Mostrar todos los múltiplos de 3 entre 1 y 100.
for(i =1; i <=100; i++)
    if (i % 3 === 0){
        console.log (i)
    }

// Mostrar todos los múltiplos de 7 entre 1 y 100.
for (e= 1; e <= 100; e++)
    if (e % 7 === 0){
        console.log (e)
    }
// Mostrar una cuenta regresiva desde 20 hasta 0.
for (f=20; f >= 0; f--)
        console.log (f)
     console.log("Despegue")

// Contar cuántos múltiplos de 5 existen entre 1 y 100.       
for (g=1; g<=100; g++)
    if (g % 5 ===0){
        console.log(g)
    } 

//Contar cuántos números entre 1 y 100 son mayores que 70.
for (j=1; j<=100; j++)
    if (j >=70 && j <=100){
        console.log(j)
    } 
//Calcular el promedio de los números del 1 al 10
let suma = 0;
for (k=1; k<=10; k++){
    suma += k;
}
let promedio = suma / 10;
console.log("El promedio de los números del 1 al 10 es: " + promedio);
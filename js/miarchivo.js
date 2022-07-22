
debugger

let numero = parseInt(prompt("Ingrese un numero a sumar"))
let otronumero = parseInt(prompt("Va a sumar con:"))

let continuar = confirm("Realizar la suma?")

while (continuar === true) {
  console.log("El resultado es: ", numero + otronumero);
  continuar = confirm("Desea hacer una nueva suma?");
   if (continuar == false) {
       break
   }
  numero = parseInt(prompt("Ingrese un numero a sumar"));
  otronumero = parseInt(prompt("Sumar con:"))

}






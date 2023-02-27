// 9. Escribe un programa que pida al usuario un número entero positivo(mediante la función prompt) y muestre por pantalla la cuenta hacia delante desde ese número hasta 20, utilizando saltos de línea como separación y si es superior a 20 que lo indique por pantalla.

document.write(`<strong>EJERCICIO 9</strong><br><br>`);

let numero = prompt("Introduce un número entero positivo y contaré hasta 20:");

if (numero < 0 || isNaN(numero)) {
  document.write(`${numero} no es un número válido.`);
} else if (numero <= 20) {
  while (numero <= 20) {
    document.write(numero + "<br>");
    numero++;
  }
} else {
  document.write("El número introducido es mayor que 20.");
}

document.write("<hr>")
// 8. Escribe un programa con una variable de tipo number (a) y un condicional que evalúe si el entero es par o impar utilizando el operador %.

document.write(`<strong>EJERCICIO 8</strong><br><br>`);

let a = prompt("Introduce un número y te diré si es par o impar");
if (a % 2 === 0) {
  document.write(a + " es un número par.");
} else {
  document.write(a + " es un número impar.");
}

document.write("<hr>")
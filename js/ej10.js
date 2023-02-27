// 10. Escribe un programa que devuelva si un string es palíndromo (se escribe igual hacia delante y hacia detrás). Ejemplo: "sometemos"

document.write(`<strong>EJERCICIO 10</strong><br><br>`);


let palindromo = "sometemos";
let inverso = "";

for (let i = palindromo.length - 1; i >= 0; i--) {
  inverso += palindromo.charAt(i);
}
if (palindromo == inverso) {
  document.write("La palabra " + palindromo + " es un palindromo");
} else {
  document.write("La palabra " + palindromo + " no es un palindromo");
}

document.write("<hr>")
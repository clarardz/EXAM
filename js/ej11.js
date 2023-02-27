// 11. Escribe un programa con un array que almacene los nombres de tres colores. A continuación, crea otro array vacío e inserta en él todos los elementos del primer arraymediante un for...of y el método push

document.write(`<strong>EJERCICIO 11</strong><br><br>`);


let colores = ["rosa", " lila", " azul"];
let colores2 = [];

for (let color of colores) {
  colores2.push(color);
}

document.write(colores2);

console.log(colores); 
console.log(colores2); 

document.write("<hr>")
// ---- ejercicio 6 ---- //

// ---- ejercicio 7 ---- //

function mostrarPrompt() {
   let mensaje = prompt("¿Como te llamas?");
   let mensajePrompt = document.getElementById("mensaje-prompt");
    mensajePrompt.innerHTML = "¡Hola " + mensaje + ", que tengas un buen día!";
    console.log("Hola soy" + " " + mensaje);
  }
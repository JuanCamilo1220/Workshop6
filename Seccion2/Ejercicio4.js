console.log(
  "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
);
try {
  console.log(funcionDeclarada());
} catch (error) {
  console.log("Error:", error.message);
}

console.log(
  "Intentando llamar a 'funcionExpresada' antes de su declaración:"
);
try {
  console.log(funcionExpresada());
} catch (error) {
  console.log("Error:", error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

// Declaración de una función expresada
const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());



// ¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
// La función declarada fue llamada con exito, mientras que la expresada no.
// ¿Cómo difieren los resultados entre la función declarada y la función expresada?
// La función declarada imprimió el mensaje esperado en ambos casos, mientras que la función expresada mostró un error la primera vez que fue llamada, y la segunda si mostró el mensaje esperado.
// ¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
// Indica que dependiendo de como se declaren las funciones, van a tener un hoisting global, o desde el momento que fueron creadas.

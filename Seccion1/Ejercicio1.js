alert("Responde las preguntas y justifica tu respuesta")

const RespuestaGlobalScope = prompt(`
// Global Scope\n
var globalVariable = "Soy una variable global.";\n\n

function testScope() {\n
  // Function Scope\n
  var functionVariable = "Soy una variable local.";\n\n

  if (true) {\n
    // Block Scope\n
    let blockVariable = "Soy una variable de bloque.";\n
    console.log("Dentro del bloque:", blockVariable);\n
  }\n\n

  console.log("Dentro de la función:", functionVariable);\
}\n\n

console.log("Fuera de la función:", globalVariable);\n
testScope();\n\n

¿Crees que es posible acceder a la variable globalVariable?`).toLowerCase();

const respuestaFunctionScope = prompt(`¿Crees que es posible acceder a la variable functionVariable ?`).toLowerCase();
const respuestaBlockScope = prompt(`¿Crees que es posible acceder a la variable blockVarable?`).toLowerCase();

if (RespuestaGlobalScope == "si por que"){
    alert("Estas en lo correcto, es posible acceder a la variable por que es una variable tipo 'var', la cual la hace una variable a la cual se puede acceder en cualquier momento.");
}else{
    alert("Estas equivocado, es posible acceder a la variable por que es una variable tipo 'var', la cual la hace una variable a la cual se puede acceder en cualquier momento.");
}
if (respuestaFunctionScope == "si por que"){
    alert("Estas en lo correcto, al igual que la anterior, es una variable tipo 'var', la cual la hace una variable a la cual se puede acceder en cualquier momento, además se mantiene dentro de la propia función.");
}else{
    alert("Esta equivocado, al igual que la anterior, es una variable tipo 'var', la cual la hace una variable a la cual se puede acceder en cualquier momento, además se mantiene dentro de la propia función.");
}
if (respuestaBlockScope == "si por que"){
    alert("Estas en lo correcto, es posible acceder a la variable dado que sigue siendo llamada después de ser creada.");
}else{
    alert("Estas equivocado, es posible acceder a la variable dado que sigue siendo llamada después de ser creada.")
}
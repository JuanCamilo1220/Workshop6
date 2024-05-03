alert(` Lee bien el siguente codigo, y predice si funcionará

// vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};
`);
const variable_a = prompt(`¿funcionará console.log("valor de a:", a).`);
const variable_b = prompt(`¿funcionará console.log("valor de b:", b).`);
const variable_c = prompt(`¿funcionará console.log("valor de c:", c).`);
const funcion_declarada = prompt(`¿funcionará console.log("Resultado de funcionExpresada:", funcionDeclarada()).`);
const funcion_expresada = prompt(`¿funcionará console.log("Resultado de funcionExpresada:", funcionExpresada()).`);


if (variable_a === "si"){
    alert("Correcto, la vairable a es una variable tipo 'var', lo que permite le permite ser llamada incluso antes de ser creada.")
}else{
    alert("Incorrecto, la vairable a es una variable tipo 'var', lo que permite le permite ser llamada incluso antes de ser creada.")
}
if (variable_b === "si" || variable_c === "si"){
    alert("Incorrecto, las variables b y c, son variables de tipo 'let' y 'const' respectivamente, este tipo de variables no pueden ser llamadas antes de ser creadas.")
}
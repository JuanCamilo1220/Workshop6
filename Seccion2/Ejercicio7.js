
alert(` Predice el funcionamiento del siguiente código:
console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");
`);

alert("Cada uno será una variable, tendras que enumerar 1,2,3,4 o 5. No repitas numeros.");

const inicioScript = prompt(`console.log("Inicio del script"); Este código se mostrará:`);

const primerSetTimeout = prompt(`setTimeout(() => {
    console.log("Primer setTimeout");
  }, 0); Este codigo se mostrará:`);

const segundoSetTimeout = prompt(`setTimeout(() => {
    console.log("Segundo setTimeout");
  }, 0); Este codigo se mostrará: `);

const promesa = prompt(`Promise.resolve("Promesa resuelta").then(console.log); Este código se mostrará:`)

const finScript = prompt(`console.log("Fin del script"); Este código se mostrará: `)

if (inicioScript === "1" && primerSetTimeout === "4" && segundoSetTimeout === "5" && promesa === "3" && finScript === "2"){
    alert("Felicidades, estas en lo correcto")
}else if (inicioScript !== "1" || primerSetTimeout !== "4" || segundoSetTimeout !== "5" || promesa !== "3" || finScript !== "2"){
    alert(`Estas equivocado, el orden en el que se ejecutan las tareas es de: tareas-microtareas-macrotareas,
         \nSiendo que el inicio y fin del script se ejecutan primero por no pertencer ni a microtareas o a macrotareas.
         \nLas promesas pertenecen a las microtareas, lo que significa que se ejecutan después de todas la tareas normales.
         \nLos setTimeouts pertenecen a las macrotareas, estos se ejecutan despues de que lo hagan las tareas normales y las microtareas.`)
};


alert(`El orden correcto será:

console.log("Inicio del script");

console.log("Fin del script");

Promise.resolve("Promesa resuelta").then(console.log);

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

`);
console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");
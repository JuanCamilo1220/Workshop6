// console.log("Inicio del script");

// // Macrotarea: setTimeout
// setTimeout(() => {
//   console.log("Macrotarea 1 second (setTimeout)");
// }, 1000);

// setTimeout(() => {
//   console.log("Macrotarea 0 seconds (setTimeout)");
// }, 0);

// // Microtarea: Promesa
// Promise.resolve()
//   .then(() => {
//     setTimeout(() => {
//       console.log("Macrotarea (setTimeout) inside Microtarea 1");
//       return "from micro 1";
//     }, 0);
//   })
//   .then((message) => {
//     console.log("Microtarea 2 (Promesa)");
//   });

// // Microtarea: Promesa
// Promise.resolve()
//   .then(() => {
//     console.log("Microtarea 3 (Promesa)");
//   })
//   .then(() => {
//     console.log("Microtarea 4 (Promesa)");
//   });

// console.log("Fin del script");

// ¿Qué tareas se consideran macrotareas y cuáles son microtareas?

// Los setTimeout se consideran macrotareas, a pesar de que se encuentren dentro de una microtarea.
// Por otra parte las promesas se consideran microtareas, y las promesas dentro de promesas tambien lo hacen.

// ¿Cómo se relacionan las macrotareas y microtareas con el event loop?

// El event loop es aquel que procesa las macrotareas y microtareas, procesando primero las microtareas para dejar las macrotareas al final.

// ¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?

// La macrotarea será llevada a la lista de macrotareas, una vez allí, actuara como cualquier otra macrotarea esperando su turno o, acorde cual sea su tiempo de llamada. 

// ¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?


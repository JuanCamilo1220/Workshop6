console.log("Mensaje 1: Inmediatamente")

setTimeout(() => {
  console.log("Mensaje 2: Con timeout de 0 segundos")
})

setTimeout(() => {
  console.log("Mensaje 3: Con timeout de 1 segundo")
}, 1000)

// El hecho de que el segundo mensaje a pesar de tener un timeout de 0 segundos, aún asi se demorase nos indica que el servidor lleva toda tarea con un timeout a las macrotareas, por lo que las acciones dentro de este apartadp tardaran mas en completarse debido a las microtareas.

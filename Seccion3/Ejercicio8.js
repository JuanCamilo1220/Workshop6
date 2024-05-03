function crearContador() {
    let valor = 0;
  
    function incrementar() {
      valor++;
      console.log("Valor actual:", valor);
    }
  
    function obtenerValor() {
      return valor;
    }
  
    return {
      incrementar,
      obtenerValor
    };
  }
  
  const contador = crearContador();
  
  let continuar = true;
  while (continuar) {
    const opcion = prompt("¿Desea incrementar el contador? (si/no)");
  
    if (opcion === "si") {
      contador.incrementar();
    } else if (opcion === "no") {
      continuar = false;
    } else {
      console.log("Opción inválida. Por favor, ingrese 'si' para incrementar o 'no' para salir.");
      alert("Opción inválida. Por favor, ingrese 'si' para incrementar o 'no' para salir.");
    }
  }
  
  console.log("Valor final del contador:", contador.obtenerValor());
  
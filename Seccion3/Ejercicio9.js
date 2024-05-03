function nuevoDatos(url) {
    return fetch(url)
        .then(respuesta => {
            if (!respuesta.ok) {
              throw new Error ('Datos no obtenidos')  
            }
            return respuesta.json();
        })
}
function mostrarDatos(datos) {
  console.log("Datos obtenidos")
  console.log(datos)
}
function ejercicio () {
  const segundos = Number(prompt("Ingresa el intervalo en segundos ."));
  if (isNaN(segundos) || segundos <= 0){
    console.error("Ingresa un número válido.");
    alert("Ingresa un número válido.");
    return;
  }

  const intervalo = segundos*1000;

  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve ()
    })
  }, intervalo)

  promesa.then(() => {
    return nuevoDatos('https://jsonplaceholder.typicode.com/posts');
  })
  .then(mostrarDatos)
  .catch(error => {
    console.error(`Error`, error.message);
    alert(`Ha ocurrido un error`, error.message)
  })
}    
ejercicio ();
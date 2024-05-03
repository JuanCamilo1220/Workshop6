function manejarAsincronia (promise, callback){
  callback = (() =>{
    console.log("¡Promesa cumplida y callback ejecutado!");
  })
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  }).then(() =>{
    callback();
  })
  
}
manejarAsincronia();

// Si la promesa tarda más tiempo en cumplirse, simplemente el callback tarda más en lanzar la respuesta

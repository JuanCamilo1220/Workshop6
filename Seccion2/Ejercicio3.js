function crearSumador (a) {
  return function (b) {
    return a + b;
  };
}

const sumarCinco = crearSumador(5);

console.log(sumarCinco(3))

const sumarCetre = crearSumador(13);

console.log(sumarCetre(20))
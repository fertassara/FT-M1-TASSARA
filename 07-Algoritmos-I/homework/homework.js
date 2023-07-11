'use strict'
// No cambies los nombres de las funciones.
function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  if (num === 1) {
    return [1];
  }

  var factores = [];
  
  for (var i = 2; i <= Math.sqrt(num); i++) {
    while (num % i === 0) {
      factores.push(i);
      num = num / i;
    }
  }
  
  if (num > 1) {
    factores.push(num);
  }
  
  return factores;
}

  
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var length = array.length;
  
  for (var i = 0; i < length - 1; i++) {
    for (var j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Intercambiar elementos si están en el orden incorrecto
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  
  return array;

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var length = array.length;

  for (var i = 1; i < length; i++) {
    var current = array[i];
    var j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;
  }

  return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var length = array.length;

  for (var i = 0; i < length - 1; i++) {
    var minIndex = i;

    for (var j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      var temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function(value) {
  const newNode = new Node(value);

  if (this.head === null) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
};

LinkedList.prototype.remove = function() {
  if (this.head === null) {
    return null;
  }

  let current = this.head;
  let previous = null;

  if (current.next === null) {
    this.head = null;
    return current.value;
  }

  while (current.next !== null) {
    previous = current;
    current = current.next;
  }

  previous.next = null;
  return current.value;
};

LinkedList.prototype.search = function(param) {
  if (this.head === null) {
    return null;
  }

  let current = this.head;

  if (typeof param === 'function') {
    while (current !== null) {
      if (param(current.value)) {
        return current.value;
      }
      current = current.next;
    }
  } else {
    while (current !== null) {
      if (current.value === param) {
        return current.value;
      }
      current = current.next;
    }
  }

  return null;
};

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log(list.search(3)); // Resultado: 3

const isEven = function(value) {
  return value % 2 === 0;
};

console.log(list.search(isEven)); // Resultado: 2

console.log(list.remove()); // Resultado: 3
console.log(list.remove()); // Resultado: 2
console.log(list.remove()); // Resultado: 1
console.log(list.remove()); // Resultado: null


/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable(numBuckets = 35) {
  this.numBuckets = numBuckets;
  this.buckets = new Array(numBuckets).fill(null).map(() => []);
}

HashTable.prototype.hash = function(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.numBuckets;
};

HashTable.prototype.set = function(key, value) {
  if (typeof key !== 'string') {
    throw new TypeError('La clave debe ser una cadena de caracteres (string).');
  }
  const index = this.hash(key);
  const bucket = this.buckets[index];

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      bucket[i][1] = value;
      return;
    }
  }

  bucket.push([key, value]);
};

HashTable.prototype.get = function(key) {
  if (typeof key !== 'string') {
    throw new TypeError('La clave debe ser una cadena de caracteres (string).');
  }
  const index = this.hash(key);
  const bucket = this.buckets[index];

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      return bucket[i][1];
    }
  }

  return undefined;
};

HashTable.prototype.hasKey = function(key) {
  if (typeof key !== 'string') {
    throw new TypeError('La clave debe ser una cadena de caracteres (string).');
  }
  const index = this.hash(key);
  const bucket = this.buckets[index];

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      return true;
    }
  }

  return false;
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};

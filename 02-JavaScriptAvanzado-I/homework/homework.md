# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

///declarar una variable con var permite el hoisting y tiene un alcance de función o global, mientras que asignar un valor directamente a una variable crea una variable global o local sin hoisting. Es recomendable utilizar let o const en lugar de var para una mejor gestión de las variables y evitar problemas de hoisting y alcance.

```javascript
x = 1;   
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);
   console.log(a);
   var f = function (a, b, c) {
      b = a;
      console.log(b);
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x);
```

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);
```

```javascript
var instructor = 'Tony';
console.log(instructor);
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);
   }
})();
console.log(instructor);
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);
   console.log(pm);
}
console.log(instructor);
console.log(pm);
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript

```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
// En el código dado, la variable a se declara dentro de la función test(), pero se imprime antes de que se le asigne un valor. Debido al hoisting, la declaración de la variable a se eleva hacia arriba, pero su asignación no. En cuanto al segundo console.log(foo()), la función foo() también se declara dentro de test(). Sin embargo, a diferencia de las variables, las funciones también se elevan con su definición completa. Por lo tanto, la función foo() ya está disponible en el momento de la llamada, y devuelve el valor 2.
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);
//debido al hoisting y al alcance de las variables declaradas con var, el valor de snack dentro de la función getFood() será undefined cuando no se cumpla la condición del bloque condicional.
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};


console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
///En la primera llamada console.log(obj.prop.getFullname()), se accede al método getFullname() dentro del objeto prop en el objeto obj. Al invocar este método utilizando obj.prop.getFullname(), la palabra clave this dentro de la función hace referencia al objeto en el contexto de la llamada, que en este caso es el objeto prop. Por lo tanto, this.fullname se refiere a la propiedad fullname dentro del objeto prop, que es "Aurelio De Rosa".

//En la segunda llamada console.log(test()), se asigna la función obj.prop.getFullname a la variable test. Al invocar test(), la función se ejecuta en el contexto global, y la palabra clave this hace referencia al objeto global (en este caso, window en un entorno de navegador). Como no hay una propiedad fullname en el objeto global, se busca en el alcance más externo y se encuentra la variable fullname con el valor "Juan Perez". Por lo tanto, se imprime "Juan Perez".
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();
//En resumen, el orden de impresión en la consola se ve afectado por el tiempo de espera especificado en los setTimeout. Los bloques de código se ejecutan en la pila de ejecución en el orden en que se agregaron a la cola de tareas, pero su tiempo de espera determina cuándo se moverán de la cola de tareas a la pila de ejecución para su ejecución real.
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.

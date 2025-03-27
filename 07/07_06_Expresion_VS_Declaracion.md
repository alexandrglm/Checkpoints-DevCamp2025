## 7.6: ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

Una expresión de función, o función expresada, es la que se puede asignar a cualquier tipo de objeto, incluso dentro de otroas funciones, sin usar una estructura típica de función.

Si bien una función declarada, típica, contiene los siguientes elementos:

- Se declara con la palabra clave `function`.

- Tiene un nombre único e inequívoco.

- Admite argumentos en sus paréntesis.

- Se puede invocar antes de ser declarada ( tiene alcance global, es "hoisted").

```js

var subtotal = 100
var iva = 21;

function sumaTotal(subtotal, iva) {
    total = subtotal + iva;
    return total
}

console.log(sumaTotal(subtotal, iva))  // 121
```

Una función expresada puede realizar las mismas funciones, con sus características propias.

- Se asigna a una variable.

- No tiene hoisting, es de alcance local, limitada al objeto sobre el que opera.

- Aunque sigue usando `function`, es una función anónima (Carece de nombre descriptivo).

- Admite argumentos de igual modo.

- No requiere ser invocada pues, evidentemente, se ejecuta automaticamente al procesar el código.

```js
// Ejemplo de función declarada

let subtotal = 100;
let iva = 21;

var total = function (subtotal, iva) {
    return subtotal + iva;
} 

console.log(total(subtotal, iva));   // 121
```

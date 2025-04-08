# 08-005:    ¿Qué hace el operador de extensión en JS?

El Operador de Extensión (`...`) , relacionado con la decosntrucción de variables, permite hacer algo similar a esta, pero con arrays, elementos de arrays o propiedades de objetos, en nuevos objetos con múltiples elementos (arrays) o propiedadesd de objetos.

Simplifica en gran medida tareas como:
* Combinar Arrays
* Copiar estructuras 
* Pasar múltiples argumentos a funciones

Y, otros tipos de manipulación de objetos.

La sintáxis típica es:
```js
(...objeto)
```

## Casos de Uso
### Combinar Arrays
Agregamos elementos de un array, a otro, sin anidamientos.
```js
const cestaFrutasUno = ['Pera', 'Manzana', 'Kiwi']
const cestaFrutasDos = [ 'Kiwi', 'Ciruela', 'Mango']

cestaFrutasUno.push(...cestaFrutasDos)


console.log(cestaFrutasUno);    
//['Pera', 'Manzana', 'Kiwi', 'Kiwi', 'Ciruela', 'Mango']
```
***
### Copia de Arrays
Es un método absolutamente útilísimo para crear copias de objetos múltiples, arrays, para trabajar respaldo de variables, para evitar tocar la variable original, etc.

```js
const originales = [10, 500, 252]
const copias = [...originales]

copias.pop()

console.log(copias);            // [10, 500]
console.log(originales);        // [10, 500, 252]
```
***
### Pasar Argumentos a Funciones

Los elemenentos de un array pueden pasarse como argumentos de función.
En estos casos, como vimos en el ejercicio de obtener una media, casi siempre será necesario el uso de `.reduce` para manejar todo los elementos del array.

```js
let numeros = [12, 121, 41, 32, 1000]

function suma(...numeros) {
    return numeros.reduce( (a, b) => a + b )
}
console.log(suma(...numeros));
```

Incluso podríamos manipular los valores del array para pasar UN sólo argumento en base a algún método contra dichos valores.
```js
function saludar(nombre, apellido)  {

    return `Hola, ${nombre} ${apellido} !`

}

const usuarioUno = ['Alexandr', 'Gomez'];

// Spread usado como argumento de función
console.log(saludar(...usuarioUno));
```
***
### Deconstruir Arrays
Con el Operador de Extensión, al igual que podemos combinar arrays, también podemos deconstruirlos, sacar objetos individuales, agruparlos, etc.
```js
const usuarioDos = {
    nombre: 'Alexnadr',
    apellido: 'Gomez',
    edad: '36'
}

const { nombre, ...restoDatos } = usuarioDos;

console.log(nombre);            // Alexandr
console.log(restoDatos);        // {apellido: 'Gomez', edad: '36'}
```
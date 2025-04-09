# 08-03:    ¿Qué es una función flecha?

Las funciones flecha (Arrow Functions) son una de las características de JS moderno.   

Facilitan una sintáxis de función más concisa, y manejan de manera diferente los contextos `this` respecto a la expresión de funciones normal.
***

## 1. Declaración de Funciones  / Expresión de Función tradicional (Function Declaration / Function Expression)

#### Declaración de función

* Las funciones típicas se definen con la palabra  `function` seguido del nombre, y los parámetros entre paréntesis.  
* Tienen su propio contexto `this`.
* Pueden ser nombradas, o anónimas.

#### Expresión de función
Las funciones también pueden ser asignadas a variables, anónimas (no nombradas).

```js
// Declaración de Función nombrada
function saludar(mensaje){
    
    return console.log(mensaje);

}

saludar('Hola, ¿qué tal?');


// Declaración de Función Anónima
const saludo = function(mensajeDos) { return console.log(mensajeDos) } 

saludo('Hey!');


// Contexto this para declaración en función expresada
const saludoConThis = {

    saludo: 'Hey, este es un contexto this',
    saludar: function() {
        return console.log(this.saludo);

    }
}

saludoConThis.saludar();
```
***
## 2. Funciones Flecha (Arrow Functions)  

### Uso y Sintáxis

Las funciones flecha, lo que hacen es, simplificar la sintáxis de las expresiones de función (No requiere usar `function` ni `return`).

* Son ideales para funciones cortas, embebidas, asignadas a otros objetos dentro de otras funciones, es decir, siempre se asignan a una variable o se ejecutan directamente.  

* También son funciones no nombradas.

* Tienen un manejo del contexto `this`mejorado, más intuitivo.  

```js
const saludar = () => {
    
    return 'Hola qué tal?`
}


saludar();
```
***
### Funciones Flecha con UN parámetro
* Cuando la Función flecha lleva un sólo parámetro, los paréntesis son opcionales.
```js
const saludarDos = mensaje => {
    
    return console.log(mensaje);

}


saludarDos('Hola,¿Qué tal?, Soy una función flecha con un parámetro')
```
### Funciones Flecha con VARIOS parámetros
* Cuando hay más de un parámetros, sí se requiere usar paréntesis.
```js
const saludarTres = (dirigido, mensajeDos) => {

    return `Hola, ${dirigido}, ${mensajeDos}`

}

saludarTres('Pepe', '¿Qué tal?')
```
***
### Manejo del contexto `this`en funciones flecha.
Una declaración o expresión de función tradicional creará su propio contexto  `this`, que dependerá del contexto de ejecución o contexto léxico (de donde forme parte dicha función que maneja contexto `this`) al que pertenezca.

A diferencia de las funciones tradicionales, el contexto `this` de las funciones flecha se hereda directamente del ámbito exterior al que pertencen (de las clases/constructores de los que provienen, etc).



```js
const perro = {

    nombre: 'Beltz',
    sonido: function() {

        // Funcion dentro de función que necesitará this
        function saludarPerro() {
            console.log( `Hey, ${this.nombre}` )  // This, aquí, NO es el objeto 'perro'
        }
        saludarPerro();

    }

}

perro.sonido()  // (window) en browser // "UNDEFINED" en Node! ¿Por qué?

```
#### ¿Por qué no funciona?

* `saludarPerro()` es una declaración de función típica, por lo que **su `this` está apuntando al objeto global, no al objeto `perro`.

Por motivos "históricos", JS clásico manejaba los posibles errores usando los métodos `bind`, `call` `apply`, etc.

En JS Moderno, usamos funciones flecha directamente para el correcto manejo.

#### Transformando a Función Flecha, con un correcto manejo de `this`

```js
const perro = {

    nombre: 'Beltz',
    sonido: function() {

        // Función Flecha, ahora, manejando el this local.
        const saludarPerro = () => {
            console.log( `Hey, ${this.nombre}` )  // This, aquí, SI refiere al  objeto 'perro'
        }
        saludarPerro();

    }

}

perro.sonido() 

```


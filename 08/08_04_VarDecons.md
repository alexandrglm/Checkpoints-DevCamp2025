# 08-04:    ¿Qué es la deconstrucción de variables?


La Deconsctrucción de Variables es una característica introducida desde ES6 que permite extraer los valores de arrays o propiedades de objetos y reasignarlos a nuevas variables individuales.

Es utilizado para simplificar operaciones comunes, como:

* Intercambiar valores entre variables
* Acceder a datos anidados de un array
* Trabajar con estructuras de Arrays complejas

Permite hacer estas funciones de una forma muy concisa, limpia  y mínima.

***
## Sintáxis de Deconstrucción de Variables 
Sintáxis típica:  
```js
[elementoUno, elementoDos, ...] = [elementoDos, elementoUno, ...]
```
***
## Casos de Uso
### Intercambio de Variables

```js
function roadRage() {

    let rightLane = "Chevy";
    let leftLane = "Honda";
    
    
    // Intercambio de Variables con Sintáxis de Deconstrucción de Variables
    [rightLane, leftLane] = [leftLane, rightLane ]


    // Devolvemos los valores iniciales para hacer lo mismno SIN deconstrucción
    [leftLane, rightLane] = [rightLane, leftLane]



    // Esto NO es la sintáxis de deconstrucción de variables
    // Simplemente asignado los valores a nuevas variables temporales
    let tempRightLanae = 'Chevy';
    let tempLeftLane = 'Honda';
    // Que, después, son reasignadas a las variables originales según necesario.
    rightLane = tempLeftLane;
    leftLane = tempRightLane;

        
    return (`That ${rightLane} and ${leftLane} won't pick a lane`)
}

roadRage();
```
### Extracción de datos en Arrays
```js

const sinestesiaMusical = ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si'];


// Nota la sintáxis que, en array de variables, no lleva comillas, no son String
const [ Rojo, Verde, Blanco, Azul, Amarillo, Naranja, Morado] = sinestesiaMusical

console.log(Rojo)           // Do
console.log(Verde)          // Re
console.log(Blanco)         // Mi>
...
```

Sin Deconstrucción de Variables, la forma en que conseguiríamos lo mismo sería bastante más tediosa:
```js
const sinestesiaMusical = ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si'];

const Rojo = sinestesiaMusical[0];
const Verde = sinestesiaMusical[1];
const Blanco = sinestesiaMusical[2];
...
```

### Extracción de Propiedades de Objetos
Como, por ejemplo, de propiedades de objetos a nuevos objetos.
```js
const cocheUno = { marca: 'Ford', modelo: 'Cabrio'};

const { marcaCocheUno, modeloCocheUno } = coche


console.log(marcaCocheUno);     // Ford
console.log(modeloCocheUno);    // Cabrio

```
***

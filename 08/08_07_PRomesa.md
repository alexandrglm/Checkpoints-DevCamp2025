# 08-07:    ¿Qué es una promesa?
# 08-08:    ¿Qué hace Asyns-Await por nosotros?
***
# Promesas
Una promesa, en JavaScript, es el objeto que conecta procesos de manera asíncrona, es decir, pudiendo postergar la respuesta de una función sin que la otra parte que la espera se detenga o bloquee el sistema. Este garantiza que, en un momento posterior, obtendrás un resultado, indistintamente del tiempo necesario para dicha tarea.

Es, algo así, como tener varios hilos de ejecución posibles.

Anterior a las promesas, en JavaScript clásico, también era posible manejar eventos asíncronos a través de callbacks, no sin problemas (de extensión de código, por ende, de errores en ejecución, o del propio mantenimiento/escalabilidad del código).

Un ejemplo sobre cómo trabajar eventos asíncronos en JavaScript clásico:
* Invocaciones constantes y anidadas
```js
funcionObienteDatos(() => {
    procesaDatos(() => {
        guardaDatos(() => {
            masFunciones(() => {
                yMuchasMasFunciones(() => {

                })
            })
        })
    })
})
```
* Por consecuencia, secuencias de promesas muy largas:
```js
funcionObtieneDatos();
    .then(procesaDatos);
    .then(guardaDatos);
    .then(masFunciones);
    .then(yMuchasMasFunciones)
```
 Esto era conocido como Infierno de Invocaciones (*callback hell*)

![Callback Hell, ejemplo](./08-08_IMG1.png)


Para mejorar esto, las promesas introdujeron :
-> Simplifición de las operaciones asíncronas con métodos cómo `try` - `catch`.

-> Código más asimilable, legible, anidando sus operaciones en bloques de operaciones en cadena.

-> Un mejor manejo de errores, evitando fallos que no son alertados, lo que mejora el tiempo de desarrollo, el mantenimiento, escalabilidad.

***
## Estados de una Promesa

Una promesa puede varios estados, siendo, principalmente, esto:

1. `Pending` - Su estado inicial antes recibir una respuesta.
2. `Fullfilled` - Aceptación, operación finalizada con éxito, se recibe el valor deseado.
3. `Rejected` - Rechazo, operación no ha sido exitosa, retorna un error.

![Estados de Promesas, Imagen cortesía de MDN](./08-08_IMG2.png)


***
## Definiendo una Promesa (constructor `Promise`)
### Sintáxis de una promesa y manejo de resultados
```js

/*
Constructo Promise:

Creamos una promesa, asignada a la constante nuevoToDo
La promesa recibe una función con dos parámetros:
1. Resolve, si todo sale OK
2. Reject, si existe error
*/

const nuevoToDo = new Promise((resolve, reject) => {
    
    /*
    Añadimos un temporizador, configurado a 2 segundos (2000ms)
    */
    setTimeout(() => {

        /*
        Hacemos una petición GET a la API de JsonPlaceHolder,
        le pedimos un recurso concreto (/todos/1)
        */
        fetch('https://jsonplaceholder.typicode.com/todos/1')

            // Este .then convierte la respuesta a lo que queremos (un JSON)
            .then(response => response.json())
            // La promesa, o se resuelve, o se rechaza por error
            .then(data => resolve(data))
            .catch(error => reject(error))
    }, 2000);
});

/*
La constante nuevoToDo, si es invocada, mostrará el registro de eventos
de la promesa, es decir, esta no es la forma en la que manejaremos
los datos recibidos
*/
console.log(nuevoToDo)

/*
A través de constructores .then y .cathc es como se manejarán los datos
o posibles errores.
*/

nuevoToDo
    .then((todo) => {
        console.log(todo);
        return todo;
    })
    .catch((error) => {
        console.log('Error al obtener el JSON: ', error);
    });
    

/* El resultado obtenido es, efectivamente, el JSON solicitado:

{userId: 1, id: 1, title: 'delectus aut autem', completed: false}
*/
```
***
### Casos de Uso
#### Llamadas a API's
```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(error => reject(error))

```

#### Operaciones en paralelo usando `Promise.all`
Las capacidades multi-hilo de `Promise.all` suponen un concepto muy interesante.
Con este, después de asignar distintas peticiones GET a distintos recursos, con un tiempo de ejecución distinto, agrupamos su petición `.then - .catch` en un solo bloque.


```js
/*
1.
*/
const nuevoToDo = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
    }, 2000);
});


/*
2. Creamos una segunda promesa con un timeout distinto.
*/
const nuevoToDos = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/2')
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
    }, 2000);
});

/*
3. Encapsulamos todas las promesas dispuestas a Promise.all
*/

Promise.all([nuevoToDo, nuevoToDos])
    .then(([toDo, toDos]) => {
        
        console.log('JSON de la Primera promesa: ', toDo );
        console.log('JSON de la Segunda promesa', toDos)

    })
    .catch((error) => {
        console.error('Error al obtener ambas promesas')
    }

)
```
***
# `async` / `await`

Las promesas son la base para `Async/Await`, y es lo que vamos desgranar ahora.

Async-Await es una sintáxis especial en JavaScript, ligada a eventos asíncronos y es, necesariamente, compatible con cualquier API basada en promesas.

Como se ha explicado antes, antes de Async-Await lo que había era un "infierno de invocaciones".
De este modo, el código asíncrono se hace realmente flexible, legible y mejor mantenido/escalable.

El manejo de errores mejora, y nos encontramos con `try:` y `catch:`, que harán nuestro uso de eventos asíncronos y manejo de errores realmente cómodo 

#### Promesas VS Async / Await
|                   | Async/Await             | Promesas (.then())               |
| ----------------- | ----------------------- | -------------------------------- |
| Legibilidad       | *Código lineal y claro* | *Cadenas de `.then()` anidadas*  |
| Manejo de errores | *Usa `try`/ `catch`*    | *Usa `.catch()`*                 |
| Depuración        | *Más intuitiva*         | *Más compleja en cadenas largas* |

***

### Sintáxis y uso básico

1. Declaración de función asíncrona con `async`
**Cualquier funcuión asíncrona debe marcarse con `async`**.
```js
async function funcion(){
    ...
}
```

2. Pausa hasta obtener resultado con`await`.
```js
async function funcion(){
    
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await respuesta.json()
    ....
}
```
***

## Casos de Uso
### Comunicando con una API

#### Una tarea
```js
async function getToDos() {
 
    const respuestaDos = fetch('https://jsonplaceholder.typicode.com/todos/');
    const toDos = await respuestaDos.then(res => res.json());
    console.log(toDos);
}
  
getToDos();
```

#### Varias tareas
```js
async function getToDos() {
    
    const respuesta = fetch('https://jsonplaceholder.typicode.com/todos/1');
    const toDo = await respuesta.then(res => res.json());
    console.log(toDo);

    const respuestaDos = fetch('https://jsonplaceholder.typicode.com/todos/2');
    const toDoDos = await respuestaDos.then(res => res.json());
    console.log(toDoDos);

    const respuestaTres = fetch('https://jsonplaceholder.typicode.com/todos/');
    const toDos = await respuestaTres.then(res => res.json());
    console.log(toDos);
}
  
getToDos();
```

#### Varias tareas con `Promise.all`
```js
async function getTodosEnParalelo() {
    
    const [todosUno, todosDos, todosTodos] = await Promise.all([

        fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/todos/2').then(res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/todos/').then(res => res.json())
    ]);

    console.log(todosUno);
    console.log(todosDos);
    console.log(todosTodos);

}

getTodosEnParalelo();
```

### Implementación de  `try` - `catch` para manejo de errores.
Usando el mismo ejemplo anterior:

```js
async function getTodosEnParalelo() {
    try {
    const [todosUno, todosDos, todosTodos] = await Promise.all([

        fetch('WEB INVALIDA').then(res => res.json()),
        fetch('WEB INVALIDA').then(res => res.json()),
        fetch('WEB INVALIDA').then(res => res.json())
    ]);

    console.log(todosUno);
    console.log(todosDos);
    console.log(todosTodos);


    } catch (error) {
        
        console.log(error);
    }
}

getTodosEnParalelo();
```

Como respuesta, a este error provocado con URI inválida, tenemos esta información en consola:
![Respuesta de catch error](./08-08_IMG3.png)

***
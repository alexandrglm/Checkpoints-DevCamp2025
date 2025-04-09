# 08-07:    ¿Qué es una promesa?

Una promesa, en JavaScript, es el objeto que conecta procesos de manera asíncrona, es decir, pudiendo postergar la respuesta de una función sin que la otra parte que la espera se detenga o bloquee el sistema. Este garantiza que, en un momento posterior, obtendrás un resultado, indistintamente del tiempo necesario para dicha tarea.

Es, algo así, a tener varios hilos de ejecución posibles.

Anterior a las promesas, en JavaScript clásico, también era posible manejar eventos asíncronos a través de callbacks, no sin problemas (de extensión de código, por ende, de errores en ejecución, o del propio mantenimiento/escalabilidad del código).

Para atajar esto, las promesas:
-> Simplifican las operaciones asíncronas con métodos cómo `try` - `catch`.
-> Hacen el código más asimilable, legible, anidando sus operaciones en bloques de operaciones en cadena.
-> Implementan un mejor manejo de errores (`excepction` -`e`), evitando fallos que no son alertados, lo que mejora el tiempo de desarrollo, el mantenimiento, escalabilidad.

***
## Estados de una Promesa

Una promesa puede tener tres estados:

1. `Pending` - Su estado inicial antes recibir una respuesta.
2. `Fullfilled` - Aceptación, operación finalizada con éxito, se recibe el valor deseado.
3. `Rejected` - Rechazo, operación no ha sido exitosa, retorna un error.

***
## Definiendo una Promesa (constructor `Promise`)
### Sintáxis de una promesa
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


*/

nuevoToDo
    .then((todo) => {
        console.log(todo);
        return todo;
    })
    .catch((error) => {
        console.log('Error al obtener el JSON: ', error);
    });
    

/* El resultado obtenido es, efectivamente, el JSON:

{userId: 1, id: 1, title: 'delectus aut autem', completed: false}
*/
```


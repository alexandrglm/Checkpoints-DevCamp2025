// class Coche{

//     // Objetos
//     // constructor + ( propiedades )
//     constructor(marca, modelo){

//         // Inicio de las propiedades
//         // this + .propiedad = propiedad
//         this.marca = marca;
//         this.modelo = modelo
//     }

//     // Métodos
//     // método() { propiedades }
//     acelerar() {

//         return `El coche ${this.marca} ${this.modelo} está acelerando`;

//     };
//     frenar() {
//         return `El coche ${this.marca} ${this.modelo} está frenando`;
//     }
// }
// // Creación del nuevo objeto en base a las propiedades establecidas en su clase
// const coche1 = new Coche( 'Ford', 'Cabrio' );

// console.log(coche1);

// console.log(coche1.acelerar());
// console.log(coche1.frenar());

// /////////////////////
// class SumaResta {

//     // Método Estático
//     static suma(a, b) {
//         return a + b;
//     }


//     // Método de Instancia
//     resta(a, b) {
//         return a - b;
//     }

// }

// // Invocar al Método Estático
// console.log(SumaResta.suma(10, 20));


// // Invocación del Método de Instancia
// const nuevaResta = new SumaResta();

// console.log(nuevaResta.resta(20, 10));


// //////////


// // Declaración de Función nombrada
// function saludar(mensaje){
    
//     return console.log(mensaje);

// }

// saludar('Hola, ¿qué tal?');


// // Declaración de Función Anónima
// const saludo = function(mensajeDos) { return console.log(mensajeDos) } 

// saludo('Hey!');


// // Contexto this para declaración de funciones
// const saludoConThis = {

//     saludo: 'Hey, este es un contexto this',
//     saludar: function() {
//         return console.log(this.saludo);

//     }
// }

// saludoConThis.saludar();

// //////////

// const saludar5 = mensaje => {
    
//     return console.log(mensaje);

// }


// saludar5('Hola,¿Qué tal?, Soy una función flecha con un parámetro')


// ///////

// const saludarTres = (dirigido, mensajeDos) => {

//     return console.log(`Hola, ${dirigido}, ${mensajeDos}`)

// }

// saludarTres('Pepe', '¿Qué tal?')



/*
rollo this clasico a this arrow
*/
/*
const perro = {

    nombre: 'Beltz',
    sonido: function() {

        // Funcion dentro de función que necesitará this
        function saludarPerro() {
            console.log( this.nombre )  // This, aquí, NO es el objeto 'perro'
        }
        saludarPerro();

    }

}

perro.sonido()  // UNDEFINED! Por qué?¿
*/
/*
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
*/
/*

const sinestesiaMusical = ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si'];


// Nota la sintáxis que, en array de variables, no lleva comillas, no son String
const [ Rojo, Verde, Blanco, Azul, Amarillo, Naranja, Morado] = sinestesiaMusical

console.log(Rojo)
console.log(Verde)
console.log(Blanco)
*/

/*
const cocheUno = { marca: 'Ford', modelo: 'Cabrio'};

const { marcaCocheUno, modeloCocheUno } = coche


console.log(marcaCocheUno);     // Ford
console.log(modeloCocheUno);    // Cabrio
*/
/*
const cestaFrutasUno = ['Pera', 'Manzana', 'Kiwi']
const cestaFrutasDos = [ 'Kiwi', 'Ciruela', 'Mango']

cestaFrutasUno.push(...cestaFrutasDos)


console.log(cestaFrutasUno);
*/

/*
const originales = [10, 500, 252]
const copias = [...originales]

copias.pop()

console.log(copias);
console.log(originales);
*/
/*
let numeros = [12, 121, 41, 32, 1000]

function suma(...numeros) {
    return numeros.reduce( (a, b) => a + b )
}


console.log(suma(...numeros));
*/

/*
function saludar(nombre, apellido)  {

    return `Hola, ${nombre} ${apellido} !`

}

const usuarioUno = ['Alexandr', 'Gomez'];

console.log(saludar(...usuarioUno));


const usuarioDos = {
    nombre: 'Alexnadr',
    apellido: 'Gomez',
    edad: '36'
}

const { nombre, ...restoDatos } = usuarioDos;

console.log(nombre);            // Alexandr
console.log(restoDatos);        // {apellido: 'Gomez', edad: '36'}
*/
 




// /*
// Constructo Promise:

// Creamos una promesa, asignada a la constante nuevoToDo
// La promesa recibe una función con dos parámetros:
// 1. Resolve, si todo sale OK
// 2. Reject, si existe error
// */

// const nuevoToDo = new Promise((resolve, reject) => {
    
//     /*
//     Añadimos un temporizador, configurado a 2 segundos (2000ms)
//     */
//     setTimeout(() => {

//         /*
//         Hacemos una petición GET a la API de JsonPlaceHolder,
//         le pedimos un recurso concreto (/todos/1)
//         */
//         fetch('https://jsonplaceholder.typicode.com/todos/1')

//             // Este .then convierte la respuesta a lo que queremos (un JSON)
//             .then(response => response.json())
//             // La promesa, o se resuelve, o se rechaza por error
//             .then(data => resolve(data))
//             .catch(error => reject(error))
//     }, 2000);
// });


// console.log(nuevoToDo)


// nuevoToDo
//     .then((todo) => {
//         console.log(todo);
//         return todo;
//     })
//     .catch((error) => {
//         console.log('Error al obtener el JSON: ', error);
//     });
    

// /*
// 1.
// */
// const nuevoToDo = new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then(response => response.json())
//             .then(data => resolve(data))
//             .catch(error => reject(error))
//     }, 2000);
// });


// /*
// 2. Creamos una segunda promesa con un timeout distinto.
// */
// const nuevoToDos = new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//         fetch('https://jsonplaceholder.typicode.com/todos/2')
//             .then(response => response.json())
//             .then(data => resolve(data))
//             .catch(error => reject(error))
//     }, 2000);
// });

// /*
// 3. Encapsulamos todas las promesas dispuestas a Promise.all
// */

// Promise.all([nuevoToDo, nuevoToDos])
//     .then(([toDo, toDos]) => {
        
//         console.log('JSON de la Primera promesa: ', toDo );
//         console.log('JSON de la Segunda promesa', toDos)

//     })
//     .catch((error) => {
//         console.error('Error al obtener ambas promesas')
//     }

// )




// async function getToDos() {
//     const respuesta = fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const toDo = await respuesta.then(res => res.json());
//     console.log(toDo);
  
//     const respuestaDos = fetch('https://jsonplaceholder.typicode.com/todos/');
//     const toDos = await respuestaDos.then(res => res.json());
//     console.log(toDos);
// }
  
// getToDos();
  

/*
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
*/

/*
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
*/


/*
# 08-03  ¿Qué tipo de bucles hay en JS?

* `for`
* `for...in`
* Método `forEach()`

* `while`
* `do ... while`

*/



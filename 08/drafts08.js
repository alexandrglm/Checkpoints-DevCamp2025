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


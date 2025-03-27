
// // // // // var infinito = 1 / 0
// // // // // console.log(infinito)


// // // // // var oper = 17 / 22
// // // // // console.log(oper)


// // // // // console.log(BigInt(12))


// // // // // console.log(Float64Array(new))



// // // // let dato = 'Tlf: 93-222-33-44';

// // // // console.log(dato.search(/\d{2}-\d{3}-\d{2}-\d{2}/));


// // // // let pais = 'Paraguay'
// // // // console.log(pais.slice(4)); 


// // // // /* #2




// // // // // var tiendaCerrada = false;

// // // // // Boolean(tiendaCerrada) = true;

// // // // // console.log(tiendaCerrada)


// // // // // let total = 20

// // // // // total -= '10'

// // // // // console.log(total)



// // // // // var uno = 3223;
// // // // // var dos = 234234;
// // // // // var tres = null;

// // // // // console.log(tres)

// // // // // var nulo;
// // // // // console.log(nulo)


// // // // // var mySym = Symbol('foo');

// // // // // console.log(mySym);



// // // // var passwd = Symbol('Las contraseñas las almacenamos en un símbolo')

// // // // var fichaUsuario = {
// // // //     [passwd] : '1234',
// // // //     usuario : 'user'
// // // // }


// // // // // Mostras las claves visibles globalmente del símbolo
// // // // console.log('Claves globalmente accesibles usando Object.keys():  ', Object.keys(fichaUsuario));

// // // // // Acceso a la contraseña
// // // // console.log('Acceso al valor "passwd": ', fichaUsuario[passwd]);

// // // // // Todas las propiedades del constructor Objeto()
// // // // console.log('Propiedades a nivel Suymbol: ', Object.getOwnPropertySymbols(fichaUsuario));
// // // // console.log('Una propiedad específica del símbolo (el usuario): ', Object.getOwnPropertyDescriptor(fichaUsuario, 'usuario'));
// // // // console.log('Todas las propiedades del símbolo: ', Object.getOwnPropertyDescriptors(fichaUsuario));
// // // // console.log('Propiedades enumerables y no enumerables: ', Object.getOwnPropertyNames(fichaUsuario));
// // // // console.log('Símbolos del objeto: ', Object.getOwnPropertySymbols(fichaUsuario));
// // // // console.log('Todas los Valor:Clave del objeto: ', Reflect.ownKeys(fichaUsuario));


// // // // */



// // // // // #3

// // // // // function sum(){

// // // // //     aaaa = 0.12;
// // // // //     bbbb = 0.02;
// // // // //     return aaaa + bbbb

// // // // // }
// // // // // console.log(sum());         // 0.13999999999999999


// // // let edad = 18 

// // // if (edad < 18) {
// // //     console.log('Eres menor de edad');
// // // } else if (edad === 18 && edad <= 21) {
// // //     console.log('Estás entre los 18 y 21 años');
// // // } else {
// // //     console.log('Eres mayor de 21 años')
// // // }



// // // let subtotal = 100;
// // // let iva = 21;

// // // var total = function (subtotal, iva) {
// // //     return subtotal + iva;
// // // } 

// // // console.log(total(subtotal, iva));



// // // let subtotal = 100
// // // let iva = 21;

// // // function sumaTotal(subtotal, iva) {
// // //     total = subtotal + iva;
// // //     return total
// // // }

// // // console.log(sumaTotal(subtotal, iva))


// // /* THIS */

// // // // En este contexto, this hace referencia a la variable local 'nombnre'

// // // var personaSaludo = {

// // //     nombre : 'Pepe',
// // //     saludar : function() {
// // //         console.log(`Hola, ${this.nombre}!`);
// // //     }
// // // }



// // console.log(this); // window

// // function prueba() {
// //   console.log(this);
// // }
// // prueba(); // window (o undefined en 'use strict')

// // const obj = {
// //   mensaje: "Hola!",
// //   mostrar: function() {
// //     console.log(this.mensaje);
// //   }
// // };

// // obj.mostrar(); // "Hola!"

// // const f = obj.mostrar;
// // f();    // Undefined

// // const fFija = obj.mostrar.bind(obj);
// // fFija(); // 'Hola', pue

// // "use strict";

// // function mostrarThis() {
// //     console.log(this);
// // }

// // mostrarThis();


// function Persona(nombre) {
//     this.nombre = nombre;
//   }
  
//   const usuario = new Persona("Carlos");

//   console.log(usuario.nombre);
  


// let presentacionConstruida = {
//     nombre: 'Alexandr',

//     saludar: function () {
        
//         let construccion = () => console.log(`Hola, soy ${this.nombre} !`);

//         construccion();
//         }
// };
// presentacionConstruida.saludar();


const usuario = {
    nombre :'Alexandr',
    saludar : function () {
        console.log(`Hola ${this.nombre}, bienvenido al sistema`);
    }
};
  
let saludo = usuario.saludar;

saludo(); 
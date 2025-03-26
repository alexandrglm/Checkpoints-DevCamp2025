
/* #2

// var tiendaCerrada = false;

// Boolean(tiendaCerrada) = true;

// console.log(tiendaCerrada)


// let total = 20

// total -= '10'

// console.log(total)



// var uno = 3223;
// var dos = 234234;
// var tres = null;

// console.log(tres)

// var nulo;
// console.log(nulo)


// var mySym = Symbol('foo');

// console.log(mySym);



var passwd = Symbol('Las contraseñas las almacenamos en un símbolo')

var fichaUsuario = {
    [passwd] : '1234',
    usuario : 'user'
}


// Mostras las claves visibles globalmente del símbolo
console.log('Claves globalmente accesibles usando Object.keys():  ', Object.keys(fichaUsuario));

// Acceso a la contraseña
console.log('Acceso al valor "passwd": ', fichaUsuario[passwd]);

// Todas las propiedades del constructor Objeto()
console.log('Propiedades a nivel Suymbol: ', Object.getOwnPropertySymbols(fichaUsuario));
console.log('Una propiedad específica del símbolo (el usuario): ', Object.getOwnPropertyDescriptor(fichaUsuario, 'usuario'));
console.log('Todas las propiedades del símbolo: ', Object.getOwnPropertyDescriptors(fichaUsuario));
console.log('Propiedades enumerables y no enumerables: ', Object.getOwnPropertyNames(fichaUsuario));
console.log('Símbolos del objeto: ', Object.getOwnPropertySymbols(fichaUsuario));
console.log('Todas los Valor:Clave del objeto: ', Reflect.ownKeys(fichaUsuario));


*/



// #3


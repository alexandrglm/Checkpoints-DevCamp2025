# 2. ¿Cuáles son algunos tipos de datos JS?

Un tipo de dato primitivo, incluído por defecto, en un lenguaje de programación, refiere al tipo de valor que un objeto puede contener, significar.

Todos los tipos de datos primitivios incluídos por defecto en JavaScript son:

- Booleanos
- Nulls
- Undefined
- String
- Numbers
  * Integers
  * Floats
  * Big Integers
- Symbols

De los tipos de datos primitivos podemos extraer sus análogos como constructores/objetos.
No se debe confundir ni mezclar la asignación a un objeto de un tipo de dato con sus constructores.



## Booleanos

Sólo contienen un tipo de valor, dos estados:

- Verdadero / 1
- Falso / 0
  
Si uan
### Sintáxis de Booleanos
```js
// Como tipo de dato
var tiendaCerrada = false;

// Como objeto
Boolean(tiendaCerrada) = True;
```


Son usados en comparaciones, comprobaciones, aplicación de condiciones.

```js
var tiendaCerrada = true;

cartel = tiendaCerrada == false ? 'Entre a conocer nuestras ofertas!' : 'Nuestro horario es de L a V, visítenos durante el mismo";
```



## Cadenas

Secuencias de caracteres, valores alfanuméricos.  
Se representan entrecomillados.

Aunque en algunas excepciones un valor cadena que representa valor numérico puede ser tratado como Número (Asignadores compuestos), las cadenas siempre son caracteres, tratados como tal.

```js
var cadena = 'Soy una cadena';

cadena = "Soy una cadena, da igual si uso comillas dobles \" o comillas simples ' ";

// Cadenas tratadas como el valor numérico que representan
var total = 20

total -= '10'   // El valor numérico 10 es restado del total aunque aparezca como cadena
```

## Números

Por defecto en versiones clásicas de JavaScript trabajamos con dos tipos de números:

- Enteros (Integers)

- Números de coma flotante (Floats)

Si bien los números de coma flotante pueden parecer una ayuda para trabajar con valores muy específicos gracias al uso de decimales, la realidad es que no existen en ningún otro lenguaje un tipo de dato numérico tan impreciso, impredecible, sesgado y fuera de norma como los Floats.

Por este motivo, para cálculos precisos que incluyen o pueden incluir decimales en cualquier orden de magnitud, se suele trabajar con los Grandes Integrales (Big Integers) a través de su librería BigInt.

Oucrre similar con otro tipos de númerales, como Consantes matemáticas, números imaginarios, cuyas librerías son de uso común cuando estos son requeridos. 

Estos no son tipos de datos numerales primitivos, incluídos por defecto, pero deben remarcarse.

Ahora, remarquemos dos tipos de datos más que, si bien son palabras reservadas, refiren a tipos de dato propios.

## `Null`
Es la ausencia intencional de valor alguno. Aunque palabra reservada en JavaScript, el valor de ausencia es un propio tipo de dato primitivo.

```js
var uno = 3223;
var dos = 234234;
var tres = null;

console.log(tres)   // null
```


## `Undefined`
Similar a 'null' pero indica que un objeto sí existe, sí fue declarado y queda pendiente de ser definido.
```js
var sinDefinir

console.log(sinDefinir)   // 'undefined', variable pendiente de asignar
```



Por último, y siendo algo que veremos más adelante a partir de las guías 'JS Moderno', nombraremos por el momento otro tipo de dato más de uso muy común:

## Símbolos

Introducido recientemente, desde la convención ECMAScript 6, los símbolos son un tipo de dato usado para crear propiedades de objetos únicas, inmutables.

```js
var miSimbolo = Symbol('Mi Propiedad');

console.log(mySym);
```
En esta variable hemos creado un Símbolo, con una descripción ('foo').  
La descripción es simplemente eso, una descripción. No es el valor del símbolo.

```js
var passwd = Symbol('Las contraseñas las almacenamos en un símbolo')

var fichaUsuario = {
    [passwd] : '1234',
    usuario : 'user'
}
```
 A partir de este ejemplo, en el que almacenamos la constraseña de un usuario a través de un símbolo, vamos a explicar los símbolos usando todas las propiedades del constructor.

 ```js


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

 ```


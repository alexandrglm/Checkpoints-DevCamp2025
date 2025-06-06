# 2. ¿Cuáles son algunos tipos de datos JS?

Un tipo de dato primitivo, incluído por defecto, en un lenguaje de programación, refiere al tipo de valor que un objeto puede contener, significar.

Todos los tipos de datos primitivios incluídos por defecto en JavaScript son:

- Booleanos
- String
- Numbers
  * Integers
  * Floats
  * Big Integers
- Nulls
- Symbols
- Undefined

De los tipos de datos primitivos podemos extraer sus análogos como constructores/objetos.
No se debe confundir ni mezclar la asignación a un objeto de un tipo de dato con sus constructores.

****

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

 ****

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

****

## Números

Por defecto en versiones clásicas de JavaScript trabajamos con dos tipos de números:

- Enteros (Integer)

- Números de coma flotante (Float)

- Grandes Enteros (BigInt)

Si bien los números de coma flotante pueden parecer una ayuda para trabajar con valores muy específicos gracias al uso de decimales, la realidad es que no existen en ningún otro lenguaje un tipo de dato numérico tan impreciso, impredecible, sesgado y fuera de norma como los Floats.

Por este motivo, para cálculos precisos que incluyen o pueden incluir decimales en cualquier orden de magnitud, se suele trabajar con los Grandes Integrales (Big Integers) a través de su librería BigInt.



```js
//    Entero (int)
var entero = 42;


// Coma flotante (float)
var flotante = 10.5;


// BigInt
var bigInt = 123456789012345678901234567890n;    // Sintáxis de BigInt, se diferncia de Enteros, al añadir 'n' al final del valor


// Notación exponencial directa
var exponencial = 5e3;  // 5 * 10³ = 5000



// Constructores y métodos numéricos

// Number() / BigInt()

Number('123123')      // 123123
Bigint(54)            // 54n

// .parseInt() / .parseFloat()
var int = 12.99
var float = 12

parseInt(int);        // El float pasa a ser un entero, 12
parseFloat(float);    // El entero pasa a ser un float, 12.0



// 
```




Oucrre similar con otro tipos de númerales, como consantes matemáticas, números imaginarios, cuyas librerías (Por ejemplo, Math) son de uso común cuando estos son requeridos. Estos no son tipos de datos numerales primitivos, incluídos por defecto, pero puede5n ser obtenidos e interpretados por JS sin requerir dichas librerías.



Aparte, JavaScript maneja algunos tipos de errores con operaciones numéricas de una forma peculiar.

```js
// Divisiones entre cero = Infinitos

var infinito = 1 / 0;
var negativoInfinito = -1 / 0;


// NaN, Not a Number, cuando una operación numérica es imposible que, por cierto, sigue siendo un tipo de dato numérico

var notaNumber = 'Hola' / 10    ; Na


```

***

## `Null`

Es la ausencia intencional de valor alguno. Aunque palabra reservada en JavaScript, el valor de ausencia es un propio tipo de dato primitivo.

```js
var uno = 3223;
var dos = 234234;
var tres = null;

console.log(tres)   // null
```

****

## `Undefined`

Similar a 'null' pero indica que un objeto sí existe, sí fue declarado y queda pendiente de ser definido.

```js
var sinDefinir

console.log(sinDefinir)   // 'undefined', variable pendiente de asignar
```

****

## Símbolos

Introducido recientemente, desde la convención ECMAScript 6, los símbolos son un tipo de dato usado para crear propiedades de objetos únicas, inmutables.

```js
var miSimbolo = Symbol('Mi Propiedad');

console.log(mySym);
```

En esta variable hemos creado un Símbolo, con una descripción ('foo').  
La descripción es simplemente eso, una descripción. No es el valor del símbolo.



Los símbolos son especialmente útiles cuando queremos definir **propiedades de objetos que no sean fácilmente accesibles o sobrescribibles**, ya que:

1. **No se pueden acceder directamente con métodos tradicionales** como `Object.keys()`.

2. **No son completamente privados**, pero sí **ocultos** a iteraciones normales.

3. **Son únicos** incluso si tienen la misma descripción.

4. **Ayudan a evitar colisión de nombres con objetos propios de otras librerías que puedan estar en uso.**



```js
var passwd = Symbol('Las contraseñas las almacenamos en un símbolo')

var fichaUsuario = {
    [passwd] : '1234',
    usuario : 'user'
}
```

 A partir de este ejemplo, en el que almacenamos la constraseña de un usuario a través de un símbolo, vamos a explicar los símbolos usando todas las propiedades del constructor para verificar la disponibilidad de los datos contenidos.



```js
// Mostras las claves visibles globalmente del símbolo
console.log('Claves globalmente accesibles usando Object.keys():  ', Object.keys(fichaUsuario));

// Acceso a la contraseña usando el símbolo
console.log('Acceso al valor "passwd": ', fichaUsuario[passwd]);

// Todas las propiedades del constructor Objeto()
console.log('Propiedades a nivel Suymbol: ', Object.getOwnPropertySymbols(fichaUsuario));
console.log('Una propiedad específica del símbolo (el usuario): ', Object.getOwnPropertyDescriptor(fichaUsuario, 'usuario'));
console.log('Todas las propiedades del símbolo: ', Object.getOwnPropertyDescriptors(fichaUsuario));
console.log('Propiedades enumerables y no enumerables: ', Object.getOwnPropertyNames(fichaUsuario));
console.log('Símbolos del objeto: ', Object.getOwnPropertySymbols(fichaUsuario));
console.log('Todas los Valor:Clave del objeto: ', Reflect.ownKeys(fichaUsuario));
```

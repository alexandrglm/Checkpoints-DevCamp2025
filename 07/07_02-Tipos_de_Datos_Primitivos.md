# 2. ¿Cuáles son algunos tipos de datos JS?

Un tipo de dato primitivo, incluído por defecto, en un lenguaje de programación, refiere al tipo de valor que un objeto puede contener, significar.

Todos los tipos de datos primitivios incluídos por defecto en JavaScript son:

- Booleanos
  Valores "Verdadero" o "Falso"
- Nulls
- Undefined
- String
- Numbers
  - Integers
  - Floats
  - Big Integers
- Symbols

## Booleanos

Sólo contienen un tipo de valor, dos estados:

- Verdadero / 1
  
- Falso / 0
  

Son usados en comparaciones, comprobaciones, aplicación de condiciones.
```js
var tiendaCerrada = true;

cartel = tiendaCerrada == false ? 'Entre a conocer nuestras ofertas!' : 'Nuestro horario es de L a V, visítenos durante el mismo";
```



## Cadenas

Secuencias de caracteres, valores alfanuméricos.  
Se representan entrecomillados.

Aunque en algunas excepciones un valor cadena que representa valor numérico puede ser tratado como Número (Asignadores compuestos), las cadenas siempre son caracteres, tratados como tal.

## Números

Por defecto en versiones clásicas de JavaScript trabajamos con dos tipos de números:

- Enteros (Integers)

- Números de coma flotante (Floats)

Si bien los números de coma flotante pueden parecer una ayuda para trabajar con valores muy específicos gracias al uso de decimales, la realidad es que no existen en ningún otro lenguaje un tipo de dato numérico tan impreciso, impredecible, sesgado y fuera de normal como los Floats.

Por este motivo, para cálculos precisos que incluyen o pueden incluir decimales en cualquier orden de magnitud, se suele trabajar con los Grandes Integrales (Big Integers) a través de su librería BigInt.

Oucrre similar con otro tipos de númerales, como Consantes matemáticas, números imaginarios, cuyas librerías son de uso común cuando estos son requeridos. 

Estos no son tipos de datos numerales primitivos, incluídos por defecto, pero deben remarcarse.

Ahora, remarquemos dos tipos de datos más que, si bien son palabras reservadas, refiren a tipos de dato propios.

## `Null`
Es la ausencia intencional de valor alguno. Aunque palabra reservada en JavaScript, el valor de ausencia es un propio tipo de dato primitivo.

## `Undefined`
Similar a 'null' pero indica que un objeto sí existe, sí fue declarado y queda pendiente de ser definido.


Por último, y siendo algo que veremos más adelante a partir de las guías 'JS Moderno', nombraremos por el momento otro tipo de dato más de uso muy común:

## Símbolos

Introducido recientemente, desde la convención ECMAScript 6, los símbolos son un tipo de dato usado para crear propiedades de objetos únicas, inmutables.

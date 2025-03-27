## 7.3:    ¿Cuáles son las tres funciones de String en JS?

Si bien se remarcan tres funciones como "las funciones más habituales" para manejo de cadenas, siendo estas:

1. **length**: Propiedad que devuelve la longitud de la cadena. No es un método típico en tanto que no necesita usar (paréntesis)
   
   ```js
   let texto = 'Hola';
   
   console.log(texto.length);         // 4
   ```

2. **.toUpperCase()**: Convierte la cadena a mayúsculas
   
   ```js
   let fraseDos = 'hola mundo';
   
   console.log(fraseDos.toUpperCase());     // 'HOLA MUNDO'
   ```

3. **.toLowerCase()**: Extrae una porción de la cadena
   
   ```js
   let textoTres = 'HOLA!!!!!!!';
   
   console.log(grito.toLowerCase());             // 'hola!!!!!!!'
   ```

Existen una multitud de funciones que también son frecuentemente necesarias:

#### Acceso a nivel de carácter - .charAt(índice)

```js
let palabra = 'Casa';

console.log(palabra.charAt(2));             // 's'
```

****

#### Concatenado de Cadenas - .concat()

```js
let str1 = 'Hola'
let str2 = 'Mundo';


console.log(str1.concat(" ", str2));        // 'Hola Mundo'
```

****

#### Métodos de búsqueda en cadenas:

##### .includes()

```js
let textoCuatro = 'Otra cadena más';

console.log(textoCuatro.includes('mas'));     // true
```

##### .startsWith()

```js
let url = 'https://google.com';

console.log(url.startsWith("https"));         // true
```



##### .endsWith()

```js
let archivo = 'image.png';

console.log(archivo.endsWith('jpg'));         // false
```

##### .search( REGEX )

```js
let dato = 'Tlf: 93-222-33-44';

console.log(dato.search(/\d{2}-\d{3}-\d{2}-\d{2}/));  // 5 (posici)
```

##### .indexOf( índice )

```js
let oracion = 'El perro no me deja descansar';
console.log(oracion.indexOf('perro'));         // 3
```



##### .lastIndexOf( índice )

```js
let repeticion = 'hola hola';
console.log(repeticion.lastIndexOf('hola')); // 5
```

***

#### Repetición - .repeat()

```js
let risa = 'Kar';

console.log(risa.repeat(3));         // 'KarKarKar'
```

****

#### Manipulación de cadenas

##### .slice( inicio, fin)

```js
let pais = 'Paraguay'

console.log(pais.slice(4));         // "Arge"
```



##### .trim() - .trimStart() - .trimEnd()

```js
let espacios = '   Texto    ';

console.log(espacios.trim());          // 'texto'
console.log(espacios.trimStart());     // 'texto    '
console.log(espacios.trimEnd());       // '   texto'
```



****

Y, por supuesto, todos los métodos pueden encadenarse unos con otros para obtener la cadena o porción de cadena necesaria.

# Module 06 - 113:     DOM Fundamentals

## `window.` VS `document.` diferences



### 1. ¿Cuál es la diferencia principal entre `window` y `document`?

* **Window** -> Representa la ventana completa / pestaña del navegador. Sus características, atríbutos. Es el objeto global.


* **Document** -> Representa el html cargado, y todos sus elementos (DOM). Es parte de window, permitiento manipular elementos.




### 2. ¿Cómo se relacionan jerárquicamente `window` y `document`?

Window es el contexto global, del que desprenden todos los elementos:

- Document
- Console
- Location (url bar)
- History (historial de sesion)
- Navigator

graph TD
    window --> document
    window --> console
    window --> location
    window --> history
    window --> navigator


Document es una de las propiedades de Window.

### 3. ¿Qué propiedades son específicas del objeto `window`?

- window.alert()
- window.innerWidth / .innerHeight
- window.location
- window.history
- window.setTimeout() 
- window.localStorage

Métodos:  
 window.open() - window.close() - window.scrollTo()

Propiedades:  
  window.screen - window.parent (para iframes) - window.devicePixelRatio - ...



### 4. ¿Para qué se usa `window.localStorage`?

Almacena datos persistentes, con un límite de ~5MB por dominio.

```js
localStorage.setItem('theme', 'dark')

const theme = localStorage.getItem('theme')

```



### 5. ¿Cuál es la diferencia entre `window.location` y `document.URL`?

* `document.URL` sólo contiene la cadena de URL completa.

* `window.location` -> Es el objeto, contiene partes de la URL como:
                            - href
                            - protocol
                            - host

  Estos permiten ser modificados.





### 6. ¿Cuándo se debe usar `document.createElement()`?

Cuando queramos crear elementos dinámicamente **antes** de ser insertados en el DOM.

```js
const div = document.createElement('div')
div.textContent = 'Hola!'

document.body.appendChild(div)

```


### 7. ¿Cómo se accede al ancho de la ventana del navegador?

Como es un elemento de window, usaremos window.innerWidth.

Para rizar el rizo, también podríamos acceder al ancho externo de la ventana (incluye las barras, herramientas, etc) con `window.outerWidth`.

También, a través de document, podríamos trabajar ese dato con `document.documentElement.clientWidth` (No incluye barras, scroll bars, etc).



### 8. ¿Qué consideraciones hay que tener con los iframes?

* Iframe puede acceder al DOM **SOLO SI PERTENECEN AL MISMO DOMINIO**
```js
window.parent   // Acceso a lo que contiene el iframe
window.top      // Ventana superior
```
* *Same-Origin policy* restrictva puede bloquear scripts.


### 9. ¿Por qué las operaciones de `window` son generalmente más rápidas que las del DOM?

Porque son atributos estáticos, no sujetos a manipulación de clases,de estilos. etc.

* Las operaciones **window** operan en memoria
* Las operaciones DOM requieren recálculos, recarga de elementos, etc.

### 10. ¿Cuándo es recomendable usar el prefijo `window.` explícitamente?

Aunque una mejor práctica sería evitar nombres de objetos como keywords o palabras usuales y JS, de hecho, debería impedirlas, usaremos window como prefijo de manera explítica:

* En código modular o librerías, para evitar condusiones
* En contextos ambiguos -> Cuando hay variables con el mimso nombre

Ejemplos:
```js
const document = 'Esto dará problemas!'

window.document.querySelector( ... ) // Usamos window explícitamente
```


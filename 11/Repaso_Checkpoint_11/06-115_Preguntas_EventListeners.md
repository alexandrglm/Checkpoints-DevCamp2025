# Module 06 - 115:     DOM Fundamentals

## Event Listeners

### 0. ¿Qué es un "escuchador de eventos"?

Es una función que espera a que una acción concreta (Un click, hacer scroll, enviar un formulario, etc) ocurra en el DOM, para ejecutar una acción o comportamiendo determinado en respuesta.

Es la base de la interactividad en la web.


### 1.   ¿Cuáles son las principales categorías de eventos en JavaScript?

Son varias las categorías de eventos:

1. Eventos de Ratón / Touch
    - `click`, `dbclick`, `contextmenu`
    - `mouseenter`, `mouseleave`, `mouseover`, `mouseout`, `mousein`, `mouseup`
    - `touchstart`, `touchend`, `touchcancel`, `touchmove`

2. Eventos de Teclado
    - `keydown`, `keyup`, (para cualquier tecla)
    - `keypress` (para teclas de símbolos, método obsoleto desde ES6)

3. Eventos de Formulario
    - `input` (cambios en el input - textarea del formulario )
    - `invalid` (Validación de input errónea)
    - `submit`, `change`, `focus`, `blur`

4. Eventos del DOM / Ventana:
    - `DOMContentLoaded` - HTML cargado
    - `beforeunload`- Previo a cerrar la ventana
    - `resize`, `load`, `scroll`


### 2.  ¿Qué información proporciona el objeto `event`?

Dependiendo del tipo de evento usado/esperado, el objeto event puede tener distintas propiedades que nos aportan (aportan al código) el estado/resultado/información de dicha acción.

Algunas de estas propiedades son:

###### Usados para delegación de eventos
* `currentTarget` ->    Elemento que activa el evento, **con el listener**.
* `target`      ->      Elemento que activa el evento, sin el listener.

###### Usado para 
* `stopPropagation()` -> Detener la propagación a otros elementos.
* `isTrusted`   ->      Retorna bool, indica si el evento lo genero interacción humana (true) o fue activado por el código (false)

###### Usados para todo
* `type`        ->      Tipo de evento (click, keydown, resize, ...)
* `clientX/clientY` ->  Coordenadas del ratón
* `keyCode`     ->      Numeración de la tecla pulsada según lista de keyCodes
* `preventDefault()` -> Detiene el comportamiendo por defecto del navegador (para modificar alguna acción)


### 3.  ¿Cómo se elimina un event listener?

Es una mejor práctica eliminar los event listener una vez ya han sido utilizados o no se necesitan.
**Cabe recordar que un evento procedente de una función anónima NO puede eliminarse**

Ejemplo:  

```js
const elBoton = document.querySelector('#boton')


function manejarClick() {
    console.log('[DEBUG] -> User hizo click')
}

// Añadir listener/evento:
elBoton.addEventListener('click', manejarClick);

// Eliminar Listener/evento:
elBoton.removeEventListener('click', manejarClick)

```



### 4.  ¿Qué es la delegación de eventos y cuándo es útil?

La delegación de eventos supone escuchar eventos de un elemento padre para manejar los sub-eventos de aquello que contiene.

Un ejemplo podría ser las listas `<ol> / <ul> ` como elementos padre, y los propios listados,  `<li>`como elementos hijos.

##### **La delegación de eventos es muy útil en casos en que se carga de manera dinámica nuevos elementos en el DOM**.

Además, mejora el rendimiento ya que estar pendiente de un śolo evento padre consume menos recursos que estar pendiente de todos los eventos de cada elemento hijo.

Un ejemplo de delegación de eventos:

```js
const laLista = document.querySelector('#laLista')

laLista.addEventListener('click', (e) => {

    if ( e.target.tagName === 'LI' ) {

        console.log('[DEBUG] -> Se hizo click en la lista:', e.target.textContent)
    }

} )
```


### 5.  ¿Cuál es la diferencia entre `keydown` y `keypress`?

*   `keyPress` es el disparador, **obsoleto**, para teclas alfanuméricas. Se sustituye con keyDown / keyUp respecto a los keyCodes.

* `keyDown` se dispara al pulsar cualquier tecla (Cualquiera. Incluye teclas ctrl, alt, etc.)

**Para detectar pulsación de teclas y asignar un evento, usamos `keyDown` + `event.key`.


### 6.  ¿Cómo se puede prevenir el comportamiento predeterminado de un evento?

Usando la propiedad `preventDefault()`.

Ejemplo:  

```js
const elLink = document.querySelector('a')

elLink.addEventListener('click', (e) => {

    e.preventDefault();

})

// Con esto, hemos prevenido que dicho enlace, en ese momento, sea clickable.
```


### 7.  ¿Qué son los eventos personalizados y cómo se crean?

Son cualquier evento creado por el desarrollador, es decir, que no comportamientos predefinidos del navegador.


### 8.  ¿Cuáles son las mejores prácticas para el manejo de memoria con event listeners?
* Desactivar/Eliminar listeners una vez usado o cuando ya no se necesitan, sobre todo cuando existen elementos que dejan de existir en el DOM. (modals que se destruyen)

* El uso de `{ once: true }` previene que un evento se ejecute más de una vez,

* Evitar la anidación de listeners cuando posible. (memory leaks, sobrecarga de sistema/recursos, etc ...)



### 9.  ¿Qué significa la opción `{ once: true }` en addEventListener?

Puede ser una manera de desactivar eventos **una vez ha sido utilizado** ya que, dicha opción, ajusta la acción para ser ejetuada una sola vez.

Ejemplo:

```js
const elBoton = document.querySelector('#btn')

elBoton.addEventListener('click', () => {

    console.log('[DEBUG] -> Se registra sólo el primer click del user' );


}, { once: true } });
```


### 10. ¿Cómo se puede mejorar el rendimiento al manejar eventos que se disparan frecuentemente?

* Eliminando listeners una vez no son necesarios.
* Haciéndolos menos "generales", más "específicos" a una acción muy concreta.
* Pre-determinando un numero de veces para ser ejecutados y después eliminados.

###### Avanzadas

* **Debouncing**
El debounce significa retardar la ejecución de la función a la que referimos hasta que haya pasado un tiempo determinado sin que hayan ocurrido nuevos eventos.

Cada vez que ocurre el evento, se reinicia un temporizador. La función sólo ocurre cuando no ham habido nuevos eventos durante el tiempo contado.

Es súper útil para evitar accesos a API por cada tecla pulsada en un input (para preparar la data antes de ser usada sin llamar constantemente a una acción mientra se prepara).
También para ajustes del layout (resize).

Ejemplo:

```js
const busquedaTeclo = document.querySelector('.elInput')
let contador = 0;

busquedaTecleo.addEventListener('input', () => {

    clearTimeout(contador);

    contador = setTimeout( () => {

        console.log('[DEBUG] -> Input a buscar:', busquedaTecleo.value);
    
    }, 300 ) // Aquí, aquí estamos estableciendo el tiempo (en ms)

})

```



* **Throttling**
Asignar una "ventana de tiempo" para dicho evento, limitando la ejecución de la respuesta a un periodo de tiempo determinado.
De este modo, se evita que una función en respuesta se ejecute más veces de las necesarias.

Muy útil en eventos de `scroll`, de mouse, etc. (Por ejemplo, en aplicaciones que requieren controles de teclado, táctiles)

Ejemplo:  

```js
let ultimaVez = 0;

window.addEventListener('scroll', () =>{

    const ahora = Date.now();

    // Si cada 100ms o más se ha ejecutado la acción, se loguea
    if ( ahora - ultimaVez >= 100  ) {

        console.log('[DEBUG] -> Scroll: ', window.scrollY);
        ultimaVez = ahora;

    }

})
```

Ejemplo básico, sin uso de Date, típico en JS:
```js

let puedeLanzarse;

window.addEventListener('scroll', () => {

    if ( puedeLanzarse ) {

        console.log('[DEBUG] -> Scroll: ', window.scrollY);

        puedeLanzarse = false;

        setTimeout( () => {

            puedeLanzarse = true;
        }, 100 );
    }

})


```

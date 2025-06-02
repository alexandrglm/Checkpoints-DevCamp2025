# Module 06 - 116:     DOM Fundamentals

## inline onClick VS AddEventListener



### 1.  ¿Cuáles son las principales diferencias entre onclick inline y addEventListener?


El manejo de eventos puede hacerse desde dos enfoques:

* Manejadores HTML:
    -   Basados en atributos HTML (onclick, onkeydown, etc)
    -   Mezclan HTML y JS
    -   Se limita a un manejador por evento
    ```html
    <button onclick="accionDelClick()">Click aqui</button>
    ```
    ```js
    function accionDelClick() {

        console.log('[DEBUG] -> Se loguea el click')
    }
    ```

* Event Listeners del DOM -> 
    -   Separa HTML (estructura) del comportamiento (en código).
    -   Más flexible, permite múltiples manejadores para un evento.
    -   Código más escalable, mantenible.
    ```html
    <button class="elBoton">Click aqui</button>
    ```
    ```js
    document.getElementsByClassName('elBoton').addEventListener('click', function () {

        console.log('[DEBUG] -> Se loguea el click')

    })
    ```




### 2.   ¿Por qué addEventListener es generalmente preferido en aplicaciones de producción?

Con inlines podemos prototipar de manera rápida mientras nos encontramos en desarrollo, haciendo las modificaciones necesarias de manera rápida.

Una vez ajustado todo, para producción, es más conveniente estructurar los eventos desde un enfoque addEventListener.

El código resulta más limpio; toda la parte de código se enfoca en una sola parte, en vez de estar incrustada entre el HTML.

Al estar todo centralizado, mejoramos la escalabilidad/mantenimiento del código.

Además, ganamos acceso a las propiedades del evento (preventDefault()).


### 3.   ¿Cómo se eliminan los event listeners añadidos con addEventListener?

Con la función removeEventListener() en el momento-lugar adecuados.

Ejemplo 1 - Removiendo explícitamente:
```js
const elBoton = document.querySelector('.elBoton')

function manejoClick() {

    console.log('[DEBUG] -> Se hizo click')

}

elBoton.addEventListener('click', manejoClick)   

elBoton.removeEventListener('click', manejoClick() )


```

Ejemplo 2 - Con temporizador:
```js
const elBoton = document.querySelector('.elBoton')
let timeout;

elBoton.addEventListener('click', () => {

    console.log('[DEBUG] -> Se hizo click')

    if ( timeout ) {

        clearTimeout(timeout)
    }

    timeout = setTimeout( () => {

        console.log('[DEBUG] -> Han pasado 5 segundos desde el último click')

    }, 5000)

})
```


También podemos quitar un listener solicitando que este se ejecute una sola vez:

```js
const elBoton = document.querySelector('.elBoton')

function manejoClick() {

    elBoton.addEventListener('click', () => {
        
        console.log('[DEBUG] -> Se hizo click')

    }, { once : true })
}

```


### 4.   ¿Qué ventajas tiene addEventListener para múltiples manejadores de eventos?


Con múltiples manejadores podemos ejecutar distintas acciones sobre un mismo evento, sin que estos interfieran entre sí

```js
elBoton.addEventListener('click', guardarDatos());
// ...
elBoton.addEventListener('click', actualizarWenb());
```

Además, ahorramos recursos. Los accesos al DOM, en general, consumen muchos recursos. Como buena práctica, buscamos minimizar cualquier acceso/búsqueda del DOM.

Un ejemplo de un sólo addEventListener para múltiples manejadores de eventos sería usar delegación de Eventos, actuando sobre un elemento padre que, automaticamente, manipulan sobre los elementos hijos.


### 5.  ¿Cuándo podría ser apropiado usar onclick inline?

Como se ha especificado antes, en prototipado de funciones, desarrollo.

También para proyectos simples, webs estáticas, que no requieran scripts complejos.


### 6.   ¿Qué es la delegación de eventos y cómo se relaciona con addEventListener?

Signfica manipular varios elementos (hijos) a través de su elemento padre.

Usando delegación de eventos optimizamos recursos ya que los accesos/manipulación del DOM se minimizan.
Podemos usar un event listener para el elemento padre, que ya aplicaría a todos sus elementos hijos, en vez de un event listener por elemento hijo.


```js
document.getElementsByClassName('laLista').addEventListener('click', (e) => {

    if ( e.target.classList.contains('item') ) {

        console.log('[DEBUG] -> Se hizo click en el item: ', e.target.dataset.id)

    } 

})
```

### 6.  ¿Cómo afecta la separación de responsabilidades a la mantenibilidad del código?

La separación de responsabilidades es un enfoque tipo "Cada parte se encarga de una cosa".

Esta visión modular de programación favorece la escalabilidad y mantenimiento del código. Un error puede ser muy fácilmente depurable y corregible si tenemos "modularizada" cada parte del código. Al saber donde se encuentra dicho error, en qué función, podemos aplicar medidas.

Esto también es aplicable a la escalabilidad. En el propio desarrollo, usar este enfoque supone ir dejando "puertas abiertas" a futuras nuevas funciones o ampliaciones de estas.



### 8.    ¿Qué consideraciones de rendimiento hay entre ambos enfoques?

* **onclick**:
    - Ligeramente más rápido en rendimiento
    - En detrimento de la escalabilidad / suciedad de scope

* **addEventListener**:
    - Aunque sea ligeramente más lento (en torno a un 5%), es crucial para el mantenimiento/escalabilidad.


### 9.   ¿Cómo se manejan los elementos dinámicos con cada enfoque?

Usando delegación de eventos:

```js
document.addEventListener('click', (e) => {

     if ( e.target.matches('.boton-dinamico')) {

        console.log['[DEBUG] -> El botón pulsado es dinámico']
    }

})
```


### 10.  ¿Qué papel juegan las fases de eventos (captura/burbujeo) en esta comparación?

pending.

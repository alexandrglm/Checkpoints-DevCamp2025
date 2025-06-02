

1. ### ¿Cuál es la diferencia entre `classList.add()` y `className`?

ClassList y ClassName son métodos distintos para manipular class'es dentro del DOM.


Con **classList*** manipulamos la propiedad de un objeto DOM concreto, a través de los métodos (como .add() ). Es idoneo para clases concretas, individuales.



Con **className** modificamos la cadena completa de classes, sobreescribiendo todo el valor.

* `classList` -> Modificamos una class concreta

* `className` -> Modificamos todas las classes que puedan encajar







`.add()` es uno de los métodos explícitos, para agregar una clase al elemento al que hace referencia, como existen otros métodos para editarlas, tal como:


* `.remove()`

* `.replace()`

* `.toggle()`
  

O también métodos para verificar el contenido, como `.contains()`


****

### 2. . ¿Qué devuelve el método `classList.contains()`?

`classList.contains()` evalúa el contenido de la class sobre el objeto al que hace referencia, devolviendo un booleano.

Es útil para verificar el contenido de class concreto, para realizar condiciones sobre las class'es, etc.

##### Ejemplo
```html
<div id="header" class="active">Content</div>
```

```js
const headerContent = document.querySelector('#header')


headerContent.onclick = () => {
    
    if ( headerContent.classList.contains('active') ) {

        headerContent.classList.replace('active', 'disabled')
    }

}
```

### 3. ¿Cómo se pueden añadir múltiples class'es a la vez?

EL método `.add() en sí mismo permite añadir una o todas las class'es necesarias a la vez.
Además, es un buen momento para usar Spread Operator (Operador de extensión) si tenemos las class'es preparadas/agrupadas como distintos arrays s
##### Ejemplo

```html
<div id="button" class="btn">Soy un boton</div>
```

```js
const elBoton = document.querySelector('#button')

elBoton.classList.add('btn-small', 'btn-red')


// Usando extensión

const btnCancelar = ['btn-red', 'btn-alert', 'btn-wide']
const btnAceptar = ['btn-green', 'btn-jumbo']

elBoton.classList.add(...btnCancelar)

elButon.classList.remove(...btnCancelar)

elbuton.classList.add(...btnAceptar, 'otraClaseMas')
```
---

### 4. ¿Cuál es la ventaja de usar `classList.toggle()` sobre `classList.add()`?

Con toggle podemos **alternar** la class de un elemento frente a otro de manera sencilla, en un sólo comando, sin necesidad de tener que verificar manualmente con `.contains()`.

Si el elemento no tiene la class que hace referencia, se añade automaticamente.
Si la tiene, la quita.

Funciona como un interruptor y, de hecho, es fantastico para interruptores.

```js
elButon.classList.toggle('active')
elButon.classList.toggle('remove')
```

---

### 5. ¿Qué hace el método `classList.replace()`?

Éste método reemplaza una clase existente por otra nueva.
Además, devuelve un booleando según el resultado de la operación:
* Si la class original a la que refiere **no existe**, devuelve False.
* Si la class exite y se hizo el reemplazo, devolverá True.


```js
elButon.classList.replace('active', 'disabled')
```

***

### 6. ¿Por qué es preferible usar classList en lugar de className para múltiples clases?

Por lo explicado en la primera pregunta, `className` es una **propiedad que lee/escribe el string completo de class'es de un elemento del DOM específico**.
Si el DOM tiene distintos elementos que comparten nombre de class, con `className` editaríamos todas estas clases.

Con  `classList` en cambio, sólo manipularíamos la class del elemento DOM al que hace referencia, sin afectar al resto.

---

### 7. ¿Cómo se puede verificar si un elemento tiene una clase específica antes de eliminarla?

Las verificaciones son realizadas usando `classList.contains()`.

```html
<div id="header" class="wide">Content</div>
```

```js
const headerAction= document.getElementById('header')

headerAction.onclick = () => {

    if ( headerAction.classList.contains('wide') ) {

        headerAction.classList.add('effects')

    }

}
```


### 8. ¿Qué consideraciones de rendimiento hay que tener en cuenta al manipular clases?

Acceder al DOM puede consumir bastantes recursos, por lo que se establecen unas buenas prácticas tal que:

- Minimizar accesos al DOM si no es necesario.
- Agrupar los accesos/manipulaciones en bloques cuando posible.
- Evitar el uso de 'className' en bucle.
- Preferir el uso de métodos básicos como .add() / .remove() frente a .toggle()

---

#### 9. ¿Cómo se implementa la delegación de eventos para la alternancia de clases?

La delegación de eventos consiste en **usar un elemento padre para manejar eventos de sus elementos hijos, evitando reiteraciones.**

Requerimos un objeto que refiera al elemento que deseamos manipular:

```html
<div id="contenedor"> <!-- Elemento padre -->

    <button class="boton">Botón 1</button> <!-- elementos hijos-->
    <button class="boton">Botón 2</button>

</div>
```

```js
const contenedor = document.getElementById('contenedor')
```

Hasta aquí, tenemos seleccionado el elemento con el que trabajar.
Posterior a ello, podemos hacer las manipulaciones que necesitemos:

```js

contenedor.addEventListener('click', ( evento ) => {

    if ( evento.target.classList.contains('boton')  ) {

        evento.target.classList.toggle('active')

    }

})

```


En nuestro ejemplo, estamos usando sólo un listener para el contenedor, que afecta a todos los elementos hijos, en vez de usar uno por botón.
De este modo, estamos mejorando el rendimiento.

Además, funciona bien incluso cuando los botones se han añadido dinámicamente después (a través de código js, por ejemplo), sin requerir aparecer en el esqueleto html incicial.

---

### 10. ¿Cuáles son las mejores prácticas para nombrar clases CSS manipuladas por JavaScript?

- Usar semántica auto-descriptiva.
- Preferir classList sobre className, sobretodo para evitar errores de manipulación de elementos no deseadas por compartir mismas class'es.
- Separar responsabilidades en elementos distintos (que un elemento no tenga 20 cambios de una vez).
- Usar transiciones suaves en CSS para los cambios.
- Pensar en la accesibilidad.
- Pensar en el rendimiento (agrupando accesos al DOM en el código, por ejemplo, o evitando los innecesarios al usar elementos padre).

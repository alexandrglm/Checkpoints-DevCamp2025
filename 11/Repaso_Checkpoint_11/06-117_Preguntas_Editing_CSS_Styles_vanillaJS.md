# Module 06 - 117:     DOM Fundamentals

## Editar estilos CSS en vanilla JS



### 1.   ¿Cuál es la diferencia entre modificar `element.style` y `element.classList`?

Son dos los enfoques para modificar propiedades CSS:

* Estilos **inline**
* Manipulación de Class'es




### 2.   ¿Por qué se usa camelCase para las propiedades CSS en JavaScript?

Porque el tipado camelCase es el tipado habitual de JS. Aunque estemos editando estilos CSS, al hacerlo a través de un método propio de JavaScript, se considera lo normal usar camelCase.

JS no permite guiones en nombres de propiedades. Por eso las kebab-case tienen que sre convertidas a camelCase.



### 3.   ¿Cómo se pueden establecer múltiples propiedades de estilo a la vez?

Podemos establecer estilos múltiples:  

- A través de estilos inline, creando un objeto que asigne múltiples propiedades CSS.

- A través del método cssText, en cuyo caso la sintáxis para CSS será la típica kebab-case, ya que estamos "incrustando" código CSS directamente.


##### Usando estilos inline
```js
const elBoton = document.querySelector('.btn')

Object.assign(elBoton.style. {

    fontFamily:    "'Merriweather', sans-serif",
    borderRadius:   '2px'
    backgroundColor: 'green'    

})
```

##### Usando cssText
```js
const elBoton = document.querySelector('.btn')

elBoton.style.cssText = `

    font-family:    'Merriweather', sans-serif;
    border-radius:   2px;
    background-Color: 'green'
`;
```


### 4. ¿Cuándo es preferible usar manipulación de clases sobre estilos inline?

En general, cuando queremos llevar a producción un desarrollo, deberíamos usar manipulación de class'es frente a estilos inline.

De esta manera:

- Unificamos todo el código en un único espacio
- Mejoramos la escalabilidad, mantenimiento y limpieza de nuestro código.


En específico, cuando :

* Los estilos se reusan en múltiples elementos
* Queremos usar pseudo-clases (:hover, :focus) 
* Queremos mantener definida la separación entre CSS y JS

```js
// Modelo frágil
elBoton.style.color = 'whitesmoke';


// Para eso, creamos una nueva clase CSS, y la reusamos
elBoton.classList.add('btn-blancoGrande)
```


### 5.   ¿Cómo se implementan transiciones suaves con JavaScript?

* Podemos usar manipulación de clases con temporizadores para que se ejecuta la transición.

* Podemos añadir clases con transiciones en el CSS
```css
.con-fadein {
    transition: 1.5s;
    opacity:    1;
}
```
```js
elBoton.classList.add('con-fadein')
```

* También animaciónes (Web animation API). Las animaciones CSS ofrecen una forma de transicionar perfecta al permitir considerar el tiempo de ejecución.
```js
elBoton.animate([
    { opacity : 0},
    { opacity : 0.5},
    { opacity : 1 }
], { duration : 1500 } )
```

### 6.   ¿Qué son las propiedades personalizadas CSS y cómo se modifican con JavaScript?

Son variables que se pre-asignan al inicio del documento CSS y pueden ser usadas en cualquier estilo-propiedad del documento. 
También pueden ser manipuladas posteriormente desde JS.

##### Ejemplo de uso:

```css
:root {
    --color-de-fondo: whitesmoke;
    --texto-size:   1.5lh;
}

```

```js
// GET
const colorFondo = getComputedStyle(document.documentElement).getPropertyValue('--color-de-fondo')


// SET nuevas propiedades
document.documentElement.style.setProperty('--otro-color', 'red')

```


### 7.   ¿Cuáles son las consideraciones de rendimiento al modificar estilos frecuentemente?

Cualquier acceso al DOM para manipulación, da igual el formato (directo, usando inline styles; o unificado, usando manipulación de class'es), ya supone una merma de recursos/rendimiento a tener en cuenta.

Por eso, deberíamos considerar:

- Agrupar los cambios, con `classList`, para mútlples modificaciones.
- Evitar sobrecarga con propiedades complejas, reflows, etc.. cuando no sea necesario.


### 8.   ¿Cómo se pueden cachear selectores para mejorar el rendimiento?

Pasando a variables las propiedades que más utilizaremos.

Ejemplo:

```js
// Primero, establecemos nuestras variables habituales
const elementosHabituales = {

    header: document.getElementById('header'),
    button: document.getElementsbyClassName('button')
}


// Después podemos usarlas en el código cuando sea necesario

elementosHabituales.header.style.color = 'red';

elementosHabituales.button.style.fontSize = '1.5lh';
```


### 9.   ¿Qué eventos son comunes para disparar cambios de estilo dinámicos?

###### Interacción
- click
- mouse events
- focus

###### Scroll
- scroll

###### Window
- resize
- orientationchange

###### Animaciones
- animationend
- transitionend



### 10.  ¿Por qué es importante la separación entre estilos y lógica en aplicaciones grandes?

Sin duda, para permitir un mantenimiento y escalabilidad del código de manera efectiva, además de conseguir un código más limpio.

1. Mantenibilidad - Escalabilidad.
2. Rendimiento
3. Consistencia


# Module 06 - 118:     DOM Fundamentals

## Función `.toggle()`


### 1.  ¿Qué hace exactamente el método `classList.toggle()`?

**Alterna** una clase CSS en un elemento, verificando la clase que se le ha pasado como argumento:
- Si la clase existe en dicho elemento, la elimina.
- Si la clase no existe, la incorpora.


### 2:  ¿Qué devuelve `classList.toggle()` y cómo se puede usar esa información?

Un booleano:
* Si la clase ha podido quedar presente, devuelve true
* En caso contrario (si no ejecutó la acción), false.

Con esto, podemos evaluar e inferir en qué acción deberá ocurrir. Por ejemplo, podemos lanzar un toggle si es lo que necesitamos, o cualquier otra respuesta.



### 3.  ¿Para qué sirve el segundo parámetro `force` en toggle?

Permite forzar la acción, siempre incorporará la clase que lleve como argumento, determinando si añadir (true) o eliminar (false) la clase, sin alternancias.

Ejemplo:  

```js
// Fuerza mantener la clase 'disabled'
document.classList.toggle('disabled', true)

// Fuerza eliminar la clase 'disabled'
document.classList.toggle('disabled', false)


```

### 4.  ¿Cómo se puede implementar un toggle de tema oscuro/claro?

Podríamos crear unas propiedades CSS, específicas, usando variables, para cambiar los colores - estilos, definiendo light y dark.

Con toggle, después, podemos asignar a un botón (o a cualquier elemento/acción) la posibilidad de "retirar los estilos light" e "incorporar los estilos dark", asignarlo a localStorage, o lo que se requiera.



### 5.  ¿Qué diferencia hay entre usar toggle y usar add/remove condicionalmente?

Toggle es más conciso, y evita reiteraciones, verificaciones, etc:
```js
if ( elBoton.classList.contains('disabled') ){

    elBoton.classList.remove('disabled')
    elBoton.classList.add('active')
} else {

    elBoton.classList.add('disabled')
}


// Con toggle resumimos tanta verificación-accion

elBoton.classList.toggle('disabled')
```

Con toggle podemos optimizar el código y realizar un add-remove condicional de forma simple.

### 6.   ¿Cómo se puede persistir el estado de un toggle en localStorage?

Podemos crear un estado a través de una variable iniciada en nuestro código que haga referencia al estado de dicho toggle.

Después, usando el método `.setItem()` de `localStorage` lo almacenamos.

Ejemplo:

```css
.dark {
    
    /* todos los parámetros para dark */

}
```
```html
<button class="elBoton">Modo Oscuro</button>
```
```js
const elBoton = document.getElementsByClassName('elBoton')

// Al cargar la página, accedemos al set en localStorage si existese
if ( localStorage.getItem('esDark') === true ) {

    document.body.classList.add('dark')

}


// Después, seguimos estableciendo las acciones a realizar si se pulsa el botón para dark mode
elBoton.addEventListener('click', () => {

    // Establecemos nuestro dark como variable
    const esDark = document.body.classList.toggle('dark');

    // Después, instanciamos guardar dicha variable/estado
    localStorage.setItem('dark', esDark)


})

```


### 7.  ¿Qué consideraciones de accesibilidad hay que tener al usar toggle?

Dando por hecho que se ha desarrollado la aplicación con unos mínimos de accesibilidad (por ejemplo, siguiendo las convenciones ARIA), se debería asegurar que los nuevos atributos que se incorporan al DOM mantienen dichas características de accesibilidad.

Respecto a ARIA, una forma óptima de mantener los estilos al hacer modificaciones sería actualizar atributos ARIA al hacer toggle:

```js
elBoton.classList.toggle('expandido');

// Creamos definiciones específicas
elBoton.setAtribute.('aria-expandido', elBoton.classList.contains('expandido'));
```

### 8.   ¿Cómo se pueden manejar múltiples toggles en una sola función?

Instanciando de manera agrupada los distintos toggle's dentro de una misma función

```js
function muchosToggles(elBoton, ...clases) {

    
    clases.forEach( laClase => elBoton.toggle(laClase) )
}

muchosToggle(menu, 'active', 'visible', 'dark-mode', 'animated')


```


### 9.  ¿Cuáles son los errores comunes al usar classList.toggle()?

* Olvidar que siempre devuelve un booleano
* No usar convención camelCase
* No almancenar en localStorage los cambios realizados

### 10.  ¿Cómo se puede combinar toggle con animaciones CSS para crear transiciones suaves?
* CSS puro:
```css
.fade-in {

    opacity: 1;
    transition: opacity 0.5s ease-in-out

}
.fade-out {
    
    opacity: 0;

}
```
```js
elElemento.classList.toggle('fade-in')
elElemento.classList.toggle('fade-out¡)
```

* Con Web Animations API
```js
elElemento.animate([

    { opacity : 0},
    { opaticty : 1}

], { duration: 500 })
```

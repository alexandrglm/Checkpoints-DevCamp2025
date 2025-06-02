# Resumen - Fundamentos del DOM en JavaScript


| #   | Guía | Tema | Conceptos Clave |
| --- | --- | --- | --- |
| 06-112 | Agregar/Eliminar Clases | Manipulación de clases CSS | `classList.add()`, `remove()`, `toggle()`, `contains()`, `replace()` |
| 06-113 | Window vs Document | Diferencias entre objetos globales | Jerarquía del navegador, propiedades específicas |
| 06-114 | Selectores de Consulta | Selección de elementos DOM | `querySelector()`, `querySelectorAll()` |
| 06-115 | Event Listeners | Manejo de eventos | `addEventListener()`, tipos de eventos |
| 06-116 | onclick vs addEventListener | Comparación de métodos | Ventajas y desventajas de cada enfoque |
| 06-117 | Edición de Estilos CSS | Modificación dinámica de estilos | `element.style`, propiedades CSS |
| 06-118 | Función Toggle | Alternancia de estados | `classList.toggle()`, estados binarios |

---

## Guía 06-112: Agregar/Eliminar Clases en JavaScript Vanilla

### Conceptos Fundamentales

La manipulación de clases es esencial para:

- Cambios dinámicos de estilo
- Gestión de estado en componentes UI
- Activadores de animaciones
- Ajustes de diseño responsivo

### API Element.classList

La propiedad `classList` proporciona métodos para trabajar con clases:

| Método | Descripción | Ejemplo |
| --- | --- | --- |
| `add()` | Añade una o más clases | `element.classList.add('activo')` |
| `remove()` | Elimina una o más clases | `element.classList.remove('activo')` |
| `toggle()` | Alterna una clase | `element.classList.toggle('activo')` |
| `contains()` | Verifica si existe una clase | `element.classList.contains('activo')` |
| `replace()` | Reemplaza una clase por otra | `element.classList.replace('viejo', 'nuevo')` |

### Ejemplos Prácticos

```javascript
// Alternancia básica de clase
const boton = document.getElementById('miBoton');

boton.addEventListener('click', () => {

    boton.classList.toggle('activo');

});

// Cambio condicional de clase
const titulo = document.getElementById('tituloPrincipal');

titulo.onclick = () => {

    if (titulo.classList.contains('activo')) {
        titulo.classList.remove('activo');
        titulo.classList.add('inactivo');
    } else {
        titulo.classList.remove('inactivo');
        titulo.classList.add('activo');
    }
};

// Operaciones múltiples de clase
const elemento = document.querySelector('.panel');
elemento.classList.add('resaltado', 'animado', 'fadeIn');
elemento.classList.remove('oculto', 'deshabilitado');
```

### Mejores Prácticas

- Usar nombres de clase semánticos
- Separar responsabilidades
- Preferir classList sobre className
- Usar transiciones CSS para cambios suaves
- Considerar la accesibilidad

**Preguntas de Repaso - Guía 06-112:**

1. ¿Cuál es la diferencia entre `classList.add()` y `className`?
2. ¿Qué devuelve el método `classList.contains()`?
3. ¿Cómo se pueden añadir múltiples clases de una vez?
4. ¿Cuál es la ventaja de usar `classList.toggle()` sobre `classList.add()`?
5. ¿Qué hace el método `classList.replace()`?
6. ¿Por qué es preferible usar `classList` en lugar de `className` para múltiples clases?
7. ¿Cómo se puede verificar si un elemento tiene una clase específica antes de eliminarla?
8. ¿Qué consideraciones de rendimiento hay que tener en cuenta al manipular clases?
9. ¿Cómo se implementa la delegación de eventos para la alternancia de clases?
10. ¿Cuáles son las mejores prácticas para nombrar clases CSS manipuladas por JavaScript?

---

## Guía 06-113: Diferencias entre Window y Document

### Conceptos Centrales

- **Window**: Representa la ventana/pestaña del navegador
- **Document**: Representa la página web cargada (DOM)

### Relación Jerárquica

```
Window (Contexto Global)
├── document (DOM)
├── console
├── location
├── history
├── navigator
└── ...
```

### Características Específicas

#### Funciones del Objeto Window:

| Característica | Descripción |
| --- | --- |
| `window.alert()` | Muestra diálogo de alerta |
| `window.innerWidth` | Ancho del viewport |
| `window.location` | URL de la barra de direcciones |
| `window.history` | Historial de sesión del navegador |
| `window.setTimeout()` | Ejecuta código después de un retraso |
| `window.localStorage` | API de almacenamiento del navegador |

#### Funciones del Objeto Document:

| Característica | Descripción |
| --- | --- |
| `document.getElementById()` | Selección de elemento DOM |
| `document.querySelector()` | Búsqueda con selector CSS |
| `document.createElement()` | Creación de nuevo elemento |
| `document.title` | Título de la página |
| `document.cookie` | Cookies de la página |
| `document.URL` | URL de la página actual |

### Casos de Uso Prácticos

```javascript
// Cuándo usar Window
const anchoVentana = window.innerWidth;
const altoVentana = window.innerHeight;
window.location.href = 'https://ejemplo.com';
window.setTimeout(() => {
    console.log('Ejecución retrasada');
}, 1000);

// Cuándo usar Document
const encabezado = document.getElementById('encabezado');
const botones = document.querySelectorAll('.btn');
document.title = 'Nuevo Título de Página';
const nuevoDiv = document.createElement('div');
document.body.appendChild(nuevoDiv);
```

**Preguntas de Repaso - Guía 06-113:**

1. ¿Cuál es la diferencia principal entre `window` y `document`?
2. ¿Cómo se relacionan jerárquicamente `window` y `document`?
3. ¿Qué propiedades son específicas del objeto `window`?
4. ¿Para qué se usa `window.localStorage`?
5. ¿Cuál es la diferencia entre `window.location` y `document.URL`?
6. ¿Cuándo se debe usar `document.createElement()`?
7. ¿Cómo se accede al ancho de la ventana del navegador?
8. ¿Qué consideraciones hay que tener con los iframes?
9. ¿Por qué las operaciones de `window` son generalmente más rápidas que las del DOM?
10. ¿Cuándo es recomendable usar el prefijo `window.` explícitamente?

---

## Guía 06-114: Selectores de Consulta / .querySelector

Los selectores de consulta proporcionan una forma moderna de:

- Seleccionar elementos DOM usando selectores estilo CSS
- Trabajar con elementos individuales o colecciones
- Combinar múltiples criterios de selección
- Mantener sintaxis consistente con CSS

### Comparación de Métodos

| Característica | `querySelector()` | `querySelectorAll()` |
| --- | --- | --- |
| ¿Qué devuelve? | Primer elemento coincidente | NodeList de todas las coincidencias |
| ¿Colecciones en vivo? | No  | No (instantánea estática) |
| Tipo de método | Selección directa | Selección de colección |
| Uso típico | Elementos únicos | Grupos de elementos |

### Comparación con Métodos Tradicionales

| Método | ¿Qué devuelve? | En vivo | Tipo de selector |
| --- | --- | --- | --- |
| `getElementById()` | Elemento único | Sí  | Solo ID |
| `getElementsByClassName()` | HTMLCollection | Sí  | Solo clase |
| `getElementsByTagName()` | HTMLCollection | Sí  | Solo etiqueta |
| `querySelector()` | Elemento único | No  | Selector CSS |
| `querySelectorAll()` | NodeList | No  | Selector CSS |

### Sintaxis de Selectores

```javascript
// Selección por ID
document.querySelector('#encabezado-principal')

// Selección por clase
document.querySelectorAll('.elemento-menu')

// Selección por atributo
document.querySelector('[data-toggle="modal"]')

// Combinaciones complejas
document.querySelectorAll('div.widget > h2.titulo')

// Múltiples selectores
document.querySelectorAll('h1, h2, h3')
```

### Ejemplos Prácticos

```javascript
// Funcionalidad básica de alternancia
const botonAlternar = document.querySelector('#btn-alternar');
const contenido = document.querySelector('.contenedor-contenido');

botonAlternar.addEventListener('click', () => {
    contenido.classList.toggle('oculto');
});

// Trabajando con colecciones
const enlacesNav = document.querySelectorAll('.enlace-nav');
enlacesNav.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        enlacesNav.forEach(l => l.classList.remove('activo'));
        e.target.classList.add('activo');
    });
});
```

**Preguntas de Repaso - Guía 06-114:**

1. ¿Cuál es la diferencia entre `querySelector()` y `querySelectorAll()`?
2. ¿Qué tipo de selectores CSS se pueden usar con estos métodos?
3. ¿Por qué `querySelectorAll()` devuelve una NodeList en lugar de un array?
4. ¿Cuándo es mejor usar `getElementById()` en lugar de `querySelector()`?
5. ¿Cómo se seleccionan múltiples tipos de elementos con un solo selector?
6. ¿Qué significa que una colección sea "en vivo" vs "estática"?
7. ¿Cómo se puede limitar el área de búsqueda de un selector?
8. ¿Cuáles son las consideraciones de rendimiento al usar selectores complejos?
9. ¿Cómo se manejan los resultados vacíos en las consultas?
10. ¿Qué ventajas tienen los selectores de consulta sobre los métodos tradicionales?

---

## Guía 06-115: Event Listeners (Oyentes de Eventos)

### Conceptos Centrales

Los oyentes de eventos son la base de las aplicaciones web interactivas:

- Se pueden adjuntar a cualquier elemento DOM
- Responden a varios tipos de eventos (clics, hover, teclas, etc.)
- Permiten interfaces de usuario dinámicas y responsivas
- Ejecutan funciones callback cuando ocurren eventos

### Jerarquía de Tipos de Eventos

**Categorías Comunes de Eventos:**

1. **Eventos de Ratón**: `click`, `mouseover`, `mouseout`, `mousedown`, `mouseup`
2. **Eventos de Teclado**: `keydown`, `keyup`, `keypress`
3. **Eventos de Formulario**: `submit`, `change`, `focus`, `blur`
4. **Eventos de Ventana**: `load`, `resize`, `scroll`

### Métodos y Propiedades Clave

#### Métodos de Event Listener:

| Método | Descripción |
| --- | --- |
| `addEventListener()` | Adjunta un manejador de eventos a un elemento |
| `removeEventListener()` | Elimina un manejador de eventos |
| `dispatchEvent()` | Activa un evento programáticamente |

#### Propiedades del Objeto Event:

| Propiedad | Descripción |
| --- | --- |
| `target` | Elemento que activó el evento |
| `type` | Tipo de evento (ej. "click") |
| `clientX/clientY` | Coordenadas del puntero del ratón |
| `keyCode` | Qué tecla del teclado fue presionada |
| `preventDefault()` | Detiene el comportamiento predeterminado del navegador |

### Ejemplos Prácticos

```javascript
// Ejemplo básico de evento click
const boton = document.querySelector('#miBoton');
boton.addEventListener('click', (evento) => {
    console.log('¡Botón clickeado!', evento.target);
});

// Efectos hover con eventos de ratón
const imagenes = document.querySelectorAll('.imagen-sitio');
imagenes.forEach(img => {
    img.addEventListener('mouseover', (evento) => {
        const leyenda = evento.target.nextElementSibling;
        leyenda.classList.add('mostrar');
    });

    img.addEventListener('mouseout', (evento) => {
        const leyenda = evento.target.nextElementSibling;
        leyenda.classList.remove('mostrar');
    });
});

// Patrón de delegación de eventos
document.querySelector('#padre').addEventListener('click', (evento) => {
    if (evento.target.classList.contains('hijo')) {
        console.log('Elemento hijo clickeado');
    }
});
```

### Técnicas Avanzadas

```javascript
// Eventos personalizados
const eventoPersonalizado = new CustomEvent('construir', { 
    detail: { tiempo: Date.now() } 
});
elemento.dispatchEvent(eventoPersonalizado);

// Opción 'once' (una sola vez)
boton.addEventListener('click', () => {
    console.log('Esto solo se ejecutará una vez');
}, { once: true });
```

**Preguntas de Repaso - Guía 06-115:**

1. ¿Cuáles son las principales categorías de eventos en JavaScript?
2. ¿Qué información proporciona el objeto `event`?
3. ¿Cómo se elimina un event listener?
4. ¿Qué es la delegación de eventos y cuándo es útil?
5. ¿Cuál es la diferencia entre `keydown` y `keypress`?
6. ¿Cómo se puede prevenir el comportamiento predeterminado de un evento?
7. ¿Qué son los eventos personalizados y cómo se crean?
8. ¿Cuáles son las mejores prácticas para el manejo de memoria con event listeners?
9. ¿Qué significa la opción `{ once: true }` en addEventListener?
10. ¿Cómo se puede mejorar el rendimiento al manejar eventos que se disparan frecuentemente?

---

## Guía 06-116: onclick Inline vs addEventListener

### Conceptos Centrales

El manejo de eventos en JavaScript se puede hacer mediante:

- **Manejadores inline**: Basados en atributos HTML (`onclick`, `onmouseover`, etc.)
- **Event listeners del DOM**: Adjuntos programáticamente (`addEventListener`)

### Enfoque onclick Inline

```html
<button onclick="manejarClick()">Haz Click</button>

<script>
function manejarClick() {
    console.log('¡Botón clickeado!');
}
</script>
```

**Características:**

- Mezcla HTML y JavaScript
- Fácil de implementar rápidamente
- Limitado a un manejador por evento

### Enfoque addEventListener

```javascript
<button id="miBoton">Haz Click</button>

<script>
document.getElementById('miBoton').addEventListener('click', function() {
    console.log('¡Botón clickeado!');
});
</script>
```

**Características:**

- Separa comportamiento de estructura
- Permite múltiples manejadores por evento
- Más flexible en control de eventos
- Mejor para código mantenible

### Comparación de Diferencias

| Característica | onclick Inline | addEventListener |
| --- | --- | --- |
| separación de responsabilidades | Pobre (mezcla HTML/JS) | Excelente |
| Múltiples manejadores | No  | Sí  |
| Fases de eventos | Solo burbujeo | Puede usar captura/burbujeo |
| Eliminación | Difícil | Fácil (`removeEventListener`) |
| Elementos dinámicos | Funciona | Requiere delegación |
| Mejor práctica | Generalmente evitado | Preferido |

### Cuándo Usar Cada Uno

**Usar onclick Inline cuando:**

- Creando prototipos rápidos
- Trabajando con eventos simples de una sola vez
- Necesitando pasar parámetros específicos directamente
- Trabajando con frameworks que lo recomiendan (como Vue.js)

**Usar addEventListener cuando:**

- Construyendo aplicaciones de producción
- Necesitando múltiples manejadores de eventos
- Requiriendo control de propagación de eventos
- Manteniendo clara separación de responsabilidades
- Trabajando con elementos creados dinámicamente

**Preguntas de Repaso - Guía 06-116:**

1. ¿Cuáles son las principales diferencias entre onclick inline y addEventListener?
2. ¿Por qué addEventListener es generalmente preferido en aplicaciones de producción?
3. ¿Cómo se eliminan los event listeners añadidos con addEventListener?
4. ¿Qué ventajas tiene addEventListener para múltiples manejadores de eventos?
5. ¿Cuándo podría ser apropiado usar onclick inline?
6. ¿Qué es la delegación de eventos y cómo se relaciona con addEventListener?
7. ¿Cómo afecta la separación de responsabilidades a la mantenibilidad del código?
8. ¿Qué consideraciones de rendimiento hay entre ambos enfoques?
9. ¿Cómo se manejan los elementos dinámicos con cada enfoque?
10. ¿Qué papel juegan las fases de eventos (captura/burbujeo) en esta comparación?

---

## Guía 06-117: Edición de Estilos CSS en JavaScript Vanilla

### Acceso a Elementos DOM

Para modificar estilos, primero necesitamos seleccionar elementos:

```javascript
// Por ID (devuelve elemento único)
const encabezado = document.getElementById('encabezado');

// Por clase (devuelve HTMLCollection)
const botones = document.getElementsByClassName('btn');

// Por etiqueta (devuelve HTMLCollection)
const imagenes = document.getElementsByTagName('img');

// Selectores modernos (devuelve NodeList)
const tarjetas = document.querySelectorAll('.tarjeta');
```

### Modificación de Estilos

Hay dos enfoques principales para cambiar estilos:

#### A. Estilos Inline (propiedad style)

```javascript
const elemento = document.querySelector('.imagen-sitio');

// Propiedad única
elemento.style.backgroundColor = 'azul';

// Múltiples propiedades
Object.assign(elemento.style, {
    border: '2px solid rojo',
    borderRadius: '8px',
    padding: '20px'
});

// CamelCase para propiedades CSS
elemento.style.fontSize = '24px'; // No 'font-size' y SIN ; al final
```

#### B. Manipulación de Clases CSS

```javascript
// Añadir/eliminar clases
elemento.classList.add('activo');
elemento.classList.remove('oculto');
elemento.classList.toggle('visible');

// Reemplazar clases
elemento.classList.replace('clase-antigua', 'clase-nueva');
```

### Cambios Dinámicos de Estilo con Eventos

```javascript
const laptop = document.querySelector('.imagen-sitio');

// Evento mouse enter
laptop.addEventListener('mouseenter', (e) => {
    e.target.style.borderRight = '40px solid rojo';
    e.target.style.transition = 'border-color 0.3s ease';
});

// Evento mouse leave
laptop.addEventListener('mouseleave', (e) => {
    e.target.style.borderRight = '40px solid transparent';
});
```

### Mejores Prácticas

1. **Preferir clases sobre estilos inline** para mantenibilidad
2. **Usar transiciones CSS** para animaciones suaves
3. **Cachear selectores** cuando se reutilizan elementos
4. **Considerar el rendimiento** con cambios frecuentes de estilo
5. **Usar propiedades personalizadas CSS** para valores dinámicos

```javascript
// Establecer variable
document.documentElement.style.setProperty('--color-principal', '#ff0000');
// Usar en CSS: var(--color-principal)
```

**Preguntas de Repaso - Guía 06-117:**

1. ¿Cuál es la diferencia entre modificar `element.style` y `element.classList`?
2. ¿Por qué se usa camelCase para las propiedades CSS en JavaScript?
3. ¿Cómo se pueden establecer múltiples propiedades de estilo a la vez?
4. ¿Cuándo es preferible usar manipulación de clases sobre estilos inline?
5. ¿Cómo se implementan transiciones suaves con JavaScript?
6. ¿Qué son las propiedades personalizadas CSS y cómo se modifican con JavaScript?
7. ¿Cuáles son las consideraciones de rendimiento al modificar estilos frecuentemente?
8. ¿Cómo se pueden cachear selectores para mejorar el rendimiento?
9. ¿Qué eventos son comunes para disparar cambios de estilo dinámicos?
10. ¿Por qué es importante la separación entre estilos y lógica en aplicaciones grandes?

---

## Guía 06-118: Función Toggle

### Conceptos Centrales

El método `classList.toggle()` proporciona una forma elegante de alternar entre añadir y eliminar un nombre de clase de un elemento. Es particularmente útil para implementar funcionalidad de mostrar/ocultar, cambio de temas, o cualquier cambio de estado binario en la UI.

**Características:**

- Añade automáticamente la clase si no está presente
- Elimina la clase si ya está presente
- Devuelve `true` si se añade la clase, `false` si se elimina
- Puede aceptar un segundo parámetro booleano opcional para forzar añadir/eliminar

### Jerarquía de Métodos de Manipulación de Clases

**Métodos de Element.classList:**

1. `add()` - Añade uno o más nombres de clase
2. `remove()` - Elimina uno o más nombres de clase
3. `toggle()` - Alterna entre añadir/eliminar una clase
4. `contains()` - Verifica si existe una clase
5. `replace()` - Reemplaza una clase con otra

### Métodos y Propiedades Clave

#### Parámetros del método toggle():

| Parámetro | Descripción | Requerido |
| --- | --- | --- |
| `className` | La clase a alternar | Sí  |
| `force` | Booleano para forzar añadir/eliminar | No  |

#### Valor de Retorno

- `true` si la clase está ahora presente
- `false` si la clase está ahora ausente

### Ejemplos Prácticos

```javascript
// Ejemplo básico de toggle
const boton = document.getElementById('btnAlternar');
const elemento = document.getElementById('contenido');

boton.addEventListener('click', () => {
    elemento.classList.toggle('activo');
});

// Uso del parámetro force
// Siempre añadir la clase (no eliminará si está presente)
elemento.classList.toggle('activo', true);

// Siempre eliminar la clase (no añadirá si está ausente)
elemento.classList.toggle('activo', false);

// Toggle de múltiples clases
function alternarTema() {
    document.body.classList.toggle('modo-oscuro');
    document.body.classList.toggle('modo-claro');
}
```

### Técnicas Avanzadas

```javascript
// Toggle con propiedades personalizadas
boton.addEventListener('click', () => {
    const estaActivo = elemento.classList.toggle('activo');
    elemento.dataset.estado = estaActivo ? 'activo' : 'inactivo';
});

// Toggle con almacenamiento persistente
boton.addEventListener('click', () => {
    const esOscuro = document.body.classList.toggle('modo-oscuro');
    localStorage.setItem('modoOscuro', esOscuro);
});

// Inicializar desde almacenamiento
if (localStorage.getItem('modoOscuro') === 'true') {
    document.body.classList.add('modo-oscuro');
}
```

### Mejores Prácticas

1. **Nombres de Clase Semánticos**: Usar nombres descriptivos (ej. 'oculto' vs 'x1')
2. **Alternativas Solo CSS**: Considerar soluciones CSS puras para casos simples
3. **Accesibilidad**: Asegurar que los estados alternados sean accesibles (atributos ARIA)
4. **Gestión de Estado**: Rastrear el estado de toggle cuando sea necesario para la lógica de la aplicación
5. **Rendimiento**: Debounce de eventos de toggle rápidos cuando sea necesario

**Preguntas de Repaso - Guía 06-118:**

1. ¿Qué hace exactamente el método `classList.toggle()`?
2. ¿Qué devuelve `classList.toggle()` y cómo se puede usar esa información?
3. ¿Para qué sirve el segundo parámetro `force` en toggle?
4. ¿Cómo se puede implementar un toggle de tema oscuro/claro?
5. ¿Qué diferencia hay entre usar toggle y usar add/remove condicionalmente?
6. ¿Cómo se puede persistir el estado de un toggle en localStorage?
7. ¿Qué consideraciones de accesibilidad hay que tener al usar toggle?
8. ¿Cómo se pueden manejar múltiples toggles en una sola función?
9. ¿Cuáles son los errores comunes al usar classList.toggle()?
10. ¿Cómo se puede combinar toggle con animaciones CSS para crear transiciones suaves?

---

# JavaScript 16:     DOM Fundamentals

JavaScript 16:     DOM Fundamentals

|     | #   | Type | Tittle | Date |
| --- | --- | --- | --- | --- |
| [X] | 06-111 |     | Overview of the DOM | 2025-05-13 |
| [X] | 06-112 | `classList.METHOD` as `.add()` - `.remove()` - `.toggle()` - `.contains()` - `.replace()` | How to Add and Remove Classes in Vanilla JavaScript | 2025-05-17 |
| [X] | 06-113 | `window.METHOD` - `document.METHOD` | Differences Between the Window and Document for JavaScript Development | 2025-05-17 |
| [X] | 06-114 | `document.querySelector` - `document.querySelectorAll` | Overview of JavaScript Query Selectors | 2025-05-17 |
| [X] | 06-115 | `addEvenetListener'` | Guide to JavaScript Event Listeners | 2025-05-18 |
| [X] | 06-116 | `document.onclick` vs `addEventListener` | Inline onclick vs addEventListener | 2025-05-18 |
| [X] | 06-117 | `${theVar}.style.${theStyle}` - `.style.cssText = 'the entire css attr with ; at the end'` | How to Add and Remove CSS Styles in Vanilla JavaScript | 2025-05-18 |
| [X] | 06-118 | `const btn = document.getElementByClassName('theButton');` - `btn.addEventListerner('click', (e) => { heading.classList.toggle('hidden') })` | How to Use JavaScript's Toggle Function |     |

---

Module 06 - 112: DOM Fundamentals

## Adding/Removing Classes in Vanilla JS

---

1. Class Manipulation
2. `Element.classList` API
3. `className` Property
4. More Examples
5. Event Listeners for Class Toggling

---

# 1. Class Manipulation

Class manipulation is fundamental for:

- Dynamic styling changes
  
- State management in UI components
  
- Animation triggers
  
- Responsive design adjustments
  

---

# 2. Element.classList API

The `classList` property provides methods to work with classes:

Core Methods:

| Method | Description | Example |
| --- | --- | --- |
| `add()` | Adds one or more classes | `element.classList.add('active')` |
| `remove()` | Removes one or more classes | `element.classList.remove('active')` |
| `toggle()` | Toggles a class | `element.classList.toggle('active')` |
| `contains()` | Checks if class exists | `element.classList.contains('active')` |
| `replace()` | Replaces one class with another | `element.classList.replace('old', 'new')` |

### Features:

- Preserves existing classes
  
- Multiple classes can be added/removed at once
  
- Returns a live `DOMTokenList` collection
  

---

# 3.    `className` Property

The `className` property offers an alternative approach:

### Characteristics:

- Gets/sets the entire class string
  
- Overwrites all existing classes
  
- Simpler syntax for single-class elements
  

Example:

```js
// Set class (overwrites existing)
element.className = 'new-class';

// Add class (preserving existing)
element.className += ' additional-class';
```

---

## Practical Examples

### Basic Class Toggle

```js
const button = document.getElementById('myButton');

button.addEventListener('click', () => {

    button.classList.toggle('active');

});
```

### Conditional Class Change

```js
const heading = document.getElementById('mainHeading');

heading.onclick = () => {

    if (heading.classList.contains('active')) {

        heading.classList.remove('active');
        heading.classList.add('inactive');


    } else {

        heading.classList.remove('inactive');
        heading.classList.add('active');

    }

};
```

### Multiple Class Operations

```js
const element = document.querySelector('.panel');

element.classList.add('highlight', 'animated', 'fadeIn');
element.classList.remove('hidden', 'disabled');
```

---

## Event Listeners for Class Toggling

Common event types for class manipulation:

- `click` - User clicks an element
  
- `mouseover`/`mouseout` - Hover effects
  
- `scroll` - Scroll-based animations
  
- `focus`/`blur` - Form field interactions
  

### Example with Event Delegation

```js
document.addEventListener('click', (event) => {

    if (event.target.matches('.toggle-button')) {

        event.target.classList.toggle('active');
}
});
```

---

## Performance Considerations

1. **Batch DOM operations** - Minimize layout thrashing
  
2. **Use classList for multiple classes** - More efficient than className
  
3. **Debounce rapid events** - Like scroll/resize handlers
  
4. **Cache selectors** - Avoid repeated DOM queries
  

## Best Practices

1. **Use semantic class names** - `.is-active` vs `.blue-background`
  
2. **Separate concerns** - Keep JavaScript classes separate from styling classes
  
3. **Prefer classList over className** - When working with multiple classes
  
4. **Use CSS transitions** - For smooth visual changes
  
5. **Consider accessibility** - Ensure UI remains usable after class changes
  

---

## References

- [Element: classList property - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
  
- https://javascript.info/dom-attributes-and-properties#property-and-attribute-synchronization
  
- [8 Ways to Cycle Through Classes on an Element | CSS-Tricks](https://css-tricks.com/cycle-through-classes-html-element/)
  
- [Inject New CSS Rules | CSS-Tricks](https://css-tricks.com/snippets/javascript/inject-new-css-rules/)
  
- [Avoid large, complex layouts and layout thrashing  |  Articles  |  web.dev](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing)
  

---

Module 06 - 113:     DOM Fundamentals

## `window.` VS `document.` diferences

---

1. Core Concepts
  
2. Hierarchy Relationship
  
3. Key Properties and Methods
  
4. Practical Usage Scenarios
  
5. Working with iframes
  

---

### 1. Core Concepts

While `window` represents the browser environment, `document` represents the page content.

The window object exists at a higher level and contains the document as one of its 
properties, along with other browser-specific features.

### The Window Object

- Represents the browser window/tab
  
- Global object in client-side JavaScript
  
- Contains all other global objects (document, console, etc.)
  
- Manages browser-level features
  

### The Document Object

- Represents the loaded webpage (DOM)
  
- Child object of window
  
- Provides access to page content and structure
  
- Entry point for DOM manipulation
  

---

## 2.    Hierarchy Relationship

**Window (Global Context)**** ├── document (DOM)
├── console
├── location
├── history
├── navigator
└── ...

`window.document` is the same as `document` - the window reference is implicit

---

## 3.     Properties and Methods

### Window-Specific Features:

| Feature | Description |
| --- | --- |
| `window.alert()` | Displays alert dialog |
| `window.innerWidth` | Viewport width |
| `window.location` | Browser address bar URL |
| `window.history` | Browser session history |
| `window.setTimeout()` | Executes code after delay |
| `window.localStorage` | Browser storage API |

### Document-Specific Features:

| Feature | Description |
| --- | --- |
| `document.getElementById()` | DOM element selection |
| `document.querySelector()` | CSS selector lookup |
| `document.createElement()` | New element creation |
| `document.title` | Page title |
| `document.cookie` | Page cookies |
| `document.URL` | Current page URL |

---

## 4.     Practical Usage Scenarios

### When to Use Window

```js
// Browser viewport dimensions
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;



// Navigation
window.location.href = 'https://example.com';


// Timers
window.setTimeout(() => {

    console.log('Delayed execution');

}, 1000);



// Storage
window.localStorage.setItem('key', 'value');
```

### When to Use Document

```js
// DOM Manipulation
const header = document.getElementById('header');
const buttons = document.querySelectorAll('.btn');



// Content Modification
document.title = 'New Page Title';



// Element Creation
const newDiv = document.createElement('div');
document.body.appendChild(newDiv);
```

---

## 5.     Working with iframes

Special considerations for iframes:

- Each iframe has its own `window` and `document`
  
- Parent window can access iframe content
  
  ```js
  const iframeWindow = document.getElementById('myFrame').contentWindow;
  const iframeDoc = iframeWindow.document;
  ```
  
- Same-origin policy restricts cross-domain access
  

---

## Performance Considerations

1. **Window Operations** are generally faster than DOM operations
  
2. **Minimize DOM Access** - Cache references to frequently used elements
  
3. **Batch DOM Changes** - Reduce reflows and repaints
  
4. **Debounce Window Events** - Like resize or scroll handlers
  

## Best Practices

1. **Explicit References** - Use `window.` prefix for clarity in global scope
  
2. **DOM Ready** - Wait for `DOMContentLoaded` before DOM manipulation
  
3. **Cleanup Listeners** - Remove window event listeners when unused
  
4. **iframes Sparingly** - They create separate document environments
  
5. **Feature Detection** - Check for window properties before use
  

---

## References

- [Window - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window)
  
- [Document - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document)
  
- https://javascript.info/document
  
- [Constructing the Object Model  |  Articles  |  web.dev](https://web.dev/articles/critical-rendering-path/constructing-the-object-model)
  
- [Same-origin policy - Security on the web | MDN
  

---

# Module 06 - 114:     DOM Fundamentals

## Query selectors

---

1. Introduction to Query Selectors
  
2. `querySelector` vs `querySelectorAll`
  
3. Comparison with Traditional Methods
  
4. Selector Syntax
  
5. More Examples
  

---

## 1.     Introduction to Query Selectors

Query selectors provide a modern way to:

- Select DOM elements using CSS-style selectors
  
- Work with single elements or collections
  
- Combine multiple selection criteria
  
- Maintain consistent syntax with CSS
  

---

## 2.     `querySelector` vs `querySelectorAll`

| Feature | `querySelector()` | `querySelectorAll()` |
| --- | --- | --- |
| Returns | First matching element | NodeList of all matches |
| Live Collection | No  | No (static snapshot) |
| Method Type | Direct selection | Collection selection |
| Typical Use | Unique elements | Groups of elements |

### Differences

- `querySelector()` returns the **first match only**
  
- `querySelectorAll()` returns **all matches** as a NodeList
  
- NodeLists support `forEach()` but not all array methods
  

---

## 3.     Comparison with Traditional Methods

| Method | Returns | Live | Selector Type |
| --- | --- | --- | --- |
| `getElementById()` | Single element | Yes | ID only |
| `getElementsByClassName()` | HTMLCollection | Yes | Class only |
| `getElementsByTagName()` | HTMLCollection | Yes | Tag only |
| `querySelector()` | Single element | No  | CSS selector |
| `querySelectorAll()` | NodeList | No  | CSS selector |

---

## 4.     Selector Syntax

Query selectors support full CSS selector syntax:

```js
// ID selection
document.querySelector('#main-header')


// Class selection
document.querySelectorAll('.menu-item')


// Attribute selection
document.querySelector('[data-toggle="modal"]')


// Complex combinations
document.querySelectorAll('div.widget > h2.title')


// Multiple selectors
document.querySelectorAll('h1, h2, h3')
```

---

## 5.     Practical Examples

### Basic Toggle Functionality

```js
const toggleButton = document.querySelector('#toggle-btn');
const content = document.querySelector('.content-wrapper');


toggleButton.addEventListener('click', () => {

    content.classList.toggle('hidden');

});
```

### Working with Collections

```js
// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {

    link.addEventListener('click', (e) => {

        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));


        // Add to clicked link
        e.target.classList.add('active');

    });
});
```

### Advanced Selection

```js
// Select first list item in each unordered list
const firstItems = document.querySelectorAll('ul > li:first-child');



// Select all external links
const externalLinks = document.querySelectorAll('a[href^="http"]');
```

---

## Performance Considerations

1. **ID selections** are fastest - use `getElementById()` when possible
  
2. **Complex selectors** have higher overhead
  
3. **Cache selectors** - Avoid repeated DOM queries
  
4. **Scope queries** - Limit search area when possible
  
  ```js
  const form = document.querySelector('#user-form');
  const inputs = form.querySelectorAll('input');
  ```
  

## Best Practices

1. **Prefer specific selectors** - Avoid overly broad queries
  
2. **Use IDs for unique elements** - Most performant option
  
3. **Scope queries appropriately** - Query within known elements
  
4. **Handle empty results** - Check for `null` or empty NodeLists
  
5. **Combine selectors wisely** - Balance specificity and performance
  
6. **Use modern methods** - Favor query selectors for flexibility
  

---

## References

- [Document: querySelector() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
  
- [Document: querySelectorAll() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
  
- [CSS selectors - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)
  
- https://javascript.info/dom-navigation
  
- https://stackoverflow.com/questions/21193437/can-i-select-multiple-tags-using-getelementsbytagname/21193495#21193495
  

---

# Module 06 - 115:    DOM Fundamentals

## Event Listeners

---

1. Core Concept
  
2. Event Types Hierarchy
  
3. Key methods and Properties
  
4. Practical Usage Scenarios
  
5. Advanced Techniques
  

## 1.    Core Concepts

Event listeners are the foundation of interactive web applications.

They allow JavaScript to "listen" for user interactions and respond accordingly.

- Attachable to any DOM element
  
- Can respond to various event types (clicks, hovers, keypresses, etc.)
  
- Enable dynamic, responsive user interfaces
  
- Execute callback functions when events occur
  

---

## 2. Event Types Hierarchy

**Common Event Categories:**

1. Mouse Events
  
  - `click`, `mouseover`, `mouseout`, `mousedown`, `mouseup`
2. Keyboard Events
  
  - `keydown`, `keyup`, `keypress`
3. Form Events
  
  - `submit`, `change`, `focus`, `blur`
4. Window Events
  
  - `load`, `resize`, `scroll`

---

## 3. Key Methods and Properties

### Event Listener Methods:

| Method | Description |
| --- | --- |
| `addEventListener()` | Attaches an event handler to an element |
| `removeEventListener()` | Removes an event handler |
| `dispatchEvent()` | Triggers an event programmatically |

### Event Object Properties:

| Property | Description |
| --- | --- |
| `target` | Element that triggered the event |
| `type` | Type of event (e.g., "click") |
| `clientX/clientY` | Mouse pointer coordinates |
| `keyCode` | Which keyboard key was pressed |
| `preventDefault()` | Stops default browser behavior |

---

## 4.    Practical Usage Scenarios

### Basic Click Event Example

```js
const button = document.querySelector('#myButton');

button.addEventListener('click', (event) => {

    console.log('Button clicked!', event.target);

});
```

### Hover Effects with Mouse Events

```js
const images = document.querySelectorAll('.site-img');

images.forEach(img => {

    img.addEventListener('mouseover', (event) => {
        const caption = event.target.nextElementSibling;
        caption.classList.add('show');
    });

    img.addEventListener('mouseout', (event) => {

        const caption = event.target.nextElementSibling;
        caption.classList.remove('show');

    });
});
```

### Event Delegation Pattern

```js
document.querySelector('#parent').addEventListener('click', (event) => {

    if (event.target.classList.contains('child')) {
        console.log('Child element clicked');

    }
});
```

---

## 5.     Advanced Techniques

### Custom Events

```js
// Create and dispatch custom events
const customEvent = new CustomEvent('build', { detail: { time: Date.now() } });
element.dispatchEvent(customEvent);

// Listen for custom events
element.addEventListener('build', (e) => {

    console.log('Custom event triggered at', e.detail.time);

});
```

### Once Option

```js
// Listener that automatically removes itself after first execution
button.addEventListener('click', () => {

    console.log('This will only run once');

}, { once: true });
```

---

Performance Considerations

1. **Event Delegation**: Use parent elements to handle events for multiple children
  
2. **Debouncing**: Limit rapid-fire events like scroll/resize
  
3. **Cleanup**: Remove unused event listeners to prevent memory leaks
  
4. **Passive Events**: Mark scroll/touch events as passive for better performance
  

## Best Practices

1. **Use Semantic Event Names**: Choose the most specific event type needed
  
2. **Separate Concerns**: Keep event logic separate from DOM queries
  
3. **Early Removal**: Clean up event listeners when elements are removed
  
4. **Error Handling**: Always account for potential null elements
  
5. **Accessibility**: Ensure keyboard equivalents for mouse events
  

### Common Pitfalls

1. **Memory Leaks**: Forgetting to remove event listeners
  
2. **Too Many Listeners**: Attaching individual listeners to many elements
  
3. **Event Bubbling**: Not understanding propagation phases
  
4. **Scope Issues**: Losing `this` context in callbacks
  

---

## References

- [Event reference | MDN](https://developer.mozilla.org/en-US/docs/Web/Events)
  
- [EventTarget: addEventListener() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
  
- [Creating and triggering events - Event reference | MDN](https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events)
  
- https://javascript.info/events
  
- https://javascript.info/event-delegation
  

---

# Module 06-116:     DOM Fundamentals

## Inline `onclick` VS `addEventListener`

---

1. Core Concepts
  
2. Inline `onclick` Approach
  
3. `addEventListener` Approach
  
4. Key Differences
  
5. When to Use Each
  

---

## 1.     Core Concepts

Event handling in JavaScript can be done through:

- **Inline event handlers**: HTML attribute-based (`onclick`, `onmouseover`, etc.)
  
- **DOM event listeners**: Programmatic attachment (`addEventListener`)
  

While both methods achieve the same end result, `addEventListener` provides a more robust and maintainable approach to event handling in modern web applications.

The separation of concerns it enables makes code easier to debug, test, and extend as applications grow in complexity.

---

## 2.    Inline `onclick` Approach

### Implementation

```html
<button onclick="handleClick()">Click Me</button>

<script>
function handleClick() {
  console.log('Button clicked!');
}
</script>
```

---

## 3.     `addEventListener` Approach

### Implementation

```js
<button id="myButton">Click Me</button>

<script>
document.getElementById('myButton').addEventListener('click', function() {

    console.log('Button clicked!');

});
</script>
```

### Characteristics

- Separates behavior from structure
  
- Allows multiple handlers per event
  
- More flexible event control
  
- Better for maintainable code
  

---

## 4.     Differences

| Feature | Inline onclick | addEventListener |
| --- | --- | --- |
| Separation of concerns | Poor (mixes HTML/JS) | Excellent |
| Multiple handlers | No  | Yes |
| Event phases | Only bubbling | Can use capturing/bubbling |
| Removal | Difficult | Easy (`removeEventListener`) |
| Dynamic elements | Works | Requires delegation |
| Best practice | Generally avoided | Preferred |

## 5.    When to Use Each

### Use Inline onclick When:

- Quickly prototyping
  
- Working with simple, one-off events
  
- Needing to pass specific parameters directly
  
- Working with frameworks that recommend it (like Vue.js)
  

### Use addEventListener When:

- Building production applications
  
- Needing multiple event handlers
  
- Requiring event propagation control
  
- Maintaining clean separation of concerns
  
- Working with dynamically created elements
  
  ---
  

## Best Practices

- **Prefer addEventListener** for most production scenarios
  
- **Use event delegation** for dynamic content
  
  ```js
  document.body.addEventListener('click', function(e) {
  
      if (e.target.matches('.dynamic-element')) {
  
          // Handle click
  
      }
  });
  ```
  
- **Clean up listeners** when no longer needed
  
  ```js
  function handleClick() { /* ... */ }
  
  // Add listener
  button.addEventListener('click', handleClick);
  
  // Later remove it
  button.removeEventListener('click', handleClick);
  ```
  
- **Avoid inline JS** in large applications
  
- **Consider framework approaches** (React's synthetic events, Angular's event binding)
  

---

## Performance Considerations

1. **Inline handlers** have slightly faster initial setup
  
2. **addEventListener** scales better with multiple handlers
  
3. **Event delegation** reduces memory usage for many elements
  
4. **Throttle/debounce** expensive handlers
  
  ```js
  window.addEventListener('resize', debounce(handleResize, 200));
  ```
  

---

## References

- [Event reference | MDN](https://developer.mozilla.org/en-US/docs/Web/Events)
  
- https://javascript.info/introduction-browser-events
  
- [Document Object Model Events](https://www.w3.org/TR/DOM-Level-2-Events/events.html)
  
- [Optimize JavaScript execution  |  Articles  |  web.dev](https://web.dev/articles/optimize-javascript-execution)
  
- [Event Delegation](https://davidwalsh.name/event-delegate)
  

---

# Module 06 - 117:     DOM Fundamentals

## Editing CSS styles in VanillaJS

---

1. Accessing DOM Elements
  
2. Modifying Styles
  
3. Dynamic Style Changes with Events
  

---

## 1.     Accessing DOM Elements

To modify styles, we first need to select elements:

```js
// By ID (returns single element)
const header = document.getElementById('header');


// By class (returns HTMLCollection)
const buttons = document.getElementsByClassName('btn');


// By tag (returns HTMLCollection)
const images = document.getElementsByTagName('img');


// Modern selectors (returns NodeList)
const cards = document.querySelectorAll('.card');
```

## 2.     Modifying Styles

There are two main approaches to change styles:

### A. Inline Styles (style property)

```js
const element = document.querySelector('.site-img');

// Single property
element.style.backgroundColor = 'blue';

// Multiple properties
Object.assign(element.style, {
    border: '2px solid red',
    borderRadius: '8px',
    padding: '20px'
});

// CamelCase for CSS properties
element.style.fontSize = '24px'; // Not 'font-size' and WITHOUT closing ;
```

### B. CSS Class Manipulation

```js
// Add/remove classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('visible');

// Replace classes
element.classList.replace('old-class', 'new-class');
```

---

## 3.    Dynamic Style Changes with Events

Example with mouse events

```js
const laptop = document.querySelector('.site-img');

// Mouse enter event
laptop.addEventListener('mouseenter', (e) => {

    e.target.style.borderRight = '40px solid red';
     e.target.style.transition = 'border-color 0.3s ease';

});



// Mouse leave event
laptop.addEventListener('mouseleave', (e) => {

    e.target.style.borderRight = '40px solid transparent';

});
```

---

## Best Practices

1. **Prefer classes over inline styles** for maintainability
  
2. **Use CSS transitions** for smooth animations
  
3. **Cache selectors** when reusing elements
  
4. **Consider performance** with frequent style changes
  
5. **Use CSS custom properties** for dynamic values
  
  ```js
  // Set variable
  document.documentElement.style.setProperty('--main-color', '#ff0000');
  
  // Use in CSS: var(--main-color)
  ```
  

---

## References

- [HTMLElement: style property - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
  
- [CSSStyleDeclaration - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration)
  
- https://javascript.info/styles-and-classes
  
- [CSS versus JavaScript animations | Articles | web.dev
  

---

# Module 06 - 118:    DOM Fundamentals

## Toggle function

---

1. Core Concepts
  
2. Hierarchy of Class manipulation methods
  
3. Key methods and Properties
  
4. Practical Usage Scenarios
  
5. Advanced Techniques
  
6. Best Practices, Considerations
  

---

## 1.     Core Concepts

The `classList.toggle()` method provides an elegant way to switch between adding and removing a 
class name from an element. This is particularly useful for implementing
 show/hide functionality, theme switching, or any binary state changes 
in your UI.

- Automatically adds the class if not present
  
- Removes the class if already present
  
- Returns `true` if class is added, `false` if removed
  
- Can accept an optional second boolean parameter to force add/remove
  

---

## 2.     Hierarchy of Class Manipulation Methods

**Element.classList Methods:**

1. `add()` - Adds one or more class names
  
2. `remove()` - Removes one or more class names
  
3. `toggle()` - Toggles between adding/removing a class
  
4. `contains()` - Checks if class exists
  
5. `replace()` - Replaces one class with another
  

---

## 3.     Key Methods and Properties

### toggle() Method Parameters:

| Parameter | Description | Required |
| --- | --- | --- |
| `className` | The class to toggle | Yes |
| `force` | Boolean to force add/remove | No  |

### Return Value

- `true` if class is now present
  
- `false` if class is now absent
  

---

## 4.     Practical Usage Scenarios

### Basic Toggle Example

```js
const button = document.getElementById('toggleBtn');
const element = document.getElementById('content');

button.addEventListener('click', () => {

    element.classList.toggle('active');

});
```

### Force Parameter Usage

```js
// Always add the class (won't remove if present)
element.classList.toggle('active', true);

// Always remove the class (won't add if absent)
element.classList.toggle('active', false);
```

### Multiple Class Toggle

```js
// Toggle multiple classes
function toggleTheme() {

    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

}
```

---

## 5.     Advanced Techniques

### Toggle with Custom Properties

```js
// Toggle with data attributes
button.addEventListener('click', () => {

    const isActive = element.classList.toggle('active');
    element.dataset.state = isActive ? 'active' : 'inactive';

});
```

### Animation Callbacks

```js
element.classList.toggle('animate');

element.addEventListener('transitionend', () => {

    console.log('Toggle animation complete');

});
```

### Toggle with Storage

```js
// Persist toggle state
button.addEventListener('click', () => {

    const isDark = document.body.classList.toggle('dark-mode');

    localStorage.setItem('darkMode', isDark);

});



// Initialize from storage
if (localStorage.getItem('darkMode') === 'true') {

      document.body.classList.add('dark-mode');

}
```

---

## Best Practices

1. **Semantic Class Names**: Use descriptive class names (e.g., 'hidden' vs 'x1')
  
2. **CSS-Only Alternatives**: Consider pure CSS solutions for simple cases
  
3. **Accessibility**: Ensure toggled states are accessible (ARIA attributes)
  
4. **State Management**: Track toggle state when needed for application logic
  
5. **Performance**: Debounce rapid toggle events when necessary
  

## Performance Considerations

1. **Batch Operations**: Toggle multiple classes in one operation when possible
  
2. **CSS Transitions**: Use with CSS transitions for smooth animations
  
3. **Event Delegation**: Use for multiple toggle buttons
  
4. **DOM Reads/Writes**: Minimize layout thrashing when toggling many elements
  

## Common Pitfalls

1. **Over-toggling**: Accidentally calling toggle multiple times in event chain
  
2. **Missing Classes**: Forgetting to define the CSS for toggled classes
  
3. **Specificity Issues**: CSS specificity overriding toggled styles
  
4. **Animation Conflicts**: Forgetting to handle interrupted transitions
  
5. **Memory Leaks**: Not cleaning up event listeners on dynamic elements
  

---

## References

- [Element: classList property - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
  
- [DOMTokenList: toggle() method - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle)
  
- [Using CSS transitions - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
  
- [ARIA - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
  
- https://javascript.info/dom-attributes-and-properties#dom-tokenlist
  

-

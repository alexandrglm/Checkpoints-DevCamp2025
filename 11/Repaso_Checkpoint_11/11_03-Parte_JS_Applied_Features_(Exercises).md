# Resumen - JavaScript 17:         Applied JavaScript Features

## Propósito

**¿Qué son las "Características Aplicadas" (Applied Features)?**

Este módulo se enfoca en **aplicar conocimientos previos de JavaScript en situaciones reales y prácticas**. No se trata de aprender nuevos conceptos teóricos, sino de:

- Combinar diferentes técnicas de JS en proyectos funcionales
- Resolver problemas comunes de desarrollo web
- Crear componentes reutilizables y escalables
- Implementar patrones de diseño en el frontend
- Desarrollar funcionalidades que mejoren la experiencia del usuario

| #   | Guía | Tema | Conceptos Clave |
| --- | --- | --- | --- |
| 06-119 | Ejercicio Contador de Caracteres | DOM - `.eventListener` - `this` |     |
| 06-120 | Ejercicio: Comportamiento Compartido de Funciones | Refactorización - Class/this - DRY |     |
| 06-121 | Ejercicio:     Atajos de Teclado (HotKeys) | DOM |     |
| 06-122 | Ejercicio:     Creación Dinámica de Elements HTML | Manejo de eventos |     |

---

## Módulo 06-119: Contador de Caracteres

### Conceptos Clave

Implementación de un contador de caracteres en tiempo real, similar al de Twitter, que
 muestra los caracteres restantes y deshabilita el input al alcanzar el límite.

### Técnicas Principales

- **Manipulación del DOM**: Uso de `.innerHTML` para actualizar el contador.
  
  - - Selección de elementos: `document.querySelector('.clase')`
    - Modificación de contenido: `elemento.innerHTML`
    - Control de estados: `elemento.disabled`
- **Eventos**: `keyup` para detectar cuando se suelta una tecla.
  
  - - `keyup` vs `keydown`: Diferencias en el momento de ejecución
    - `onkeyup`: Se ejecuta al soltar la tecla (mejor para entrada final)
    - `keydown`: Se ejecuta al presionar (puede capturar estados intermedios)
- **Estado de elementos**: `.disabled` para deshabilitar el input.
  
- **Contexto `this`**: En event handlers, `this` se refiere al elemento que disparó el evento.
  

### Ejemplo Básico

```js
const msgInput = document.querySelector('.msgInput');
const msgCounter = document.querySelector('.msgCounter');
const maxValue = 144;

// Función de validación
const getCurrentContentLength = (content, maxValue) => {
    return content.length <= maxValue;
}

// Manejador de evento
msgInput.onkeyup = function() {
    const remaining = maxValue - this.value.length;
    msgCounter.innerHTML = remaining;

    if (!getCurrentContentLength(this.value, maxValue - 1)) {
        msgInput.disabled = true;
    }
}
```

#### Mejoras Avanzadas:

- **Múltiples contadores:** Usar `querySelectorAll` y `forEach`
- **Retroalimentación visual:** Añadir clases CSS para estados de error/éxito
- **Debouncing:** Optimizar rendimiento con retrasos en la ejecución
- **Accesibilidad:** Regiones ARIA live para lectores de pantalla

### Preguntas de Estudio

1. ¿Por qué se usa `keyup` en lugar de `keydown` para el contador de caracteres?
  
2. ¿Qué representa `this` en el event handler `onkeyup`?
  
3. ¿Cómo se deshabilita un elemento de input mediante JavaScript?
  
4. ¿Qué ventaja tiene separar la lógica de validación en una función aparte?
  
5. ¿Cómo manejarías el pegado de texto (paste) en el contador?
  
6. ¿Qué es un "off-by-one error" y cómo afecta al contador?
  
7. ¿Por qué es importante proveer feedback visual al usuario?
  
8. ¿Cómo implementarías múltiples contadores en una misma página?
  
9. ¿Qué es el debouncing y cómo mejoraría este contador?
  
10. ¿Cómo harías accesible este contador para screen readers?
  

---

## Módulo 06-120: Comportamientos Reutilizables

### Conceptos Clave

Principio DRY (Don't Repeat Yourself) aplicado a funciones JavaScript para crear 
comportamientos compartidos entre diferentes elementos.

### Técnicas Principales

- **Funciones parametrizadas**: Crear funciones genéricas que acepten configuraciones.
  
- **Reutilización de lógica**: Una sola función de validación para múltiples campos.
  
- **Closures**: Preservar el acceso a parámetros dentro de event handlers.
  

### Evolución del Código

**Antes (código específico):**

```js
msgInput.onkeyup = function() {

    msgCounter.innerHTML = maxValue - this.value.length;
    // Lógica específica para un solo elemento
}
```

### **Después (función reutilizable):**

```js
const allInputsFieldLengthValidator = (textField, counter, maxCount) => {

    textField.onkeyup = function() {
        counter.innerHTML = maxCount - this.value.length;

        if (!getCurrentContentLength(this.value, maxCount - 1)) {
            textField.disabled = true;
        }
    }
}

// Uso para múltiples campos
allInputsFieldLengthValidator(msgInputOne, msgCounterOne, 144);
allInputsFieldLengthValidator(msgInputTwo, msgCounterTwo, 20);
```

#### Técnicas Avanzadas:

1. **Objeto de Configuración:
  
  ```js
  const createCharacterCounter = (config) => {
      const { input, counter, max, warningAt } = config;
      // Lógica configurable
  }
  ```
  
2. **Registro Dinámico:**
  
  ```js
  function registerCharacterCounters() {
      document.querySelectorAll('[data-character-counter]').forEach(container => {
          // Auto-registro basado en atributos HTML
      });
  }
  ```
  
3. **Eventos Personalizados:**
  
  ```js
  textField.dispatchEvent(new CustomEvent('limitReached', {
      bubbles: true,
      detail: { max: maxCount }
  }));
  ```
  

### Preguntas de Estudio

1. ¿Qué significa el principio DRY en programación?
  
2. ¿Cómo beneficia la parametrización a la reutilización de código?
  
3. ¿Por qué es importante mantener el contexto `this` en los event handlers?
  
4. ¿Cómo implementarías un sistema de advertencia cuando quedan pocos caracteres?
  
5. ¿Qué ventajas tiene usar un objeto de configuración en lugar de múltiples parámetros?
  
6. ¿Cómo registrarías dinámicamente contadores para elementos creados después de cargar la página?
  
7. ¿Qué son los Custom Events y cómo podrían usarse aquí?
  
8. ¿Cómo manejarías la limpieza de event listeners para evitar memory leaks?
  
9. ¿Qué es el "Single Responsibility Principle" y cómo aplica aquí?
  
10. ¿Cómo documentarías adecuadamente una función reutilizable?
  

---

## Módulo 06-121: HotKeys en JavaScript

### Conceptos Clave

Implementación de atajos de teclado (hotkeys) usando eventos del teclado en JavaScript puro, para mejorar la experiencia de usuario y proporcionar acceso rápido a funciones.

### Técnicas Principales

- **Eventos de teclado**: `keydown`, `keyCode` vs `key`.
  
- **Teclas modificadoras**: `ctrlKey`, `shiftKey`, `altKey`, `metaKey`.
  
- **Prevención de comportamientos por defecto**: `preventDefault()`.
  

###

### Implementación Básica

```js
const hotKeys = (e) => {
    // Compatibilidad con navegadores antiguos
    const event = window.event ? window.event : e;

    // Verificar Ctrl+B
    if (event.keyCode === 66 && event.ctrlKey) {
        const searchBar = document.querySelector('#searchBar');
        searchBar.focus();
    }
}

document.onkeydown = hotKeys;
```

### Implementación Moderna (Recomendada):

```js
document.addEventListener('keydown', (e) => {

    if (e.key === 'b' && e.ctrlKey) {
        e.preventDefault(); // Prevenir comportamiento por defecto
        document.querySelector('#searchBar').focus();
    }
});
```

#### Propiedades de Eventos de Teclado:

| Propiedad | Descripción |
| --- | --- |
| `keyCode` | Código numérico (obsoleto pero compatible) |
| `key` | Representación en texto (moderno) |
| `ctrlKey` | Estado de la tecla Ctrl |
| `shiftKey` | Estado de la tecla Shift |
| `altKey` | Estado de la tecla Alt |
| `metaKey` | Tecla Command (Mac) |

#### Sistema Avanzado de Atajos:

```js
class HotkeyManager {

    constructor() {
        this.handlers = [];
        document.addEventListener('keydown', this.handleEvent.bind(this));
    }

    register(combination, callback) {
        this.handlers.push({ combination, callback });
    }

    handleEvent(e) {
        this.handlers.forEach(({ combination, callback }) => {
            const keysMatch = combination.keys.toLowerCase() === e.key.toLowerCase();
            const modifiersMatch = 
                (combination.ctrl === undefined || combination.ctrl === e.ctrlKey) &&
                (combination.shift === undefined || combination.shift === e.shiftKey);

            if (keysMatch && modifiersMatch) {
                e.preventDefault();
                callback(e);
            }
        });
    }
}
```

### Preguntas de Estudio

1. ¿Cuál es la diferencia entre `keyCode` y `key`?
  
2. ¿Por qué es recomendable usar `addEventListener` en lugar de `onkeydown`?
  
3. ¿Cómo detectarías una combinación de Ctrl+Shift+S?
  
4. ¿Qué hace `preventDefault()` y cuándo es necesario usarlo?
  
5. ¿Cómo manejarías conflictos entre hotkeys de diferentes partes de la aplicación?
  
6. ¿Qué consideraciones de accesibilidad debes tener con los hotkeys?
  
7. ¿Cómo implementarías un sistema de hotkeys configurable?
  
8. ¿Qué son los ARIA live regions y cómo ayudarían aquí?
  
9. ¿Cómo manejarías hotkeys específicos para diferentes contextos?
  
10. ¿Por qué es importante documentar los hotkeys disponibles?
  

---

## Módulo 06-122: Creación Dinámica de Elementos HTML

### Conceptos Clave

Creación e inserción de elementos HTML dinámicamente usando métodos del DOM para aplicaciones interactivas sin necedidad de recargar la página.

#### Ventajas de la Creación Dinámica:

1. **Rendimiento:** Reduce el tamaño inicial de la página
2. **Interactividad:** Permite actualizaciones en tiempo real
3. **Flexibilidad:** Adapta la UI según acciones del usuario
4. **Gestión de Estado:** Mantiene el estado sin refrescos

### Técnicas Principales

- **Creación de elementos**: `createElement()`, `createTextNode()`.

| Método | Descripción | Retorna |
| --- | --- | --- |
| `createElement()` | Crea nuevo elemento DOM | Element |
| `createTextNode()` | Crea nodo de texto | TextNode |
|     |     |     |

- **Inserción en DOM**: `appendChild()`, `insertBefore()`.

| Método | Descripción | Posición |
| --- | --- | --- |
| `appendChild()` | Añade como último hijo | Dentro |
| `insertBefore()` | Inserta antes de referencia | Adyacente |
| `replaceChild()` | Reemplaza hijo existente | En lugar |
| `insertAdjacentHTML()` | Analiza e inserta HTML | Flexible |

- **DocumentFragment**: Para mejor rendimiento con múltiples inserciones.

| Método | Descripción | Retorna |
| --- | --- | --- |
| `createDocumentFragment()` | Crea subárbol DOM ligero | DocumentFragment |

### Ejemplo Básico

```js
function crearMensajeChat(texto) {

    const div = document.createElement('div');
    div.className = 'mensaje-chat';
    div.appendChild(document.createTextNode(texto));
    document.querySelector('.chat').appendChild(div);
}
```

### Proceso de Creación

```js
function createMessage(content) {
    // 1. Crear contenedor
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message');

    // 2. Crear contenido
    const textNode = document.createTextNode(content);

    // 3. Ensamblar estructura
    messageDiv.appendChild(textNode);

    // 4. Insertar en el DOM
    const chatContainer = document.querySelector('.chat-container');
    chatContainer.insertBefore(messageDiv, chatContainer.firstChild);
}
```

---

#### Optimización con Document Fragments

```js
const fragment = document.createDocumentFragment();

// Construir estructura compleja en memoria
for (let i = 0; i < 100; i++) {
    const item = document.createElement('div');
    fragment.appendChild(item);
}

// Una sola operación DOM
container.appendChild(fragment);
```

## Buenas Prácticas Generales

### Rendimiento:

- Usar Document Fragments para múltiples inserciones
- Debouncing para eventos frecuentes
- Minimizar accesos al DOM
- RequestAnimationFrame para actualizaciones visuales

### Seguridad:

- Preferir `createTextNode()` sobre `innerHTML` para prevenir XSS
- Validar entrada del usuario
- Sanitizar contenido dinámico

### Accesibilidad:

- Añadir atributos ARIA dinámicamente
- Anunciar cambios con regiones live
- Mantener navegación por teclado
- Asegurar contraste de colores

### Mantenimiento:

- Separación de responsabilidades
- Nomenclatura descriptiva
- Documentación de interfaces públicas
- Gestión de memoria (limpiar listeners no utilizados)

---

## Errores Comunes a Evitar

1. **Problemas de Scope:** Confusión con el contexto `this`
2. **Fugas de Memoria:** Listeners no removidos
3. **Conflictos de Eventos:** Múltiples manejadores interfiriendo
4. **Sobre-abstracción:** Crear complejidad innecesaria
5. **Rendimiento:** Múltiples operaciones DOM síncronas
6. **Accesibilidad:** Romper atajos de teclado nativos
7. **Seguridad:** Inyección de código malicioso

### Preguntas de Estudio

1. ¿Cuál es la diferencia entre `createElement` y `createTextNode`?
  
2. ¿Por qué es mejor usar `createElement` que `innerHTML` en muchos casos?
  
3. ¿Qué es un DocumentFragment y cuándo deberías usarlo?
  
4. ¿Cómo insertarías un elemento en una posición específica del DOM?
  
5. ¿Qué métodos existen para insertar elementos de forma relativa?
  
6. ¿Cómo manejarías la creación de estructuras HTML complejas dinámicamente?
  
7. ¿Qué es el "layout thrashing" y cómo evitarlo al manipular el DOM?
  
8. ¿Cómo asegurarías la accesibilidad en elementos creados dinámicamente?
  
9. ¿Qué técnicas existen para mejorar el rendimiento en inserciones masivas?
  
10. ¿Cómo limpiarías referencias a elementos eliminados para evitar memory leaks?
  

---

###

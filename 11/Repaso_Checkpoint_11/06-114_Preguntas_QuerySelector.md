# Module 06 - 114:     DOM Fundamentals

## Selectores de Consulta (QuerySelectors)


### 1. ¿Cuál es la diferencia entre `querySelector()` y `querySelectorAll()`?

* `querySelector()`hace referencia al elemento específico al que se llama.Sólo retorna el primer elemento que encuentre que haga coincidencia (o *null* si no existe).

* `querySelectorAll()` incluiría todos los elementos del DOM que contengan dicho ID, class, o elemento seleccinado. Retornará una NodeList estática, con todos los elementos a los que refiera.


### 2. ¿Qué tipo de selectores CSS se pueden usar con estos métodos?

Todos tipo de selectores CSS, excepto los pseudo-elementos (:hover, ::before, ::after):

- ID's
- Classes
- Atributos
- Combinadores / Pseudo-clases

```js

document.querySelector('#elID')
document.querySelector('.laClass')
document.querySelector('div[data-atributo]')
document.querySelector('navbar > p:first-child')

```

### 3. ¿Por qué `querySelectorAll()` devuelve una NodeList en lugar de un array?

Porque NodeList es un modelo de colección optimizado para el DOM (no tiene métodos de array como filter, map, slice, etc).

Hay dos tipos de NodeList:

 * Estática -> (como las de QuerySelectors) -> **No se actualiza si cambia el DOM**

 * Dinámica -> (como las de GetElementsBy...) -> Se actualizan


Usar array's para el DOM retireraría o repetiría elementos, como aperturas y cierres de tags, del elemento al que hace referencia y, además, con un array no se podría clarificar los elementos padres / hijos como una NodeList sí puede hacer (NodeList está diseñado para respetar la jerarquía de los elementos a los que refiere).

Sí que es posible, en cambio, convertir un NodeList a Array, y viceversa:
```js
const elementos = Array.from(document.querySelectorAll('.clase'))
```


### 4. ¿Cuándo es mejor usar `getElementById()` en lugar de `querySelector()`?

Cuando simplemente necesitamos "señalar" un elemento por su Id llevado a objeto para, posteriormente, hacer las manipulaciones o trabajos deseados.

* `getElementById('#laID')` sólo busca ID's -> ergo, consume menos recursos.
* La sintaxis no deja lugar a confusión, es más explícita.


### 5. ¿Cómo se seleccionan múltiples tipos de elementos con un solo selector?

La sintáxis sería un string separando por comas los elementos a los que refiera:

```js
const dom = document.querySelectorAll('p, div, p, div, div, h3, button')
```

A partir de esta selección, podríamos hacer las manipulaciones pertinentes:
```js
dom.forEach( element => element.style.color = 'red'  )
```


### 6. ¿Qué significa que una colección sea "en vivo" vs "estática"?

Referido al NodeList, ser estática significa que no será actualizada si el DOM se manipula (como las que pertenecen a querySelector). Son una muestra del DOM en el momento de la consulta.

Dináminas ("en vivo"), en cambio, sí.




### 7. ¿Cómo se puede limitar el área de búsqueda de un selector?

* Anclándolo a un elemento padre


* Evitando usar selectores globales, o no usando contenedores genéricos (div, a secas)



### 8. ¿Cuáles son las consideraciones de rendimiento al usar selectores complejos?

* Se puede reusar consultas ya hechas en nuevos objetos, para reusar después.
* El uso de selectores muy específicos actúa en detrimento del rendimiento; selectores más generales dan resultados antes (aunque menos filtrado).


### 9. ¿Cómo se manejan los resultados vacíos en las consultas?
Pues, simplemente, se sigue retornando un NodeList, pero vacío.

* `querySelector()` -> _null_
* `querySelectorAll()` -> Retorna una NodeList vacía

### 10. ¿Qué ventajas tienen los selectores de consulta sobre los métodos tradicionales?

* Más flexibles -> Usan sintáxis CSS (ID's, Classes, Atributos, pseudoclases)
* Más precisos -> Permiten combinadores  (> < + ~ ...)
* Son el estándar, frente a getElements...




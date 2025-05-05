# Menu Dinner Bottega

****
## Puntos clave:

- Validaciones en todas las entradas: Cada prompt permite cancelar o validar.

- Estructura modular:
  
  - Cada categoría de plato y extra sigue este patrón:
  ```Mostrar opciones -> Validar -> Añadir al pedido -> Lanzar un comentario```

- Manejo centralizado de errores:
  
  - La clase Ayuda unifica respuestas y validaciones.

- Precio dinámico:
  
  ```js
  precio = esCena ? precio + 1.50 : precio;
  ```

- Los bucles while (true) son infinitos y solo se rompen al:
  
  - Seleccionar opción válida
  - Cancelar
  - Encontrar error no manejado

- La filosofía del código es S.R.P. (Single Responsibility Principle):
  
  - Cada bloque de código hace su función independientemente, y se interconecta con el resto de bloques de manera transversal para ejecutar el programa
    
    Pedido ->       Manejo de datos del pedido  
    Ayuda ->        Validaciones y errores  
    waitress() ->   Coordinador del flujo principal  

***


## Flujo de datos

| **Símbolo**         | **Significado**       |
| ------------------- | --------------------- |
| `#`  Rectángulo     | Acción principal      |
| `*`  Rombo          | Decisión / Validación |
| `->` Flecha         | Flujo del programa    |
| `(i)` `(f)` Circulo | Inicio / Fin          |
| `!`                 | Elemento importante   |

```
# (i) INICIO

    ->    # Mostrar prompt: "¿Cuál es su nombre?"

        * Si Cancelar → # Ayuda.cancelar() → # Mostrar mensaje de despedida → (f) FIN
        * Si válido → # Guardar nombre


    ->    # Mostrar prompt: "¿Hora actual? (HH:mm)"

        * Si Cancelar → # Ayuda.cancelar() → # Mostrar mensaje de despedida → (f) FIN
        * Si válido → # Guardar hora


    ->    # Determinar menú según hora:

        * 6-11h → # Menú Desayuno
        * 13-15h → # Menú Comida
        * 20-23h → # Menú Cena (+1.50€)

        *  Otros → # Mostrar "Cerrado" → (f) FIN


    ->    ! Bucle para 3 categorías de platos:
        ->    # Mostrar opciones de plato (ej: primeros)

            * Si Cancelar → # Ayuda.cancelar() → (f) FIN
            * Si válido → # Añadir al pedido + comentario random

    ->  # Repetir para segundo y tercero


    ->    * Si es Comida/Cena → ! Bucle de extras:
        ->   # Mostrar opciones de extras
            ->
                * Si Cancelar → # Ayuda.cancelar() → (f) FIN
                * Si "Terminar" → # Salir del bucle
                * Si válido → # Añadir extra + comentario
        -> # Repetir hasta que elija "Terminar"


    -> # Mostrar resumen del pedido
        -> # Listar items + total + mensaje de despedida → (f) FIN


    ->  ! MANEJO DE ERRORES GLOBAL

        * Si error conocido → # Mostrar mensaje específico → (f) FIN
        * Si error desconocido → # Mostrar mensaje genérico → (f) FIN
```

***

## Puntos de mejora

Muchos. 
- Añadir numeración a los platos a mostrar con un forEach => key, y aceptar validación de selección por numeral o texto.
- Usar .find() de forma que no haga falta introducir todo el nombre de un plato.
- Usar .some() en vez de find, para encontrar alguno de los platos (sólo es funcional visualmente cuando hay GUI)
- Añadir "Extras" al mismo nivel que "Desayunos" "Comidas_Cenas" para reducir código, añadiendo un `tieneExtra = true` para los casos donde sí deben aparecer.

***

## Referencias

* [GitHub - ryanmcdermott/clean-code-javascript: Clean Code concepts adapted for JavaScript](https://github.com/ryanmcdermott/clean-code-javascript?tab=readme-ov-file#classes)

* https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design#single-responsibility-principle

* [Array.prototype.map() - JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

* [Array.prototype.find() - JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

* [How to use map() filter() reduce() | JavaScript Array Methods Tutorial - YouTube](https://www.youtube.com/watch?v=PojpwEbOQJg)



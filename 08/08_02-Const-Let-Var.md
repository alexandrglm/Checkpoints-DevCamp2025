# 08-02:    ¿Cuáles son las diferencias entre `const`, `let` y `var`?

En JavaScript, los objetos, los datos, deben ser almacenados en variables.

Existen dos tipos y un sub-tipo de variables, cada uno con sus propiedades y atributos.

Estas son Variables, y Constantes, `const`. Dentro de variables, tenemos tanto `var` como `let`.

1. `const`
2. `var`
3. `let`

Sabemos que, la mayor de las diferencias entre Constantes y Variables(let/var) pueden ser clasificadas:

#### - Por Alcance.

* `var`: Alcance global, de función. Son accesibles en todo el código, o función donde se hayan declarado, incluso desde fuera de bloques condicionales, bucles, etc.

* `let`, y `const`: Tienen alcance de bloque `{}`. Sólo son accesibles desde dentro del bloque de código donde se hayan declarado.

#### - Por Mutabilidad (Redefinición / Reasignación, o no)

* `var`: Puede ser redefinida y reasignada dentro del mismo alcance.
* `let`: No puede ser redefinida, pero sí reasignada.
* `const`: No puede ser ni redefinida, ni reasignada. 

Las constantes no hacen que un objeto sea inmutable al 100% pues sus propiedades internas sí pueden ser modificadas, pero su referencia, el nombre de dicha constante, sí será inmutable, inamovible.

#### - Por Instanciación (Hoisting -> Elevación/Inicialización).

* `var`: Es Hoisted ( puede ser declarada después de haber sido invocada). Inicia en `undefined`, no dará error
* `let` / `const`: No son Hoisted. Invocar dicho objeto antes de ser declarado acabará en error de ejecución.

|                    | `var`                  | `let`                  | `const`                       |
| ------------------ | ---------------------- | ---------------------- | ----------------------------- |
| **Alcance**        | *Global / Función*     | *Bloque*               | *Bloque*                      |
| **Redefinible**    | *Sí*                   | *No*                   | *No*                          |
| **Reasignable**    | *Sí*                   | *Sí*                   | *No (excepto objetos/arrays)* |
| **Hoisting**       | *Sí (con `undefined`)* | *Sí (sin inicializar)* | *Sí (sin inicializar)*        |
| **Inicialización** | *Opcional*             | *Opcional*             | *Obligatoria*                 |

****

## ¿Cuándo usar `const`, `var` o `let`?


1. Cuando sean valores fijos, se usará `const` por defecto. Se evitarán mutaciones accidentales de los datos.
2. Cuando se necesita una variable, por lo general, se evitará usar `var`en beneficio de `let`.

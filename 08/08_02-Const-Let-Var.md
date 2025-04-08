# 08-02:    ¿Cuáles son las diferencias entre `const`, `let` y `var`?


En JavaScript, los objetos, los datos, deben ser almacenados en variables.

Existen dos tipos y un sub-tipo de variables, cada uno con sus propiedades y atributos.

Estas son Variables, y Constantes, `const`. Dentro de variables, tenemos tanto `var` como `let`.

1. `const`
2. `var`
3. `let`

Sabemos que, la mayor de las diferencias entre Constantes y Variables(let/var) son:

#### - Por Alcance.
* `var`: Alcance global, de función. Son accesibles en todo el código, o función donde se hayan declarado, incluso desde fuera de bloques condicionales, bucles, etc.


* `let`, y `const`: Tienen alcance de bloque `{}`. Sólo son accesibles desde dentro del bloque de código donde se hayan declarado.


#### - Por Mutabilidad (Redefinición / Reasignación, o no)

* `var`: Puede ser redefinida y reasignada dentro del mismo alcance.



#### - Por Instanciación (Hoisting).



# 08-03 ¿Qué tipo de bucles hay en JavaScript?

JavaScript proporciona diversas estructuras de control para ejecutar código de forma repetitiva. Los bucles permiten automatizar tareas que implican múltiples pasos o elementos.

Los principales tipos de bucles en JavaScript son:

- `for`

- `for...in`

- `forEach()` (método de los arrays)

- `while`

- `do...while`

Cada uno es útil según el caso específico. A continuación, se describen con ejemplos claros.

---

## `for`

Se utiliza cuando se conoce de antemano el número de iteraciones, como recorrer un array o ejecutar una acción un número definido de veces.

```js
const players = ['Altuve', 'Bregman', 'Correa', 'Springer'];

for (let i = 0; i < players.length; i++) {
  console.log(players[i]);
}
```

---

## `while`

Se ejecuta **mientras** se cumpla una condición. Es ideal cuando no se sabe cuántas veces debe repetirse el bucle.

```js
const players = ['Altuve', 'Bregman', 'Correa', 'Springer'];

let i = 0;
while (i < players.length) {
  console.log(players[i]);
  i++;
}
```

---

## `do...while`

Es como el bucle `while`, pero garantiza que el código se ejecutará **al menos una vez**, incluso si la condición no se cumple desde el inicio.

```js
let i = 21;
do {
  console.log('Intentando acceder a un índice no válido:', i);
  i++;
} while (i < 4);
```

---

## `for...in`

Se utiliza para iterar sobre las **propiedades enumerables** de un objeto. Devuelve las **claves** (no los valores).

```js
const student = {
  name: 'Kristine',
  age: 12,
  city: 'Scottsdale'
};

for (let key in student) {
  console.log(`${key} => ${student[key]}`);
}
```

---

## `forEach()`

Es un método exclusivo de los arrays. Ejecuta una función una vez por cada elemento. No puede ser detenido con `break` o `continue`.

```js
const players = ['Altuve', 'Bregman', 'Correa', 'Springer'];

players.forEach(function(player) {
  console.log(player);
});
```

---

## Control de flujo: `break` y `continue`

### `break`

Se utiliza para **salir completamente del bucle**, incluso si la condición todavía se cumple.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // se interrumpe el bucle cuando i es igual a 5
  }
  console.log(i);
}
```

### `continue`

Se utiliza para **saltar una iteración específica** y continuar con la siguiente.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // salta la iteración cuando i es igual a 5
  }
  console.log(i);
}
```

> **¡Atención!*** El uso incorrecto de bucles sin condiciones claras puede derivar en bucles infinitos. Se debe asegurar la condición de salida se cumpla.

---

## Diferencias entre Bucles

|              | Cuándo usarlo                                      | Se puede detener (`break`) | Accede a índice/clave | Accede a valor |
| ------------ | -------------------------------------------------- | -------------------------- | --------------------- | -------------- |
| `for`        | *Iteraciones definidas / trabajar con índices*     | Sí                         | Sí                    | Sí             |
| `while`      | *Iteraciones indeterminadas con condición inicial* | Sí                         | Manual                | Sí             |
| `do...while` | *Al menos una ejecución garantizada*               | Sí                         | Manual                | Sí             |
| `for...in`   | *Iterar propiedades de un objeto*                  | Sí                         | Sí (clave)            | Sí             |
| `forEach()`  | *Recorrer arrays sin necesidad de índice*          | No                         | Sí (con callback)     | Sí             |

---

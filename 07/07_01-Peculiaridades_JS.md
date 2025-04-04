### 

# 7.1: ¿Qué diferencia a JavaScript de cualquier otro lenguaje de programación?

Características específicas de JavaScript:

1. Es un lenguaje interpretado, no compilado, es decir, se procesa directamente en tiempo de ejecución, habitualmente, en un navegador.

2. Es un lenguaje de tipado débil, dinámico. Esto quiere decir que una variable puede contener cualquier tipo de dato y, además, no se ha de especificar qué tipo de dato contiene en su declaración.
   
   Esto, si bien ofrece ventajas, como un desarrollo de código más rápido, contrasta con las ventajas que otros lengiajes de tipado fuerte (Como la verisón de JS compilado creada por Microsoft llamada TypeScript, C, o Java) de cara a depurar posibles errores en el códigop pues, ofreciendo capacidad de mutar el tipo de dato (*any*), podemos introducir errores en nuestro código si no manejamos correctamente el flujo de datos y, una función, o una parte de nuestro código, transforma y/o malinterpreta un valor detereminado.

3. Se podría decir no sólo que JavaScript es un lenguaje de programación orientado a objetos (No es Pascal, no es ensamblador), sino que es un lenguaje donde todo son objetos y los objetos la clase por excelencia de todo.
   
   Incluso las funciones son objetos, pueden manipularse, integrarse dentro de otros objetos como en variables, como argumentos de otras funciones, etc.

4. JavaScript se conecta fácilmente con otros programas, otros lenguajes de progración, API's, muy fácilmente, de manera asíncrona.

5. También funciona a la perfección manejando eventos (Clickados, pulsación de teclas, ...).

6. Tiene muchas particularidades que, de primeras, hacen pensar que es un lenguaje de programación que está roto:
   
   1. Null siempre es null, salvo cuando se busca el tipo de null.
      Ocurre similar con NaN, "Numero No Asignado". No se asigna valor pero se considera valor.
- ```js
  console.log(typeof null);    // object
  console.log(typeof NaN);    // number
  ```

- Los números en punto flotante están aparentemente rotos:
1. 1. ```js
      function sum(){
      
       aaaa = 0.12;
       bbbb = 0.02;
       return aaaa + bbbb
      
      }
      
      console.log(sum());         // 0.13999999999999999
      ```
      
      La realidad no es que estén rotos sino que, los números en coma flotante no pueden hacer una representación exacta de valores enteros, por lo que nos encontramos con estas casuísticas que suelen ser evitadas trabajando con magnitudes superiores para evitar decimales, o con otras librerías numéricas.

---

Por estas, y otras razones, JavaScript es un muy poderoso motor no sólo para funciones básicas en el front-end.

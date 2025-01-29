Voy respondiendo las preguntas:  

1. **¿Cuáles son algunas de las cosas que hacen que SCSS sea diferente de CSS? (coloca ejemplos):**  
* SaSS es un lenguaje preprocesado (que compila) para desarrollar CSS de forma más eficiente. Al ser un lenguaje preprocesado, existen tiempos de compilación y tiempos de ejecución, permitiendo un proceso de depuración más rápido.  
SaSS tiene varias evoluciones, hacia SCSS.

Las mayores diferencias entre CSS y SCSS:
- Evitar redundancias de código.
- Programar usando un lenguaje casi idéntido a Ruby, JS u otros lenguajes, con bucles, variables (constantes) que pueden ser reutilzadas (incluídas) en cualquier parte del código.
- 


2. **¿Qué es una variable SCSS? (porque crees que debes utilizarla pon un ejemplo de una variable, escribe una variable y como se pondría para utilizarla):**
Una variable es una porción de código, en este caso, para ser reutilizada cuando necesario.
Bien utilizadas, permite mejorar el tiempo de desarrollo así como el mantenimiento/escalabilidad del proyecto.
Ejemplo de uso:  
```scss
$margins: 2em 0.5em 3em 0.2em;

.wrapperOne {
  margin: $margins
}
.wrapperTwo {
  margin: 5em 0 0 2em;
}
.wrapperThree {
  margin: $margins
  
```


3. **¿Qué es un SCSS Mixin? (porque crees que debes utilizarla pon un ejemplo de un mixin, escribiendo cómo se crea y como se pondría para utilizarla):**  
Son bloques de código para optimizar en tiempo de desarrollo, aplicando estilos que pueden ser repetidos en distintas partes de la hoja de estilos final, haciendo solamente referencia al @mixin especificado.

@mixin 

@include


4. **¿Qué significa Unidad fraccionaria (fr) con CSS Grid?**:
Las Fraction Units (fr), como unidades de medida, son una forma "universal" para asegurar que el contenido va a mostrarse de la misma forma en diferentes dispositivos/resoluciones.
En CSS Grid aplica a las fraccione usadas para dimensionar las filas o columnas, unas respecto a las otras, según lo indiquemos.

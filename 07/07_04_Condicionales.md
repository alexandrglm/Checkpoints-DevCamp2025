## ¿Qué es un condicional?

Un condicional es una estructura de control que ejecuta un bloque de código sólo si se cumplen una serie de condiciones específicas. 

Los principales condicionales en JavaScript son:

- **if / else if / else**
  
  Ejecuta unas acciones u otras en base al cumplimiento de las condiciones especificadas.
  
  ```js
  let edad = 18 
  
  if (edad < 18) {
      console.log('Eres menor de edad');
  } else if (edad === 18 && edad <= 21) {
      console.log('Estás entre los 18 y 21 años');
  } else {
      console.log('Eres mayor de 21 años')
  }
  ```
* **Operador Ternario (Elvis)**
  
  Una forma para abreviar un if/else.
  
  ```js
  votoEmitido = false
  let haVotado = votoEmitido === true ? 'Ha votado' : 'No ha votado'
  
  console.log(haVotado)
  ```
  
  
- **switch**: Evalúa múltiples casos para una expresión
  
  ```js
  switch(turnos) {
  
      case 1: 
          console.log('Mañana 08:00 - 14:00'); 
          break;
  
      case 2: 
          console.log('Tarde 14:00 - 20:00');     
          break;
  
      default: 
          console.log('Turno no asignado');
  
  }
  ```

Existen más formas de compactar condicionales usando && (AND) y || (OR), para dichas condiciones específicas.



El uso de cada condicional se verá delimitado por el tipo de casos a evaluar y funciones a implementar para cada uno, siendo 'if/else' el más útil y fléxible.

    

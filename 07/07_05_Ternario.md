## 7.5:    ¿Qué es un operador ternario?

El operador ternario, también llamdo Elvis (puede que, debido, a la sintáxis típica de un ternario en JS, `?:` que, pareciera, lleva tupé) es una forma concisa de escribir condicionales simples. 'If/Else' compactas.

#### Sintáxis básica

```js
objeto = condición ? expresiónSiVerdadero : expresiónSiFalso;
```

Ejemplo:

```js
clientaEsVegana = true;


menu = clientaEsVegana === false ? 'Que coma carne' : 'Que coma verduras'
```

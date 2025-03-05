1. ¿Qué es un condicional?

## Definición:

Un condicional es una estructura de control para determinar posibles salidas de datos en base a unas condiciones determinadas.

## Tipos de concidiconales:

Las principales declaraciones de condicionales son `if`, `elif`, `else`.

1. **Condicional Simple**:
2. **Condicional Comnpuesto**:
3. **Condicional Múltiple**:

## Sintáxis:

Seguimos una sintáxis concreta que, además, es indentada.

Es muy importante mantenter para mantener el correcto seguimiento (flow) de los datos.

A cada declaración de condicional siempre le seguirá un colon (`:`), y sus propias instrucciones se mantendrán en un nivel de jerarquía inferior.

```python
# Sintáxis genérica

if condicion:
    acción

elif otra_condicion_lógica:
    acción

else:
    acción_en_último_Caso
```

#### Ejemplos:

```python
# 1. Condicional Simple.

valor = 36
if valor == 36:
    print('El valor máximo ha sido alcanzado')


# 2. Condicional Compuesto:

valor = 36
if valor == 36:
    print('El valor máximo ha sido alcanzado')
else:
    return loop


# 3. Condicional Múltiple.



elegido = int(input('Escribe un valor: '))

valor = 36

if elegido > valor:
    print('El valor está por debajo')

elif elegido < valor:
    print('El valor está por encima')

else:
    print('Has elegido el valor exacto')
```

## Casos de uso:

- Toma de decisiones basada en lo datos.
  
- Control de flujo de datos
  
- Validación de entrada de de datos
  
- En cualquier parte del código donde se necesite tomar unas acciones u otras en base a un resultado, una función, un estado, dado.
  
- Pueden usarse dentro de funciones, bucles (se explicarán más adelante), o incluso dentro de otros condicionales. Mientras la lógica y sintaxis sean correctas y acordes a los resultados esperados, los condicionales serán útiles.
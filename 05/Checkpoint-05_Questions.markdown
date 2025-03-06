# Checkpoint 05: Documentacion Python

### Fecha:        2025, Marzo. 5.

##### Student:        Alexandr Gomez

****

Qué, Por qué, Para qué, Cuándo, Dónde, 

### Preámbulo

Los lenguajes de programación orientados a objetos (OOP), como Python, se basan en clases y objetos.

Un objeto puede ser, por ejemplo, cada operando en una suma, su propio resultado o el lugar donde, después, plasmemos dicho resultado.

Los diferentes objetos se depositan en memoria a medida que van creando, desarrollando, al ejecutar el código del programa.

Y, al igual que en la teoría de la electrónica, los semiconductores, "chips", los lenguajes que usamos para programar las máquinas que tienen dichos componentes, se basan en este tipo de estructuras de control.

****

# 1. ¿Qué es un condicional?

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

* Toma de decisiones basada en lo datos.

* Control de flujo de datos

* Validación de entrada de de datos

* En cualquier parte del código donde se necesite tomar unas acciones u otras en base a un resultado, una función, un estado, dado.

* Pueden usarse dentro de funciones, bucles (se explicarán más adelante), o incluso dentro de otros condicionales. Mientras la lógica y sintaxis sean correctas y acordes a los resultados esperados, los condicionales serán útiles.

****

# 2. ¿Cuáles son los diferentes tipos de bucles en Python? ¿Por qué son útiles?

## Definición:

Los bucles son otras estructuras de control que permiten ejecutar un bloque de código de manera repetida, iterada, sobre una entrada previa de datos.

Nos permiten automatizar tareas, aplicar unas acciones sobre múltiples datos de manera selectiva, hasta que una condición es cumplida, etc.

Un bloque de código puedes er ejecutado varias veces sin tener que escribirlo repetidamente en nuestro programa. 

## Tipos de Bucles:

1. Bucle `For....in`
2. Bucle `While`

## SIntáxis:

```python
# For....in

for elemento in elementos:
    acción


# While

while condicion:
    acción

## While - Break

while condicion:
    acción
    break


## While - Continue

while condición:
    acción
    continue


## While - Else

while condición:
    acción
else:  
    acción en 
```

## Casos de uso:

En resumen:

- Ejecutar un códifgo hasta que se cumpla una condición.

- Reiterar sobre una lista de elementos, su contenido, sus valores.

En concreto:

* `For...in` se usan cuando queremos iterar, trabajar, sobre una lista finita y conocida de datos.

* `While` pueden usarse cuando no conocemos la exactitud de los datos sobre los que operar.
  
  * `While + Break`: 
    
    Con `break` podemos detener la ejecución, incluso cuando la condición se cumple.
  
  * `While + Continue`:
    
    `Continue`puede detener la ejecución del bucle, indistintamente de lo cumplido con la condición, y continuar con la siguiente iteración.
  
  * `While + Else`:
    
    Como en los condicionales, usar la declaración `else`permite añadir una posibilidad de acción cuando la condición deja de cumplirse.

## Ejemplos

```python
# For... in

lista = ['Pepe', 'Juan', 'Carlos', 'Rosa']

indice = 0
for  elemento in lista:
    indice += 1
    print(f'La persona "{elemento}" es la N.{indice} en la lista')



# While

indice = 0

while indice < 10:
    indice += 1
    print(indice)


# While - Break
## Los números del 1 al 10 pero cortamos en el 3

indice = 0

while indice < 10:
    indice += 1
    print(indice)
    if indice == 3:
        print(f'El {indice} hace break porque esa es la condición ergo el bucle se detiene aquí')
        break
    indice += 1


# While - Continue

indice = 0

while indice < 6:
    indice += 1
    if indice == 3:
        print(f'El numero {indice} se queda fuera porque esa es la condición añadida, y continuamos el bucle ')
        continue
    print(indice)


# While - Else

indice = 0

while indice <= 6:
    indice += 1
    print(indice)

else:
    print(f'El bucle termina por que {indice} se sale del num. máximo de iteraciones')
```

## Dónde usar:

- Similar a los condicionales, en cualquier parte del código donde se necesite tomar unas acciones u otras en base a un resultado, una función, un estado, dado.

- Pueden usarse en cualquier parte del código, dentro de funciones, de condicionales, o formando parte de otros puntos de ejecución de otros bucles .  

- Mientras la lógica y sintaxis sean correctas y acordes a los resultados esperados, los condicionales serán útiles.

- Siempre preferimos usar bucles `for....in` por encima de `While` cuando posible, porque al conocer las todas las iteraciones y casos posibles que manejamos, evitamos errores y excepciones no previstas que detendrán la ejecución de nuestro programa.

## Referencias:

* [Python]

****

# 3. ¿Qué es una lista por comprensión en Python?

****

# 4. ¿Qué es un argumento en Python?

****

# 5. ¿Qué esun paquete PIP?



```
  ****






 ****

# 





****



# ¿Qué es un argumento en Python?



****

# ¿Qué es una función Lambda en Python?



****

# ¿Qué es un paquete PIP?
```

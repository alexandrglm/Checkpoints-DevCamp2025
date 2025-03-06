# Checkpoint 05: Documentación Python

### Date:        March 6, 2025.

##### Student:        Alexandr Gomez

---

# 1 - ¿Qué es un condicional?

## **Definición:**

Un **condicional** es una estructura de control para determinar posibles salidas de datos en base a unas condiciones determinadas.

## **Tipos de condicionales:**

Las principales declaraciones de condicionales son **`if`**, **`elif`**, **`else`**.

1. **Condicional Simple**:

2. **Condicional Compuesto**:

3. **Condicional Múltiple**:

## **Sintaxis:**

Seguimos una sintaxis concreta que, además, es **indentada**. Es muy importante mantenerla para mantener el correcto flujo de los datos.

A cada declaración de condicional siempre le seguirá un **colon (`:`)** y sus propias instrucciones se mantendrán en un nivel de jerarquía inferior.



# Sintaxis genérica

```python
if condicion:
 acción

elif otra_condicion_lógica:
 acción

else:
 acción_en_omisión
```

#### **Ejemplos:**

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

## **Casos de uso:**

- **Toma de decisiones** basada en los datos.

- **Control de flujo** de datos.

- **Validación de entrada** de datos.

- En cualquier parte del código donde se necesite tomar unas acciones u 
  otras en base a un resultado, una función, un estado, dado.

- Pueden usarse dentro de funciones, bucles (se explicarán más adelante), o 
  incluso dentro de otros condicionales. Mientras la lógica y sintaxis sean correctas y acordes a los resultados esperados, los condicionales serán útiles.

## Referencias

[4. More Control Flow Tools &#8212; Python 3.13.2 documentation](https://docs.python.org/3/tutorial/controlflow.html)



---

# **2 - ¿Cuáles son los diferentes tipos de bucles en Python? ¿Por qué son útiles?**

## **Definición:**

Los **bucles** son otras estructuras de control que permiten ejecutar un bloque de código de manera repetida, iterada, sobre una entrada previa de datos.  

Nos permiten **automatizar tareas**, aplicar unas acciones sobre múltiples datos de manera selectiva, hasta que una condición es cumplida, etc.  

Un bloque de código puede ser ejecutado varias veces sin tener que escribirlo repetidamente en nuestro programa.  

## **Tipos de Bucles:**

1. **Bucle `For...in`**

2. **Bucle `While`**

## **Sintaxis:**

```python
# For...in

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
 acción en omisión
```

## **Casos de uso:**

En resumen:  

- **Ejecutar un código** hasta que se cumpla una condición.

- **Reiterar** sobre una lista de elementos, su contenido, sus valores.

En concreto:

- **`For...in`** se usan cuando queremos iterar, trabajar, sobre una lista finita y conocida de datos.

- **`While`** pueden usarse cuando no conocemos la exactitud de los datos sobre los que operar.
  
  - **`While + Break`:** Con **`break`** podemos detener la ejecución, incluso cuando la condición se cumple.
  
  - **`While + Continue`:** **`Continue`** puede detener la ejecución del bucle, indistintamente de lo cumplido con la condición, y continuar con la siguiente iteración.
  
  - **`While + Else`:** Como en los condicionales, usar la declaración **`else`** permite añadir una posibilidad de acción cuando la condición deja de cumplirse.

## **Ejemplos:**

```python
# For... in

lista = ['Pepe', 'Juan', 'Carlos', 'Rosa']

indice = 0
for elemento in lista:
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

while indice < 10:
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

## **Dónde usar:**

- Similar a los condicionales, en cualquier parte del código donde se necesite 
  tomar unas acciones u otras en base a un resultado, una función, un estado, dado.      

- Pueden usarse en cualquier parte del código, dentro de funciones, de condicionales, o formando parte de otros puntos de ejecución de otros bucles.  

- Mientras la lógica y sintaxis sean correctas y acordes a los resultados esperados, los condicionales serán útiles.  

- Siempre preferimos usar bucles **`for...in`** por encima de **`While`** cuando posible, porque al conocer todas las iteraciones y casos posibles que manejamos, evitamos errores y excepciones no previstas que detendrán la ejecución de nuestro programa.  

## **Referencias:**

[ForLoop - Python Wiki](https://wiki.python.org/moin/ForLoop)

[WhileLoop - Python Wiki](https://wiki.python.org/moin/WhileLoop)

[Bucles - Tutorial de Python](https://tutorial.recursospython.com/bucles/)



---

# **3 - ¿Qué es una lista por comprensión en Python?**

## **Definición:**

Una **lista por comprensión** (list comprehension) es una técnica que nos permiteg enerar listas a necesidad y de manera concisa en pocas líneas de código, sin necesidad 
de usar, por ejemplo, bucles de manera clásica.  

Debemos comprender bien la sintaxis de los bucles, así como entender los distintos tipos de datos primitivos, en este caso, listas.  

Para ello, asignamos a una nueva variable la expresión, que incluye un bucle, de la siguiente manera.  

## **Sintaxis:**

```python
# Sintaxis Genérica

nueva_lista = range(1,11) # Generamos una nueva lista con range()

nueva_lista = [ (operación que incluya "elemento") for elemento in nueva_lista ]
```

## **Caso 1: Usando Bucles vs Comprensión de lista**

```python
Usando Bucles

num_list = range(1,11)

numeros_al_cuadrado = []

for num in num_list:
 numeros_al_cuadrado.append(num ** 2)

print(list(num_list)) # Nuestra lista original, generada con range()
print(numeros_al_cuadrado) # Lista generada, recogiendo cada valor generado en num_list y aplicando la operación
```

```python
# Usando Comprensión de Listas

numeros_al_cuadrado = [ num ** 2 for num in num_list]
print(numeros_al_cuadrado)
```

Con comprensión de listas hemos reducido la cantidad de código necesario para realizar la misma acción.

## **Casos de uso:**

- **Crear listas** de manera eficiente y con menos código.

- **Manipular elementos** de una lista al realizar una acción sobre los elementos de dicha lista.

## **Ejemplos:**

```python
Crear una lista de cuadrados (Creación)

cuadrados = [num ** 2 for num in range(1, 11)]
print(cuadrados) # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# Obtención de números pares de una lista (Filtrado)

pares = [num for num in range(1, 11) if num % 2 == 0]
print(pares) # Salida: [2, 4, 6, 8, 10]
```

## **Referencias:**

- [Python Docs: Comprensión de listas [Inglés]](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)

- [GeeksforGeeks: List Comprehension [Inglés]](https://www.geeksforgeeks.org/python-list-comprehension/)

- [Nivaria.net: Listas por comprensión](http://www.nivaria.net/blog/index.php/python/445-listas-por-comprension)

---

# **4 - ¿Qué es un argumento en Python?**

## **Definición:**

Asumiendo que ya conocemos qué es una función, su sintaxis y desarrollo, los **argumentos** son aquellos valores que pasamos a una función cuando esta es invocada.     

Con ello, podemos usar una función genérica para distintos tipos de salida de datos, según necesario.    

Hay varios tipos de **Argumentos**:    

1. **Posicionales**:     
   
   Se pasan en el mismo orden en el que aparecen al definir la función.    

2. **Nombrados**:     
   
   Se pasan especificando el nombre del parámetro.    

3. **Valores por Defecto**:     
   
   Se pasan añadiendo un valor preasignado en caso de no pasar dicho argumento al invocar la función.    

4. **Argumentos Arbitrarios (`*args`)**:     
   
   Permiten pasar un número no especificado de argumentos posicionales.    

5. **Argumentos Arbitrarios de Palabras Clave*** (`**kwargs`):   
   
   Igual que en el caso anterior, pero siendo argumentos nombrados.    

## **Sintaxis y Ejemplos:**

```python
# 1. Argumentos Posicionales

def suma(num_1, num_2):
 print(num_1 + num_2)

suma(4,2)
suma(13213,123123)
```

```python
# 2. Argumentos nombrados

user = 'Pepe'
mail = 'mail@mail.com'

def frase(user, mail):
 print(f'El usuario {user} usa el e-mail {mail}')

frase(user, mail)
frase(user = 'Maria', mail = 'maria@mail.com')
```

```python
# 3. Argumentos por defecto

def suma(num_1 = 7, num_2 = 14):
 print(num_1 + num_2)

suma(1, 2)
suma()
```

```python
# 4. Argumentos Arbitrarios *args

def suma(*nums): # Le damos * variables
 print(sum(nums)) # Usamos el método sum()

print(suma(1,2))
print(suma(1,345,23,2,23))
```

```python
# 5. Argumentos de Palabras Clave arbitrarias

def ficha_cliente(*user, **datos):
 for clave, valor in datos.items():
 print(f' {clave} : {valor}\n')

ficha_cliente(Nombre = 'Maria', Apellidos = 'Perez Perez', Edad = '30')
```

## **Referencias:**

- [4. More Control Flow Tools — Python 3.13.2 documentation](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

- [Python Functions](https://www.w3schools.com/python/python_functions.asp)

---

# **5 - ¿Qué es un paquete PIP?**

Python puede trabajar con **librerías externas**, es decir, módulos de código pre-existente, que simplifican y facilitan las tareas.  

Estas bibliotecas, después, son importadas en nuestro código según sea necesario.  

**PIP** es el gestor de dichas librerías.  

![IMG](https://phoenixnap.com/kb/wp-content/uploads/2023/11/python-m-pip-install-downgrade-cmd-output.png)

Dependerá de nuestro sistema operativo, y si la instalación de Python forma parte
 del sistema o es un elemento independiente, la forma de obtener nuestro PIP.  



El manejo básico es:  

```bash
# Para instalar un paquete

pip install nombre_del_paquete

# Actualizar un paquete

pip install --upgrade nombre_del_paquete

# Desinstalar un paquete

pip uninstall nombre_del_paquete

# Mostrar todos los paquetes instalados, su versión

pip list
```

## **Casos de uso y Ejemplo:**

Una vez hemos definido qué paquetes necesitaremos, importaremos dichas librerías en nuestro código y haremos uso de ellas según la documentación de cada librería nos indique:  

![IMG](https://i0.wp.com/ingalejandroflores.com/wp-content/uploads/2023/11/Como-importar-un-archivo-Excel-a-Python-2.png?resize=393%2C156&ssl=1)

- **Importar librerías** para manejo de nuevos tipos de dato primitivo, como `Decimal`.  

- **Ampliar las funciones aritméticas** por defecto, como las incorporadas en `Math`.  

- **Instalar frameworks** como `Flask`.

- **Descargar herramientas** para análisis de datos como `NumPy`.  

- **Gestionar dependencias** de proyectos en Python.  

```python
import math # Importamos con 'import'

def raices(num):
 print(math.sqrt(num)) # Usamos la función Square Root según la documentación

raices(25)
raices(81)
```



# Checkpoint 05

# 1. Cree un bucle For de Python.

for num in range(1,11):
    print(f'Esta es la lína num. {num}. de 10')

# 2. Cree una función de Python llamada suma que tome 3 argumentos y devuelva la suma de los 3.

def suma(a, b, c):
    
    return a + b + c

print(suma(12,14,16))


# 3. Cree una función lambda con la misma funcionalidad que la función de suma que acaba de crear.


suma = lambda a, b, c: a + b + c
print(suma(12, 14, 16))


# 4. -Utilizando la siguiente lista y variable, determine si el valor de la variable coincide o no con un valor de la lista. *Sugerencia, si es necesario, utilice un bucle for in y el operador in.


nombre = 'Enrique'

lista_nombre = 'Jessica', 'Paul', 'George', 'Henry', 'Adán'
lista = list(lista_nombre)

if nombre in lista == True:
    print(f'El valor {nombre} sí está en la lista')
else:
    print(f'El valor {nombre} no está en la lista')


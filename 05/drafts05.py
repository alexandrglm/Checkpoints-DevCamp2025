# # """

# # # 1. Condicional Simple.

# # valor = 36
# # if valor == 36:
# #     print('El valor máximo ha sido alcanzado')


# # # 2. Condicional Compuesto:

# # valor = 36
# # if valor == 36:
# #     print('El valor máximo ha sido alcanzado')
# # else:
# #     return loop


# # # 3. Condicional Múltiple.



# # elegido = int(input('Escribe un valor: '))

# # valor = 36

# # if elegido > valor:
# #     print('El valor está por debajo')

# # elif elegido < valor:
# #     print('El valor está por encima')

# # else:
# #     print('Has elegido el valor exacto')





# # elegido = int(input('Escribe un valor: '))

# # valor = 36

# # if elegido > valor:
# #     print('El valor está por debajo')

# # elif elegido < valor:
# #     print('El valor está por encima')

# # else:
# #     print('Has elegido el valor exacto')
# # """

# # # Sintáxis genérica

# # ## For....in

# # # for elemento in elementos:
# # #     acción


# # ## While

# # # while condicion:
# # #     acción



# # # Ejemplos

# # # # For... in

# # # lista = ['Pepe', 'Juan', 'Carlos', 'Rosa']

# # # indice = 0
# # # for  elemento in lista:
# # #     indice += 1
# # #     print(f'La persona "{elemento}" es la N.{indice} en la lista')



# # # # While

# # # indice = 0

# # # while indice < 10:
# # #     indice += 1
# # #     print(indice)


# # # # While - Break
# # # ## Los números del 1 al 10 pero cortamos en el 3

# # # indice = 0

# # # while indice < 10:
# # #     indice += 1
# # #     print(indice)
# # #     if indice == 3:
# # #         print(f'El {indice} hace break porque esa es la condición ergo el bucle se detiene aquí')
# # #         break
# # #     indice += 1


# # # # While - Continue

# # # indice = 0

# # # while indice < 6:
# # #     indice += 1
# # #     if indice == 3:
# # #         print(f'El numero {indice} se queda fuera porque esa es la condición añadida, y continuamos el bucle ')
# # #         continue
# # #     print(indice)


# # # # While - Else

# # # indice = 0

# # # while indice <= 6:
# # #     indice += 1
# # #     print(indice)

# # # else:
# # #     print(f'El bucle termina por que {indice} se sale del num. máximo de iteraciones')


# # # List comprehesion, ejemplos

# # # Sintáxis Genérica

# # nueva_lista = range(1,11)

# # nueva_lista = [ num + 2 for num in nueva_lista ]
# # print(nueva_lista)

# # ## Usando Bucles

# # num_list = range(1,11)

# # numeros_al_cuadrado = []

# # for num in num_list:
# #     numeros_al_cuadrado.append(num ** 2)

# # print(list(num_list))       # Nuestra lista original, generada con range()
# # print(numeros_al_cuadrado)  # Lista generada, recogiendo vada valor generado en num_list y aplicando la operación


# # ## Usando Comprensión de Listas

# # num_list = range(1,11)

# # numeros_al_cuadrado = [ num ** 2 for num in num_list]
# # print(numeros_al_cuadrado)


# # pares = [num for num in range(1, 11) if num % 2 == 0]
# # print(pares)


# Argumentos:

## Tipos

## 1. Argumentos Posicionales


from decimal import Decimal
import math

# Exercise 1: Create a list, tuple, float, integer, decimal, and dictionary.

my_list = ['red', 'green', 'blue']

my_tuple = (127, 43, 29)

float_number = float(3.6)

integer = 6547654
integer2 = int(float_number)


my_decimal = Decimal(float_number)

users_dict = {'root':'ojahasdasd','user1':'asdasdad','user2':'kajdlakjsdasd'}

# Exercise 2: Round your float up.

print(math.ceil(float_number))
print(round(float_number))  # Esta forma es "sucia", poco aproximada no hace un redondeo típico pese a que funcione ya que estamos a <3.5


# Exercise 3: Get the square root of your float.

print(math.sqrt(float_number))

# Exercise 4: Select the first element from your dictionary.

print(list(users_dict.values()) [0] ) # El valor de la primera clave del dict

# Exercise 5: Select the second element from your tuple.

print(my_tuple[1])

# Exercise 6: Add an element to the end of your list.

my_list += ('The New element', )
print(my_list)  # Es el método usado en tuplas, es una buena práctica 

my_list.append('Another new element')
print(my_list)


# Exercise 7: Replace the first element in your list.

my_list[0] = 'Replaced Item'
print(my_list)

# Exercise 8: Sort your list alphabetically.

my_list.sort()
print(my_list)

my_list_restarted = ['red', 'green', 'blue']
print(sorted(my_list_restarted))

# Exercise 9: Use reassignment to add an element to your tuple.

print('\nOriginal tuple: \n'f'{my_tuple}')
my_tuple += ('Now I\'m a mixed tuple', 42)
print(my_tuple)





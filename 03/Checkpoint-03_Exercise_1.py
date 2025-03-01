# Exercise 1
string = 'Hello Hola'
is_string = True
number = 47
list = ['alpha','beta','gamma','delta']

# Exercise 2

shorted_string = string[0:3]
print(shorted_string)

# Exercise 3

grabbed_list = list[0]
print(grabbed_list)

# Exercise 4

added_number = number + 10
print(added_number)

# Exercise 5

grabbed_list_2 = list[-1]
print(grabbed_list_2)

# Exercise 6

names = 'harry,alex,susie,jared,gail,corner'
listed_names = names.split(',')
print(listed_names)

# Exercise 7
first_word = string[0:5]
first_word_uppercase = first_word.upper()

new_string = first_word_uppercase + string[5:]
print(new_string)

# Exercise 8

stringed_number = str(number)
new_sentence = f' The number is: {stringed_number}'
print(new_sentence)

# Exercise 9

print('Hello World')

# Extra exercise

string_replace = string.replace('Hola', 'Adios')
print(string_replace)

# Examples used

## String interpolation with vars
name_1 = 'Pepito'
name_2 = 'Jose'
place = 'casa'

string_interpolated = f'¡Hola Don {name_1}!\n¡Hola Don {name_2}!\n¿Pasó Vd. por mi {place}?\nPor su {place} yo pasé.'

print(string_interpolated)

## String interpolation using an index

client = '#453 - Elisabeth/Sue'
age = 50
product = 'The Substance (Starter Kit)'
from_account = 'José from Don Pepito\'s Store'

mail = 'Product Purchased: {0}\n Greetings, {1}!\nYou are listed as {2} years old.\nRemember you both are one.\nCheers!\n{3}'.format(product, client, age, from_account)
print(mail)
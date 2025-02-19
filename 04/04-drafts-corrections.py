# Questions Exercise Corrections:

# Exercise 1

## List examples

lista_1 = [
    "casa",
    "coche",
    "libro",
    "arbol"
]

lista_mixta_anidada_interpolada = [
    27,
    "Ordenador",
    f'{lista_1}',
    { "colores_RGB" : ["rojo", "verde", "azul"] }
]


## Tuples examples

tupla_ejemplo = (27,32,37.49,86)

tupla_multimixta_anidada_interpolada = (
    ["alfa", "beta", "gamma", "delta"],
    round(tupla_ejemplo[2]),
    "Indentación",
    { '+' : 'Sumar', '-' : 'Restar'},
    None,
    f'{tupla_ejemplo}',
    complex(0,2j),
    (5 * 22) % ( 3 - 22) // 3,
    lista_1.pop(),
    lista_mixta_anidada_interpolada.copy()[1]
)


# Exercise 3
## Dicts. example, paleta_colores has one Key/ Single Value, and two nested lists as values

logins = {
	'root' : 'mihiuhjkhbuih',
	'user1' : 'kasjdaokjdaosd'
}

print('The root pwd is: ' + list(logins.values())[0])


paletas_colores = {
	'dark' : 'black',
	'primavera' : ['verde', 'amarillo', 'cyan'],
	'ocaso' : ['naranja', 'ocre', 'teja']
}


print(list(paletas_colores.values())[1][2]) # cyan
print(list(paletas_colores.values())[0])   # black



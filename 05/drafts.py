
nombre_completo = lambda nom, ape : f'{nom} {ape}'

def saludar(nombre_completo):
    print(f'Hola, {nombre_completo}, ¿Cómo estás?')

saludar(nombre_completo('Pepito', 'Perez'))


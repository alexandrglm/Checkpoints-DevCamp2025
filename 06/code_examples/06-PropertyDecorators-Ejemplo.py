# Decoradores @Property

class Usuario:

    # Constructor   __init__
    # Con el que inicializamos la clase y sus objetos
    def __init__(self, nombre, apellido, rol):

        self.nombre = nombre
        self.apellido = apellido
        self.rol = rol

    # Definimos un decorador @property para que el nombre completo se muestre "Apellido, Nombre"
    @property
    def nombre_mostrado(self):
        return f'{self.apellido}, {self.nombre}'
    
    # Usamos nuestro constructor String, adaptado a nuestro decorador
    def __str__(self):

        return f'\nEl usuario "{self.nombre_mostrado}" tiene el rol de {self.rol}'

susana = Usuario('Susana', 'Lopez', 'Profesora')
juan = Usuario('Juan', 'Gomez', 'Alumno')

print(str(susana))
print(str(juan))




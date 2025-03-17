# Ejemplo de varios dunders habituales.

class Usuario:

    # Constructor   __init__
    # Con el que inicializamos la clase y sus objetos
    def __init__(self, nombre, apellido, rol):

        self.nombre = nombre
        self.apellido = apellido
        self.rol = rol

    # Constructor __str__
    # Definimos como será la construcción de la cadena, interpolada,
    # basándonos en los objetos inicializados
    def __str__(self):
        return f'\nEl usuario "{self.apellido}, {self.nombre}" tiene el rol de {self.rol}'
    
    
    # Constructor __repr__
    # Queremos visualizar en consola, además, los objetos de la clase, listados.
    def __repr__(self):

        return f'\nClase Usuario(rol={self.rol}, nombre={self.nombre}, apellido={self.apellido})'


susana = Usuario('Susana', 'Lopez', 'Profesora')
juan = Usuario('Juan', 'Gomez', 'Alumno')

print(str(susana))
print(str(juan))

print(repr(susana))
print(repr(juan))



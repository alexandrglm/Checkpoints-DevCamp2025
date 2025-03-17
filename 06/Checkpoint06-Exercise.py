"""
Checkpoint 6:

-Cree una clase de Python llamada Usuario que use el método init 
y cree un nombre de usuario y una contraseña.
Crea un objeto usando la clase.
"""

# Class Usuario, para formar una lista de control de accesos
class Usuario:

    def __init__(self, user, psswd, ident):
        self.user = user
        self.passwd = psswd
        self._ident = ident

    # Añadimos un dunder string para formar la constucción
    def __str__(self):
        return f'\n Registro de Control de Accesos\n\nEl usuario {self._ident}: "{self.user}" \nTiene asignada la contraseña: {self.passwd}\n'
    
    
# Nuevos Objetos, a partir de la class creada:   
susana = Usuario('Susan1234', 'passwd1234', '0001')
juan = Usuario('juan', 'asdasd134234', '0002')

# Construcciones completas
print(susana)
print(juan)

# Accesos a los elementos por separado
print(susana.user)
print(susana.passwd)
print(susana._ident)


print(juan.user)
print(juan.passwd)
print(juan._ident)
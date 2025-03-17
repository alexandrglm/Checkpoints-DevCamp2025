# Explicando el polimorfismo de clases

## Clase principal/Base
class Animal:
    
    # Esta función será reemplazada por las clases derivadas
    def onomatopeyas(self):
        pass
    
    # Esta función recogera cada función onomatopeyas() modificada por cada clase derivada
    def sonido_animal(self):
        print(self.onomatopeyas())


## Clases derivadas, aninadas a la clase principal, con algunas funciones diferentes
class Perro(Animal):
    def onomatopeyas(self):

        # Dependiendo el animal, introducimos unas funciones distintas.
        # Esto NO afecta a la clase principal, se adapta, gracias al polimorfismo.
        alergico = input('¿Eres alérgic@ a los perros? (Sí/No): ').lower()
        
        if alergico == 'si' or alergico == 'sí':
            return 'Guau, Guau! Pero, ¡Cuidado!, te pueden dar un ataque alérgico!'
        
        else:
            return 'Guau!'
    
class Gato(Animal):
    def onomatopeyas(self):
        
        alergico = input('¿Eres alérgic@ a los gatos? (Sí/No): ').lower()
        
        if alergico == 'si' or alergico == 'sí':
            return 'Guau, Guau! Pero, ¡Cuidado!, te pueden dar un ataque alérgico!'
        
        else:
            return 'Guau!'
    
class Pajarito(Animal):
    def onomatopeyas(self):
        return 'Txio Txio!'
    
class Vaca(Animal):
    def onomatopeyas(self):
        return 'Muuuu'
    

# Esta función utiliza polimoprfismo para llamar a la función adecuada
def elige_animal():

    # Lo hace a través de un diccionario de claves por clase
    animales = {
        'perro' : Perro(),
        'gato' : Gato(),
        'pajarito' : Pajarito(),
        'vaca' : Vaca()
    }

    while True:
    
        animal = input('\nElige entre "Perro", "Gato", "Pajarito", o "Vaca" : ').lower()


        if animal in animales:

            # La Función sonido_animal(), perteneciente a la clase principal Animal,
            # es invocacada aquí en base a a las llamadas a cada clase anidada y su proceder,
            # es decir, por cada animal (válido) elegido en el input, se modifica la acción
            # principal de dicha función, adaptándola a los retornos de cada clase anidada.
            animales[animal].sonido_animal()
            break
        
        else:
            print ('\n Hey, sólo puedes usar los animales seleccionados!!!')

elige_animal()






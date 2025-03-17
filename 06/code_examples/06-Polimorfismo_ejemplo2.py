#######################
# Ejemplo SIN polimorfismo

class AnimalVersionSin:
    
    def __init__(self, sonido_sin):
        self.sonido_sin = sonido_sin

    def onomatopeyas_sin(self):
        return self.sonido_sin
    
def elige_animal_sin():

    animales_sin = {
        'cerdo' : 'Oink Oink!',
        'gallina' : 'Coc Coc Coc!',
        'rana' : 'Croc Croc!',
        'grillo' : 'Krii-Krii!'
    }

    while True:
        animal_sin = input('\nElige entre "Cerdo", "Gallina", "Rana", o "Grillo" : ').lower()

        if animal_sin in animales_sin:

            sonido_sin = animales_sin[animal_sin]
            animal_sin = AnimalVersionSin(sonido_sin)

            print(animal_sin.onomatopeyas_sin())
            break
        
        else:
            print ('\n Hey, sólo puedes usar los animales seleccionados!!!')

elige_animal_sin()

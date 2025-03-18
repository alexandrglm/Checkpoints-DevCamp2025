"""
Checkpoint 6, Pregunta 3:
Para hacer menos abstracto los conceptos sobre los métodos típicos HTTP 
en API's estilo REST, vamos a crear un programa que muestre cómo 
configuarmos cada endpoint según el método, y cómo lo llamamos.

El programa excede de ámbito de esta respuesta, pero trata de mostrar 
la mayoría de conceptos aprendidos en esta parte del Móulo 3,
 mostrando cómo desarrollamos cada endpoint de cada método que usaremos 
 (GET, POST, PUT y DELETE).

Usaremos Flask, y algunas de sus funciones para el motor
que crea un servidor (en localhost:8080) y el manejo de la 
base de datos/JSON en los endpoints.

Un menú en terminal nos habilita para hacer las peticiones,
introducir datos cuando proceda y mostrar el estado actual del 
JSON al finalizar la operación.

Para poder mostrar este menú, a la vez que mantenemos el servidor activo 
con los endpoints, trabajando sólo con un script en ejecución,
usaremos Threading, y Time.

Aunque será código funcional, se limitará a trabajar los datos 
desde el front-end en Terminal.
"""
##################################
# 1. Importamos los módulos necesarios.
from flask import Flask, jsonify, request
import requests
import threading
import time 
##################################
# 2. Establecemos todas las variables, incuyendo cómo iniciar Flask, y la base de datos
app = Flask(__name__)

db = [
    {'id' : '1', 'nombre' : 'Pepito', 'apellidos' : 'Perez Perez'},
    {'id' : '2', 'nombre' : 'Susana', 'apellidos' : 'Lopez Gomez'},
    {'id' : '3', 'nombre' : 'Juan', 'apellidos' : 'Fernandez Gonzalez'},
]
##################################
# 3. Creamos la Clase y Decorador para cómo queremos visualizar 
# los GET de nuestro JSON. Será usado sólo en terminal.
# Nuestra API sigue siendo compatible con Postman
class MostrarData:
    def __init__(self, ficha):
        self.ficha = ficha
    
    # Se podría usar un dunder __str__ también, pero, por variedad
    # añadimos un decorador 
    @property
    def formato_json(self):
        return f'''
------------------------
ID: {self.ficha['id']}
Nombre: {self.ficha['nombre']}
Apel1lidos: {self.ficha['apellidos']}
------------------------
'''
    
##################################
# 4. Creamos los endpoints y sus rutas
## Empezamos con los "tres verbos de la API"

## GET: Todas las fichas
@app.route('/db', methods=['GET'])
def get_recibir_fichas():
    return jsonify(db)

## GET: Una sola ficha, según id.
@app.route('/db/<user_id>', methods=['GET'])
def get_recibir_una_ficha(user_id):

    ficha = next((user for user in db if user['id'] == user_id), None)
    
    return jsonify(ficha)



## POST: Crear una ficha
@app.route('/db', methods=['POST'])
def post_crear_ficha():
    nueva_ficha = request.json
    
    if not nueva_ficha['id'].isdigit():
        return None, 400

    if any(ficha['id'] == nueva_ficha['id'] for ficha in db):
        return None, 400

    db.append(nueva_ficha)
    return jsonify(db)



## PUT: Actualizar una ficha
@app.route('/db/<user_id>', methods=['PUT'])
def put_actualizar_ficha(user_id):
    if not user_id.isdigit():
        return None, 400

    ficha_put = next((user for user in db if user['id'] == user_id), None)
    if not ficha_put:
        return None, 400

    ficha_put.update(request.json)
    return jsonify(db)
   

# 4.2   También añadimos más métodos útiles, como DELETE
## DELETE:  Eliminar una ficha
@app.route('/db/<user_id>', methods=['DELETE'])
def delete_eliminar_una(user_id):

    ficha_delete = next((user for user in db if user['id'] == user_id), None)

    if not ficha_delete:
        return None, 400

    db.remove(ficha_delete)
    return jsonify(db)



##################################
# 5. Diseñamos el menú, y un "getter" para GET todas SOLO para terminal
def mostrar_data(fichas):

    for ficha in fichas:
        print(MostrarData(ficha).formato_json)

def menu():
    while True:
        menu_eleccion = input('\nMenú Principal:\n(1) Consultar TODAS las fichas\n(2) Consultar UNA ficha\n(3) Crear una nueva ficha\n(4) Actualizar una ficha existente\n(5) Eliminar una ficha\n(6) Salir\nElige una opción: ')

        if menu_eleccion == '1':

            # .get()
            respuesta = requests.get('http://127.0.0.1:8080/db').json()
            
            print('\nEstas son todas las fichas: \n')
            mostrar_data(respuesta)

        elif menu_eleccion == '2':

            user_id = input('\nElige un ID: ')
            
            # .get()
            respuesta = requests.get(f'http://127.0.0.1:8080/db/{user_id}').json()
            print('\nResultado: \n')
            mostrar_data([respuesta])

        elif menu_eleccion == '3':

            user_id = input('\nIntroduce el ID: ')

            if not user_id.isdigit():
                print('\nEl ID debe ser un número.')
                continue

            if any(ficha['id'] == user_id for ficha in db):
                print('\nLa ficha ya existe.')
                continue

            nombre = input('\nIntroduce Nombre: ')
            apellidos = input('\nIntroduce Apellido: ')

            nueva_ficha = {'id': user_id, 'nombre': nombre, 'apellidos': apellidos}

            # .post()
            respuesta = requests.post('http://127.0.0.1:8080/db', json=nueva_ficha).json()
            print('\nFicha Creada\n\n')
            mostrar_data(respuesta)

        elif menu_eleccion == '4':

            # PUT actualizar una ficha
            user_id = input('\nIntroduce el ID de la ficha a modificar: ')

            if not user_id.isdigit():

                print('\nEl ID debe ser un número.')
                continue
            if not any(ficha['id'] == user_id for ficha in db):

                print('\nNo existe el ID.')
                continue

            nombre = input('\nIntroduce Nombre: ')
            apellidos = input('\nIntroduce Apellido: ')

            ficha_actualizar = {'nombre': nombre, 'apellidos': apellidos}

            # .put()
            respuesta = requests.put(f'http://127.0.0.1:8080/db/{user_id}', json=ficha_actualizar).json()
            print('\nFicha Actualizada\n\n')
            mostrar_data(respuesta)

        elif menu_eleccion == '5':

            # DELETE eliminar una ficha
            user_id = input('\nIntroduce el ID de la ficha a eliminar: ')

            if not user_id.isdigit():
                print('\nEl ID debe ser un número.')
                continue

            if not any(ficha['id'] == user_id for ficha in db):
                print('\nNo existe el ID.')
                continue
            
            # .delete()
            respuesta = requests.delete(f'http://127.0.0.1:8080/db/{user_id}').json()
            print(f'\nPorcesando eliminado de ficha {user_id}...\n\n')
            mostrar_data(respuesta)

        elif menu_eleccion == '6':

            print('\nHasta pronto!')
            break

        else:
            print('\nOpción no válida.')


##################################
# 6. Configuramos Threadings para cargar el hilo del server Flask, y llamamos al menú
if __name__ == '__main__':

    flask_hilo = threading.Thread(target=app.run, kwargs={'host' : '127.0.0.1', 'port' : '8080'})
    flask_hilo.daemon = True
    flask_hilo.start()

    # El import de time era para esto (añadir unos segundos hasta tener el server operativo)
    time.sleep(3)

    menu()

"""
Para hacer menos abstracto los conceptos sobre los métodos típicos HTTP en API's estilo REST, 
vamos a crear un programa que muestre cómo configuarmos cada endpoint según el método, 
y cómo lo llamamos.

Aunque será código funcional, se limitará a trabajar los datos desde el front-end y la terminal.

Usaremos Flask, y algunas de sus funciones. También Requests.

Y Threadings, junto a time, para poder operar servidor y menú a la vez, usando un mismo script,
dando tiempo a que el servidor se inicie.
"""

# 1. Importamos los módulos necesarios.
from flask import Flask, jsonify, request
import requests
import threading
import time 

# 2. Iniciamos Flask.
app = Flask(__name__)

# 3. Establecemos nuestra base de datos en un JSON típico, a través de "Claves" : "Valores"

db = [
    {'id' : '1', 'nombre' : 'Pepito', 'apellidos' : 'Perez Perez'},
    {'id' : '2', 'nombre' : 'Susana', 'apellidos' : 'Lopez Gomez'},
    {'id' : '3', 'nombre' : 'Juan', 'apellidos' : 'Fernandez Gonzalez'},
]


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
    
    if ficha:
        return jsonify(ficha)
    
    return jsonify({'error': 'No existe el ID'}), 404



## POST: Crear una ficha
@app.route('/db', methods=['POST'])

def post_crear_ficha():

    nueva_ficha = request.json

    if any(ficha['id'] == nueva_ficha['id'] for ficha in db):
        return 'La ficha ya existe'

    if not isinstance(nueva_ficha.get('id'), int):
        return 'El ID debe ser un numero'
    
    db.append(nueva_ficha)
    return jsonify(nueva_ficha)

## PUT: Actualizar una ficha
@app.route('/db/<user_id>', methods=['PUT'])
def put_actualizar_ficha(user_id):
    ficha_put = next((user for user in db if user['id'] == user_id), None)
    if not ficha_put:
        return 'No existe el ID'
    ficha_put.update(request.json)
    return jsonify(ficha_put)
   


# 3.2   También añadimos más métodos útiles, como DELETE
## DELETE:  Eliminar una ficha
def delete_eliminar_una(user_id):

    global db
    
    ficha_delete = next((user for user in db if user['id'] == user_id), None)

    if not ficha_delete:
        return 'No existe el ID'
    
    db = [user for user in db if user['id'] != user_id]

    return jsonify(ficha_delete)


class MostrarData:
    
    def __init__(self, ficha):
        
        self.ficha = ficha

    @property
    def formato_ficha(self):

        return (
            f'\nID:         {self.ficha['id']}'
            f'\nNombre:     {self.ficha['nombre']}'
            f'\nApellidos:  {self.ficha['apellidos']}'
        )



def visualizar_db_despues_de_accion():

    solicitud_get_all_final = requests.get('http://127.0.0.1:8080/db')
    
    get_final_respuesta = solicitud_get_all_final.json()

    print('\n\nRevisa los cambios a continuación: \n\n')
    
    for ficha in get_final_respuesta:
        
        print(MostrarData(ficha).formato_ficha)


# Callbacks a cada método desde consola

def menu():

    while True:

        menu_eleccion = input('\nMenú Principal:\n(1) Consultar TODAS las fichas\n(2) Consultar UNA ficha\n(3) Crear una nueva ficha\n(4) Actualizar una ficha existente\n(5) Eliminar una ficha\n(6) Salir\nElige una opción: ')
        
        if menu_eleccion == '1':

            respuesta = requests.get('http://127.0.0.1:8080/db')
            print('\nEstas son todas las fichas: \n', respuesta.json())
        
        elif menu_eleccion == '2':

            user_id = input('\nElige un ID: ')
            respuesta = requests.get(f'http://127.0.0.1:8080/db/{user_id}')
            
            print('\nResultado: \n', respuesta.json() if respuesta.status_code == 200 else 'No existe el ID')
        
        elif menu_eleccion == '3':
            
            user_id = input('\nIntroduce el ID: ')
            nombre = input('\nIntroduce Nombre: ')
            apellidos = input('\nIntroduce Apellido: ')
            
            nueva_ficha = {'id': user_id, 'nombre': nombre, 'apellidos': apellidos}
            respuesta = requests.post('http://127.0.0.1:8080/db', json=nueva_ficha)
            
            print('\n', respuesta.text)
            visualizar_db_despues_de_accion()
        
        elif menu_eleccion == '4':
            
            user_id = input('\nIntroduce el ID de la ficha a modificar: ')
            nombre = input('\nIntroduce Nombre: ')
            apellidos = input('\nIntroduce Apellido: ')
            
            ficha_actualizar = {'nombre': nombre, 'apellidos': apellidos}
            
            respuesta = requests.put(f'http://127.0.0.1:8080/db/{user_id}', json=ficha_actualizar)
            
            if respuesta.text == 'No existe el ID':
            
                print('\nNo existe el ID')
                continue
            
            visualizar_db_despues_de_accion()
        
        elif menu_eleccion == '5':
            
            user_id = input('\nIntroduce el ID de la ficha a eliminar: ')

            respuesta = requests.delete(f'http://127.0.0.1:8080/db/{user_id}')
            
            if respuesta.status_code == 404:
                print('\nNo existe el ID')

            else:
                print('\nFicha eliminada con éxito.')
                visualizar_db_despues_de_accion()

        
        elif menu_eleccion == '6':
            print('\nGracias por usar este menú!')
            break
        
        else:
            print('\nOpción no válida.')



# Inicializador del server Flask
if __name__ == '__main__':

    # Primer hilo para Flask
    flask_hilo = threading.Thread(target=app.run, kwargs={'host' : '127.0.0.1', 'port' : '8080'})
    flask_hilo.daemon = True
    flask_hilo.start()
    time.sleep(3)

    menu()



# Inicializador del server Flask
if __name__ == '__main__':

    # Primer hilo para Flask
    flask_hilo = threading.Thread(target=app.run, kwargs={'host' : '127.0.0.1', 'port' : '8080',})
    flask_hilo.daemon = True
    flask_hilo.start()
    time.sleep(3)

    menu()

# 1)    ¿Para qué usamos Clases en Python?

En lenguajes de programación orientado a objetos como Python básicamente trabajamos con objetos y clases.

Si los objetos pueden ser cualquier tipo de dato a introducir, a procesar, o ya procesado, las Clases son sus "normas", sus "guías sobre cómo deben ser procesados" dichos objetos.

Por ejemplo, queremos manejar una pequeña base de datos en la que tenemos distintos elementos, como usuarios, contraseñas, sus números de ficha en nuestra base de datos, sus permisos en el sistema.

Cada objeto de dicha lista debe ser manejado según especificaciones diferentes.  
Por ejemplo, tal vez queramos poder sobreescribir algunos de los elementos de cada ficha (como los permisos, o la contraseña) pero otros no, (como el identificador de ficha, el nombre de usuario).

También es posible que queramos también añadir diferencias entre quién puede modificar algunos de esos datos sí modificables (como el administrador del sistema, pudiendo modificar permisos, el identificador de ficha) y quién no (el propio usuario, que sólo podría, por ejemplo, modificar su contraseña y algunos de sus datos personales, no esenciales para el funcionamiento de nuestra aplicación y base de datos).

Pero, además, queremos que nuestra base de datos se muestre en un framework en front-end, con unas especificaciones de construcción (de proyección de los datos) muy concreta.

Para esto están las Clases.

Ejemplo:
```python
class Usuario:


    def __init__(self, user, psswd, ident):
        
        self.user = user
        self.passwd = psswd
        self._ident = ident

    # Añadimos un dunder string para formar la constucción
    def __str__(self):
        return f'\n Registro de Control de Accesos\n\nEl usuario {self._ident}: "{self.user}" \nTiene asignada la contraseña: {self.passwd}\n'

```


# 2)    Qué método se ejecuta automáticamente cuando se crea una instancia de una clase?

# 3)    ¿Cuáles son los tres verbos de API?
GET, POST, DELETE

# 4)    ¿Es MongoDB una base de datos SQL o NoSQL?
Es NoSQL, Not Only SQL.  
Utiliza JSON pero en modo binario, cómo SQL usa sus binarios para almacenar la base de datos, pero en JSON. BJSON.

# 5)    ¿Qué es una API?

Una capa de acceso, de especificaciones "estandarizadas", para operar en una plataforma/servicio determinado, siendo integradada en otro tipo de plataforma/servicio


# 6)    ¿Qué es Postman?

Un framework utilizado para desarrollo de servicios, aplicaciones, API's, que permite, entre otras muchas cosas, testar estas a traves de sus endpoints especificados.

# 7)    ¿Qué es el polimorfismo?



# 8)    ¿Qué es un método dunder?



# 9)    ¿Qué es un decorador de python?





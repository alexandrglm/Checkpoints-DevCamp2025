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

****

# 2)    Qué método se ejecuta automáticamente cuando se crea una instancia de una clase?



****

# 3)    ¿Cuáles son los tres verbos de API?

GET, POST, DELETE



****

# 4)    ¿Es MongoDB una base de datos SQL o NoSQL?

MogoDB es un formato de base de datos tipo NoSQL, <<Not Only SQL>>

A diferencia de las bases de datos SQL tradicionales, MongoDB almacena los datos en una estructura muy similar a la usada en arrays JSON, pero adaptado al formato binario (Archivos BSON).

No es que se trate de algo muy distinto a SQL, sino que parte de la base de SQL para re-adaptarlo y actualizarlo al desarrollo de aplicaciones y servicios actual.



MongoDB, en síntesis, trabaja con los siguientes elementos:

1. Documentos

2. Colecciones

3. Campos

4. Índices



Algunas de las diferencias sustanciales entre MongoDB y un SQL tradicional son:

- **Estructuras de Datos Flexibles**
  
  MongoDB trabaja con "Documentos" y "Colecciones", en vez de Tablas fijas de SQL (lo que podrías esperar al ver una tabla de excel).
  
  Estos Documentos también pueden tener una estructura flexible, no fija, permitiendo contener otros documentos, colecciones, de manera anidada.
  
  La escalabilidad y flexibilidad de un proyecto son posibles de manera sencilla, a diferencia de SQL.

- **Diseminación de Datos**
  
  Una característica muy útil de un esquema NoSQL como MongoDB es que, sus Colecciones, pueden ser separadas en distintos archivos, trabajadas por separados, y usadas como un solo conjunto de datos.
  
  Es por ello que el mantenimiento de una base de datos NoSQL es tan flexible como el desarrollador lo requiera.

- **Manejo de Bases Avanzado**
  
  MongoDB permite un acceso directo de lectura y escritura de datos, proporcionando múltiple métodos para operar sobre campos/índices de datos muy específicos (consultas, búsquedas por campo específico, por porción de cadena de un índice concreto, ...).
  
  Trabajamos con **Campos** (valores tipo diccionario, con su "Clave" : "Valor") e **Índices** que pueden ser aboslutamente flexibles.



****

# 5)    ¿Qué es una API?

Una capa de acceso, de especificaciones "estandarizadas", para operar en una plataforma/servicio determinado, siendo integradada en otro tipo de plataforma/servicio



****

# 6)    ¿Qué es Postman?

Un framework utilizado para desarrollo de servicios, aplicaciones, API's, que permite, entre otras muchas cosas, testar estas a traves de sus endpoints especificados.



****

# 7)    ¿Qué es el polimorfismo?



****

# 8)    ¿Qué es un método dunder?



****

# 9)    ¿Qué es un decorador de python?


## UML 1 - FUNDAMENTOS

--- 

### 06-150 - ¿Qué es UML?

U.M.L. - Unified Modeling Language:
* Tras varios años de diseño de un **sistema/lenguaje unificado y estandarizado para el modelado y análisis de Software**, en 1996 se libera la primera versión de UML por parte de <NOMBRE EMPRESA ES ... RESEARCH? EMPIEZA POR R> 

* En 1997-1999 pasa a ser un estándar adopatdo por la OMG, lo que lo convierte en estándar, universal, no propietario.

* Es una herramienta fundamental usada para el desarrollo, documentación, mantenimiento, corrección de errores, de un software, en forma de componentes visuales.

*   **BENEFICIOS DE USAR UML**
1. Planificación visual desde cero
2. Reducción de Riesgos 
3. Mejora de la comunicación
4. Organización y Calidad de sistemas complejos en componentes visuales
5. Eficiencia, gracias a una mejor planificación

---

### 06-151 - Fases en las que UML es utilizado

Visto de manera general, definimos TRES fases:

*   #### PRE-DESARROLLO
    * Diagrama de Actividades
    * Diagrama de Distribución (Deployment)

*   #### DESARROLLO ACTIVO
    * Diagrama de Clases
    * Diagrama de Casos de Uso


*   #### POST-DEASARROLLO / MANTENIMIENTO
    * Diagrama de Secuencia (Sequence)
    * Diagrama de Paquetes


Visto desde el estándar, podemos definirlas así:

* ANÁLISIS
Fase para entender los requisitos de la aplicación

* DISEÑO
Fases para definir y planificar la arquitectura, los componentes.

* IMPLEMENTACIÓN
Fase para desarrollar y crear una base/guía del desarrollo

* DOCUMENTACIÓN
Fase para crear toda la documentación que facilite el uso de nuestro software.

* MANTENIMIENTO

---

### 06-152 - COMPONENTES COMUNES

Son **SEIS** los grandes componentes comunes entre los distintos tipos de diagramas:

1. FRAMES (marcos)
2. CLASSIFIERS (clasificadores)
3. ESTEREOTIPOS (Stereotypes)
4. COMMENTS/NOTES (comentarios)
5. DEPENDENCIAS (dependencies)
6. FEATURES/PROPERTIES (características/propiedades)



### 06-153 - FRAMES (Marcos)

- Organizan y contienen los elementos de un diagrama.
- Aportan el contexto y delimitan el alcnace de lo que se está modelando.

### 06-154 - CLASSIFIERS (Clasificadores)

- Principal función: Clasificarlo todo.

- No son una referencia directa de modelado a código, sino que clasifican conceptos abstractos.


### 06-165 - STEREOTYPES (Estereotipos)

- Son un elemento/mecanismo que permiten extender las explicaciones contextuales sobre cualquier elemento de un daiagrama.

- Extienden las metaclases. Metaclases son "las clases de las clases".

- A diferencia de los Comentarios/Notas, éstos sí están reglados/definidos en UML:

    - Sintaxis con `<<` `Explicación` `>>`
    - Semántica breve, directa y técnica, que aporta contexto de un vistazo.

### 06-156 - COMMENTS/NOTES (Comentarios)

Así cómo los los estereotipos aportan información contextual, los comentarios hacen lo propio, pero sin tener una forma estandarizada para hacerlo.

Símplemente irán englobados en un "rectángulo con la pestaña superior derecha doblada" (como un post-it), unido a flecha discontinua `- - - - ->` hacia el elemento al que desea aportar contexto.

No sustituyen las conversaciones con el resto de elementos de un equipo pero son una herramienta fundamental para las explicaciones, contexto, extendiendo lo que los estereotipos hacen.

### 06-156 - DEPENDENCIES (Dependencias)

Reprensetan la forma más esencial de interacción entre un elemento UML y otro.

La base de las dependencias reside en el **emparejamiento** (coupling), el cuál implica cuánto un componente necesita de otro para su correcto funcionamiento.

Los cambios que afecten al elemento dependiente también afectarán al componente del que se depende.

Representamos las dependencias con lineas (o flechas) discontinuas `-  A -----> B`  

- Lineas: Discontinuas
- Flecha: Triangulo **ABIERTO**
- Dirección: Del componente dependiente (A), al componente del que se depende (B)
- Etiquetado: Opcional, nombre o `<<estereotipo >>`.



### 06-157 - FEATURES/PROPERTIES (Caractetísticas/Propiedades)

- Bloques de construcción fundamentales, componentes "universales" de un elemento en UML.

-  Definen lo que un elemento "tiene" (propiedades, atributos), y lo que un elemento "puede hacer" (operaciones-métodos, comportamiento).

- Por convención, y por la propia finalidad de UML, se utilizará una semántica clara, directa, auto-definitoria.


---
---

## UML 1 - DIAGRAMAS

### 06-160 - Diagramas intro

Por lo general, todos los tipos de diagramas en UML responden a **DOS** categorías fundamentales:

- #### Diagramas `ESTRUCTURALES` (Structural)
    * Modelan cómo el sistema debe ser definido, construido
    * El estructural más utilizado, los **diagramas de clases**

- #### Diagramas de `COMPORTAMIENTO` (Behavioural)
    * No definen la construcción del sistema, sino cómo el sistema actúa, de qué recursos/permisos/interacciones dispone, cómo debe responder ante X evento.

---

### 06-161 - Estructurales (Structurals)

Por lo general, los principales diagramas UML que permitan estructurar y definir el propio sistema,son:

- Clases
- Despliegue (Deployment)
- Paquete (Package)


#### Diagrama de Clases

Ofrecen una representación visual exacta de las clases necesarias en un programa:

- Su especificación (Nombre)
- Sus atributos (lo que la clase "tiene"/puede ofrecer)
- Sus métodos/operaciones (lo que "puede hacer)

- Sus relaciones/dependencias, es decir, las **asociaciones** que tiene,  en base a su **multiplicidad** (a cómo/cúantas relaciones tiene con otros elementos), su **navegabilidad** (el tipo y sentido estrictamente direccional de sus asociaciones), o el **rol** que abarcan estas (los atributos o métodos compartidos entre dependencias) y su **visibilidad**, es decir si estos son públicos, privados, protegidos, globales a nivel de paquete, ...


##### Sintaxis de una clase
```
NOMBRE
<<ESTEREOTIPO (si lo hay)>>
```
```
ATRIBUTOS:

"+/-/#/~ VISIBILIDAD" "NOMBRE ATRIBUTO : "TIPO" [MULTIPLICIDAD]

```
```
MÉTODOS/OPERACIONES:

"+/-/#/~ VISIBILIDAD" "NOMBRE MÉTODO"(PARAMENTROS): "RETORNO"
```
```
Topic
-----------------
+ title : String
+ slug : String
+ createdAt : DateTime
+ updatedAt : DateTime
-----------------
+ topTen() : List<Topic>
- calculateRanking() : Integer
```


#### Diagramas de Despliegue

Modelan el despliegue de los distintos componentes de software/hardware respecto a nuestro programa, definiendo cómo debe ser configurada toda la arquitectura.

Están formados por **SEIS** elementos comunes:

*   ##### NODOS (Nodes)
Sistemas fisicos o virtuales, pero independientes, donde los distintos componentes son desplegados.  


* ##### COMPONENTES (Components)
Módulos de software/de aplicaciones; por componentes.


* ##### Artefactos/Blobs (Artifacts)
"Piezas" de información concreta usada o creada.

Por ejemplo, una "ficha de cliente", un objeto, de su propia clase,  sería un Artefactos. La ficha es "creada" en base a parámetros de su clase, y es utilizada por otros elementos. (No es la mejor explicación porque puede inducir a error respecto a los diagramas de clases, pero es útil).


* ##### RUTAS/NEXOS/ENLACES (Links)
Conexiones-relaciones entre los nodos.


* ##### DEPENDENCIAS (Dependencies)
* ##### ASOCIACIONES (ASSOCIATIONS)



A grandes rasgos, en la industria, definimos la implementación estilo CI/CD (Integración Continua/Desarrollo Continuo - Continuous Integration/Continous Development) usando Diagramas de Despliegue.

![IMG](https://s3-us-west-2.amazonaws.com/devcamp-pictures/UML+images/Screen+Shot+2017-10-12+at+2.41.43+PM.png)

Una CI/CD típica ofrecerá:

1. ##### Un servidor CI principal
Donde desarrollamos la aplicaicón, donde ubicamos todo el control de versiones.

2. ##### Tres componentes/entornos separados
    * ###### 2.1 STAGING
    Entorno de desarrollo y testeo.

    * ###### 2.2 PRE-PRODUCTION
    Entorno de testeo profundo.


    * ###### 2.3 PRODUCTION
    Servidor/entorno final, donde reside nuestra aplicación, en producción.


Este sistema ampliamente utilizado en la industria ofrece ventajas signitificativas (Nunca podrías pasar a producción una versión de la aplicación que pudiera contener errores y compromenter el sistema.)




#### Diagramas de Paquete



---

### 06-162 - De Comportamiento (Behaviourals)


### CLASS DIAGRAMS

### 06-164 - Diagrama de Clases -> ELEMENTOS
### 06-165 - Propiedades de atributos en Diagrama de Clases -> ASOCIACION -> MULTIPLICIDAD - NAVEGABILIDAD - ROL

### 06-166 - Diagrama de Clases -> Ejemplo Twitter


### ACTIVITY DIAGRAMS

### 06-168 - Diagrama de Actividades -> ELEMENTOS
### 06-169 - Diagrama de Actividades -> Ejemplo Grading System


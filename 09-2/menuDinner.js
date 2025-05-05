/*
 * Ejercicio de 05-104:    Menu Dinner
 *
 *
 * Objetos -> Constantes
 *
 * MENUS ->         Contiene todos los platos, { nombre, precio }, y los extras
 *                  y los extras, sólo aplicados a Comidas o Cenas
 *
 * COMENTARIOS ->   Los comentarios random, que aparecen al elegir un plato
 *                  Elegiremos un comentario usando un numero fijo (Math.floor) de
 *                  multiplicar Math.random por la longitud del numero de comentarios.
 */

const MENUS = {
    "DESAYUNO": {
        "primero": [
            {nombre: "Cafe", precio: 1.50},
            {nombre: "Chocolate", precio: 3.00},
            {nombre: "Te", precio: 2.00}
        ],
        "segundo": [
            {nombre: "Tostada", precio: 0.80},
            {nombre: "Galletas", precio: 1.50},
            {nombre: "Avena", precio: 1.20}
        ],
        "tercero": [
            {nombre: "Zumo", precio: 1.00},
            {nombre: "Almendras", precio: 2.00},
            {nombre: "Muesli", precio: 1.50}
        ]
    },
    "COMIDA_CENA": {
        "primero": [
            {nombre: "Sopa", precio: 6.50},
            {nombre: "Ensalada", precio: 4.50},
            {nombre: "Macarrones", precio: 5.00}
        ],
        "segundo": [
            {nombre: "Bistec", precio: 7.50},
            {nombre: "Pescado", precio: 6.50},
            {nombre: "Hamburguesa", precio: 8.50}
        ],
        "tercero": [
            {nombre: "Pastel", precio: 3.50},
            {nombre: "Goxua", precio: 4.00},
            {nombre: "Fruta", precio: 3.00}
        ],
        "extra": [
            {nombre: "Pan", precio: 1.50},
            {nombre: "Servicio Terraza", precio: 1.00},
            {nombre: "Acompañamiento Musical cantando la Traviata", precio: 10.00}
        ]
    }
};

const COMENTARIOS = [
    '¡Oh, Mesié, eggggseelente elegggsió!',
    '¡En Sanidad nos dijeron que ya no lo servimos con E. Colli!',
    'Teggible, eleccsió, Señogggg',
    '¡Ahora con la mitad de grasa!',
    'Con este plato, si se queda con hambre, le devolvemos el dinero',
    'Si le viene una mosca en el plato, mire la parte positiva, es proteína',
    'La estética no es el fuerte de este plato'
];

/*
 * CLASS PEDIDO
 *
 * Gestiona globalmente toda la lógica reiterativa del manejo de pedidos:
 * 
 *   - Recaba la info del cliente (Nombre / Hora)
 *   - Maneja las alertas (no los prompts) de selección de platos
 *   - Define función de elegir un comentario random de la lista de comentarios.
 *   - Canta la orden, con todos los datos, y calcula el total.
 */

class Pedido {
    
    constructor(nombre, hora){
    
        this.nombre = nombre;
        this.hora = hora;
        this.items = [];
        this.cancelado = ''
    
    }

    añadirSeleccion(item){
    
        this.items.push(item);
    
    }

    mostrarComentario(plato) {
    
        const comentarioRandom = COMENTARIOS[Math.floor(Math.random() * COMENTARIOS.length)];
        
        alert(`Ha elegido: ${plato.nombre}\n\n${comentarioRandom}`);
    
    }

    calcularTotal() {
    
        return this.items.reduce((total, item) => total + item.precio, 0);
    
    }

    mostrarResumen(){
    
        let resumen = `*** RESUMEN DE SU PEDIDO ***\n\n`;
    
        resumen += `Cliente: ${this.nombre}\nHora: ${this.hora}\n\nArtículos:\n`;

        this.items.forEach(item => {
    
            resumen += `- ${item.nombre} ${item.precio.toFixed(2)}€\n`;
    
        });

        resumen += `\nTOTAL: ${this.calcularTotal().toFixed(2)}€\n\n¡Gracias por confiar en el Restaurante Bottega!\n¡Hasta pronto!`;

        alert(resumen);
    }
}
/*
 * CLASS AYUDA (extiende Error)
 *
 * Centraliza todas las validaciones del sistema:
 * - Validación de nombre
 * - Validación de hora
 * - Validación de selección de platos
 * 
 * - Caso "Pulsamos Cancelar"
 * - Caso "Es Cancelación" -> Para aligerar el código de nuestra función waitress(), tenemos que
 *                            definir no solo cuando pulsamos cancelar para mostrar un mensaje de
 *                            despedida, también la acción de cancelar debe suponer finalizar ejecución.
 */
class Ayuda extends Error {

    constructor(mensaje, esCancelacion = false) {

        super(mensaje);
        this.name = "AyudaError";
        this.esCancelacion = esCancelacion;

    
    }

    static cancelar() {

        throw new Ayuda('El pedido ha sido cancelado.\n\n ¡Gracias por confiar en nuestro restaurante Bottega!', true);
    
    }


    static manejarError(error) {

        alert(error.message);
        return error.esCancelacion;

    }

    static validarNombre(nombre) {

        if (nombre === null) {

            Ayuda.cancelar();

        }

        if (!nombre || nombre.trim() === "") {

            throw new Ayuda("Necesito un nombre para poder hacer el pedido, por favor");

        }

        return nombre.trim();
    }

    static validarHora(hora) {

        if (hora === null) {

            Ayuda.cancelar();
        
        }

        
        const horaREGEX = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
        
        if (!horaREGEX.test(hora)) {
        
            throw new Ayuda('Debe introducir formato HORAS:MINUTOS (Horas, dos puntos, minutos)');
        
        }
        
        return hora;
    }

    static validarPlato(input, opciones) {
        
        if (input === null){
            
            Ayuda.cancelar();
        }

        const inputNormalizado = input.trim().toUpperCase();
        
        const plato = opciones.find(opcion =>
        
            opcion.nombre.toUpperCase() === inputNormalizado
        
        );
        
        if (!plato) {
        
            throw new Ayuda(`No existe ese plato, debe escribir uno de los siguientes:\n\n${
                opciones.map(opcion => `-> ${opcion.nombre}`).join('\n')}`);
        
        }
        
        return plato;
    }
}

function waitress() {

    try {

        let nombre;
    
        while (true){
    
            try {
    
                const inputNombre = prompt('¡Bienvenido a Restaurante Bottega!\n\n¿Cuál es su nombre?');
                nombre = Ayuda.validarNombre(inputNombre);

                break;
    
            } catch (error) {
    
                if (Ayuda.manejarError(error)) return;
    
            }
        }



         /*
         *
         * Determinación del menú-precios a mostrar según la hora:
         *
         * Inicialmente quería incluir MomentJS para elegir la hora del sistema,
         * pero de este modo, con input de la hora previamente validado con su REGEX,
         * partimos (.split() ) la hora de los minutos y nos fijamos en esta para
         * mostrar un menú u otro. 
         */  
        let hora;
    
        while (true) {
    
            try {
         
                const inputHora = prompt(`${nombre}, ¿hora actual? (Formato HH:mm)`);
                hora = Ayuda.validarHora(inputHora);
         
                break;
    
            } catch (error) {
    
                if (Ayuda.manejarError(error)) return;
    
            }
    
        }
    
        const horaNum = parseInt(hora.split(':')[0]);
    
        let tipoMenu, esCena = false;
        let nombreMenu

        if (horaNum >= 6 && horaNum < 12) {
    
            tipoMenu = 'DESAYUNO';
            nombreMenu = 'la carta de Desayunos';
    
        } else if (horaNum >= 13 && horaNum < 16) {
    
            tipoMenu = 'COMIDA_CENA';
            nombreMenu = 'el menú de Comidas';
    
        } else if (horaNum >= 20 && horaNum <= 23) {
    
            tipoMenu = 'COMIDA_CENA';
            nombreMenu = 'la carta de Cenas';
    
            esCena = true;
    
        } else {
    
            alert('Restaurante cerrado en este horario');
            return;
    
        }

        alert(`Gracias, ${nombre}, ahora vamos a mostrar ${nombreMenu}`);


        /*
         * Generación de un nuevo pedido:
         *
         * Mapeamos los platos del menñú elegido.
         * Si es desayuno, no muestra extras (Los extras están englobados dentro de Comidas/Cenas).
         * 
         * Un ternario define que, si es cena, los precios de los objetos-platos se incrementan 1.50eurs
         * 
         * Finalmenbte, se van añadiendo las selecciones y mostrando comentarios tal cual establecimos en la clase Pedido
        */

        const pedido = new Pedido(nombre, hora);

        const tipoPlatos = ["primero", "segundo", "tercero"];

        
        for (const tipoPlato of tipoPlatos) {
        
            const opciones = MENUS[tipoMenu][tipoPlato].map(plato => ({
                nombre: plato.nombre,
                precio: esCena ? plato.precio + 1.50 : plato.precio
        
            }));

            // El bucle es infinito, hasta terminar de mostrar todos los platos del menú elegido
            while (true) {
        
                try {
        
                    const input = prompt(`Elija su  ${tipoPlato}:\n\n${
                        opciones.map(opcion => `-> ${opcion.nombre}    - ${opcion.precio.toFixed(2)}€`).join('\n')
                    }`);

                    const plato = Ayuda.validarPlato(input, opciones);
        
                    pedido.añadirSeleccion(plato);
                    pedido.mostrarComentario(plato);
                    
                    break;
        
                } catch (error) {
        
                    if (Ayuda.manejarError(error)) return;
        
                }
            }
        }


        /*
         *
         * La selección de extras repite parte del código, porque los extras no están al miismo
         * nivel de los menús dentro del objeto MENUS (para evitar que estos se muestren en desayunos).
         * 
         * Creo, aunque parezca redundante, es el enfoque más acertado.
         * 
        */ 
        if (tipoMenu === "COMIDA_CENA") {
        
            const opcionesExtras = MENUS[tipoMenu].extra.map(extra => ({
                nombre: extra.nombre,
                precio: esCena ? extra.precio + 1.50 : extra.precio
        
            }
        ));

            // Por ende, el bucle comparte el mismo estilo: Infinito, hasta terminar a instancia del usuario ( o salir cancelando pedido, según lo establecido en la class Ayuda)
            while (true) {
        
                try {
        
                    const input = prompt(`¿Desea añadir algún extra a su pedido?\n\n${
                        opcionesExtras.map(extra => `-> ${extra.nombre}     - ${extra.precio.toFixed(2)}€`).join('\n')
                    }\n\nPara finalizar el pedido, escriba "Terminar Pedido"`);

                    const extra = Ayuda.validarPlato(input, [...opcionesExtras, {nombre: 'Terminar Pedido'}]);

                    if (extra.nombre.toUpperCase() === 'TERMINAR PEDIDO') {
                        
                        break;

                    }

                    pedido.añadirSeleccion(extra);
                    
                    pedido.mostrarComentario(extra);
                
                } catch (error) {
                
                    if (Ayuda.manejarError(error)) return;
                
                }
            }
        }

 
        pedido.mostrarResumen();

    } catch (error) {


        /*
         * He dado más prioridad a manejar (casi) cualquier tipo de error, de manera global,
         * desde su propia clase de error extendido.
         * En la sesión anterior de mentor caí en la cuenta de la importancia que tiene, para
         * la experiencia de usuario, manejar errores, personalizados, y específicos, para
         * que éste sepa qué ocurrió - qué debe hacer.
         * 
         * Hasta ahora, en JS/TS, como en otros lenguajes, no había visto "necesario" para el
         * usuario el manejo de errores, más allá del uso de estos en tiempo de desarrollo
         * 
         * El manejo de errores es absolutamente necesario para que Ux sea buena, incluso cuando algo no funciona
         *
         * Y ... para los errores no contemplados (en este caso, creo, hemos cubierto casi cualquier caso),
         * 
         *     ! (error instanceof Ayuda) -> Para todo lo que sea distinto a todo lo cubierto por Ayuda
         * 
         */ 

        if ( !(error instanceof Ayuda) ) {
            
            alert('¡Este error sí que no lo esperábamos!\nManejamos toda clase de errores previsibles, excepto éste y un apagón eléctrico o la extinción humana.');
        
        }
    }
}


waitress();

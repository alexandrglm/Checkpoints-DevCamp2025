
miLista = ['velma', 'exploradora', 'jane', 'john', 'harry']

const listadoFor = () => {

    for (nombre in miLista){

        console.log(`${parseInt(nombre) + 1} : ${miLista[nombre]}`)

    }

}


listadoFor();
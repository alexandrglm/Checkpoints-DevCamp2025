
miLista = ['velma', 'exploradora', 'jane', 'john', 'harry']


const listadoWhile = () => { 
    
    index = 0;

    while ( index < miLista.length ) {

        console.log(`${index + 1}:  ${miLista[index]}`);

        index++;
    }
}


listadoWhile();
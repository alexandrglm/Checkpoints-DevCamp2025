function masMenos(uno, dos, tres, cuatro){

    preUno = uno + dos;
    preDos = tres + cuatro;
    total = (preUno * preDos);

    retorno = (total <= 50) ? "El número es menor que 50" : "El número es (igual o) mayor que 50!" ;

    return retorno

}

console.log(masMenos(1,2,3,4))

console.log(masMenos(37,28,39,52))
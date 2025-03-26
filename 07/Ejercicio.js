document.getElementById('comprobar').addEventListener('click', function(){

    let uno, dos, tres, cuatro;

    uno = parseInt(document.getElementsByClassName('uno')[0].value)
    dos = parseInt(document.getElementsByClassName('dos')[0].value)
    tres = parseInt(document.getElementsByClassName('tres')[0].value)
    cuatro = parseInt(document.getElementsByClassName('cuatro')[0].value)

    function masMenos(uno, dos, tres, cuatro){

        preUno = uno + dos;
        preDos = tres + cuatro;
        total = (preUno * preDos);
        
        retorno = (total < 50) ? "El número es menor que 50" : "El número es (igual o) mayor que 50!" ;
        
        return retorno
        
    }
    
    comprobado = masMenos(uno, dos, tres, cuatro);

    document.getElementById('salida').textContent = comprobado

});



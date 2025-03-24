let uno, dos, tres, cuatro

// uno = document.getElementsByClassName('uno')
// dos = document.getElementsByClassName('dos')
// tres = document.getElementsByClassName('tres')
// cuatro = document.getElementsByClassName('cuatro')

uno = 12;
dos = 4;
tres = 22;
cuatro = 21;

function masMenos(uno, dos, tres, cuatro){

    preUno = uno + dos;
    preDos = tres + cuatro;
    total = (preUno * preDos);

    if (total >= 50){

        print('El número es (igual o) mayor que 50!')
    } else {
        print('El número es mejor que 50!')
    }

}


alert(masMenos());
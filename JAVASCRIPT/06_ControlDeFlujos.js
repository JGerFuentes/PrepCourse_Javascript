function viajar(destino) {
    if (destino === 'Brasil'){
        console.log('Gire a la IZQUIERDA');
    } else if (destino === 'Argentina'){
        console.log ('Gire a la DERECHA');
    } else {
        console.log('Nos perdimos loco...')
    }
}

viajar('Brasil');
viajar('Argentina');
viajar('Perú');

console.log();


function puedeManejarElSoquete(edad){
    if (edad >=18) {
        console.log(true + ' Felicitaciones! Sí podés, soquete!!');
    } else {
        console.log(false + ' No podés, soquete!!');
    }
}

puedeManejarElSoquete(17);
puedeManejarElSoquete(20);
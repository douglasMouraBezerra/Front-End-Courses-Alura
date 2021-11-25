let idadeComprador = 15;
let estaAcompnhada = true;
let temPassagemComprada = false;
let destino = 'Salvador';
const destinos = ['Salvador','Rio de Janeiro', 'Sao Paulo', 'Belo Horizonte'];
const podeComprar = idadeComprador >= 18 || estaAcompnhada == true;







console.log("Destinos possíveis\n");
console.log(destinos);

let contador = 0;

let destinoExiste = false;

while(contador < destinos.length){

    if (destinos[contador] == destino){
        console.log('Destino existe');
        destinoExiste = true;
        break;
    } 

    contador++;

}

console.log('Destino Existe ? ' + destinoExiste);


if(destinoExiste && podeComprar){
    console.log('Boa viagem');
}else{
    console.log('Sorry, nao ha destino ou nao podes comprar.');
}






// console.log('Destinos possiveis ' + destinos);
// if (idadeComprador >= 18 || estaAcompnhada) {
    //     console.log('Comprador Maior de Idade');
    //     destinos.splice(1, 1);
    
    // } else {
    
    //     if (estaAcompnhada) {
    //         console.log('Comprador menor de Idade, mas esta acompanhado');
    //         destinos.splice(1, 1);
    //     }
    // }
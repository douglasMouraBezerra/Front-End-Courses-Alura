console.log('Trabalhando com condicionais');


const destinos = ['Rio de Janeiro', 'Sao Paulo', 'Belo Horizonte'];

let idadeComprador = 15;
let estaAcompnhada = true;

if (idadeComprador >= 18 || estaAcompnhada) {
    console.log('Comprador Maior de Idade');
    destinos.splice(1, 1);

} else {

    if (estaAcompnhada) {
        console.log('Comprador menor de Idade, mas esta acompanhado');
        destinos.splice(1, 1);
    }
}

console.log('Destinos possiveis ' + destinos);




























// const destinos = ['Rio de Janeiro','Sao Paulo','Belo Horizonte'];

// let idadeComprador = 15;
// let estaAcompnhada = true;

// if (idadeComprador >= 18) {
//     console.log('Comprador Maior de Idade');
//     destinos.splice(1,1);
// }else{

//     if(estaAcompnhada) {
//         console.log('Comprador menor de Idade, mas esta acompanhado');
//         destinos.splice(1,1);
//     }
// }

// console.log('Destinos possiveis ' + destinos);
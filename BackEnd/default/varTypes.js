/**
 * VAR
 * LET
 * CONST
 *
 *
 */

// var altura = 5;
// var comprimento = 7;

// var area = altura * comprimento;
// console.log(area);


// //VAR --> Podemos usar uma variável antes da sua declaração
// area2 = altura * comprimento;
// var area2;
// console.log(area2);

//LET
// let alt = 5;
// let comp = 7;
// let forma = 'retangulo';

// if (forma === 'retangulo') {
//     ar = alt * comp;
// } else {
//     ar = (alt * comp) / 2;
// }

// console.log(ar);
// //erro, devemos inicializar ela primeiro.
// let ar;

const forma = "quadrado";
const altura = 5;
const comprimento = 7;
//erro, sempre que criamos uma constante temos que atribuir um valor inicial.
//const area;
let area;

if (forma === "quadrado") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);

/**
 * atualmente nao se deve mais usar o var. 
 * Caso o valor da nossa variavel precise mudar, entao usamos o let, outroas casos usamos o const.
 * 
 * */
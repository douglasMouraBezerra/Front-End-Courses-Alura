/**
 * Conversao de tipos
 * 
 */

//conversao implicita
const numero = 456;
const numeroString = "456";

//falso, pois o valores em tese sao iguais, mas os tipos nao.'
console.log(numero === numeroString);

//true, pois o conteudo do numero foi convertido para texto pelo js, e so depois foi comparado, retornando true.
//esse é o comportamento do JS.
console.log(numero == numeroString);


//conversao explicita

var soma = numero + Number(numeroString);
console.log(soma);

{
// const pi = 3.14;
// pi = 1;
// console.log(pi);

}

//

let teste  = 1;
function testando () {

    teste = 2;
    console.log(teste);

}
console.log(teste);
testando();







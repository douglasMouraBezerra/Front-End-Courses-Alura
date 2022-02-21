/*
 Tipos de variaveis:revisao
 operacoes: + , - , / , * , %
*/


const myNumber = 3;
const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;
console.log('Resultado: ' + operacaoMatematica);

//ponto flutuante
const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = numeroPontoFlutuante / pontoFlutuanteSemZero;

console.log(`Resultado da nova operação: ${novaOperacao}`);

const operacaoInversaPontoFlutuante = pontoFlutuanteSemZero / numeroPontoFlutuante;
console.log(`Resultado inverso: ${operacaoInversaPontoFlutuante}`);
console.log(`Resultado inverso arredondado: ${operacaoInversaPontoFlutuante.toFixed(2)}`);



var a = [9,8,7,6,5,4,3,2,1];


function compareNumbers(a,b){
    if(a == b) return 0;
    if(a < b) return -1;
    if(a > b) return 1;
}


var b = a.sort(compareNumbers);

console.log(b);

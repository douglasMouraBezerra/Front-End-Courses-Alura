/**
 * 
 * 
 */

let x = "";
console.log(x);
x = "oi";

//1 parte --> declara funcao e  o que ela faz.
//2 parte --> chama a funcao pelo nome.
function imprimeTexto (texto) {

    console.log(texto);

}

//imprimeTexto(x);
/*
*formas de escrever funcao
*tres formas -- > declaração de funcao , forma classica --> function nameFunction(paramether){}
*
* 
*
*/

function soma(x = 0,y = 0){

    return x + y;

}
//console.log(soma(1,9));

//chamada de funcao dentro de funcao
imprimeTexto(soma(10,140));

//Math.round() --> arredonda para o mais proximo
console.log(`Math.round(5.5): ${Math.round(5.5)}`);
console.log(`Math.round(5.4): ${Math.round(5.4)}`);

//Math.ceil() --> arredonda pra cima
console.log(`Math.ceil(5.1): ${Math.ceil(5.1)}`);

//Math.floor() --> arredonda pra baixo
console.log(`Math.floor(5.9): ${Math.floor(5.9)}`);

//Math.trunc() --> desconsidera os numeros decimais apos o ponto ou virgula
console.log(`Math.trunc(5.99999999): ${Math.floor(5.9999999)}`);
console.log(`Math.trunc(5.01): ${Math.floor(5.01)}`);

//Math.pow() --> exponenciação 
console.log(`Math.pw(5,5): ${Math.pow(5,5)}`);


//Math.sqrt() --> retorna a raiz quadrada
console.log(`Math.sqrt(25): ${Math.sqrt(25)}`);

//Math.min() e Math.max() --> retorna o minimo e o maximo valor entre os argumentos passados
console.log(`Math.min(1,1,2,4,5,6,-1): ${Math.min(1,1,2,4,5,6,-1)}`);
console.log(`Math.max(1,1,2,4,5,6,-1): ${Math.max(1,1,2,4,5,6,-1)}`);


//MAth.random() --> retorna um valor aleatorio entre 0 e 1
console.log(`Math.random(): ${Math.random()}`);

console.log();
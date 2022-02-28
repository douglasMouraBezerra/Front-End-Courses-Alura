/**
 * Arrow 
 */

//declaracao de funcao
function apresentar(nome) {
    return `Meu nome é ${nome}`;
}


//tem vantangens quando trabalhamos com objemtos
//Ela vem com uma const
//Se tiver mais de uma linha usamos chave e parenteses
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (a = 0, b = 0) => a + b;

const somaNumerosPequenos = (num1 = 0,num2 = 0) => {
    if((num1 || num2) > 10){
        return "somente numeros de um a nove";
    }else{
        return num1 + num2;
    }
}

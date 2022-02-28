/**
 * Expressao de funcao
 */


//declaração de funcao 
/**
 * 
 * 
 */
console.log(functionName());
function functionName(){
    return "something";
}


//expressao de funcao 
//importante ser const pra nao trocarmos o valor durante a escrita do cod
//nao temos o nome da funcao propriamente dito, esse nome pode ser omitido caso queiramos criar
//funcoes anonimas, essa é a principal diferença entre as duas formas.
console.log(soma(1,1));
const soma = function(n1 = 0, n2 = 0){
        return n1 + n2;
}

arrowHoisting("Douglas");
const arrowHoisting = (nome) => `Ola ${nome}`;
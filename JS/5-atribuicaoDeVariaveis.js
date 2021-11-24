console.log("Trabalhando com atribuicao de variaveis");

const idade = 30;
const nome = 'Douglas de Moura';
const sobrenome = 'Bezerra';

console.log(`Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos de idade`);

try {
    nome  = nome + sobrenome;
 } catch (error) {
    console.log("nao é possivel reatribuir a constantes");  
}

//const nao é possivel fazer reatribuiccao de valores
//e bom reduzir o uso do de let, e usar mais const, pois fica melhor de debugar.


let nome1 = 'Thiago';
let sobrenome1 = 'Nigro';

try {
    nome1 = nome1 + " " + sobrenome1;
    console.log(nome1);
    console.log('Nao estorou erro, por se tratar de let variable');
} catch (error) {
    console.log(error);
}


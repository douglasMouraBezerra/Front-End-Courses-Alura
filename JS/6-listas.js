console.log('Trabalhando com listas');

const salvador = 'Salvador';
const saoPaulo = 'São Paulo';
const rioDeJaneiro = 'Rio de Janeiro';

//array

//embora estejamos adicionando valores no array, o array em si nao e reatribuido, seu local de memoria permanece o mesmo
const listaDestinos = [
    salvador, saoPaulo, rioDeJaneiro
];

listaDestinos.push('Curitiba');
console.log(listaDestinos);


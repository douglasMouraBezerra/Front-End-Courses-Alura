minhaFunction = (texto) =>{

    console.log(texto);

}

minhaFunction('texto como parametro');

//usando o TAG template literals
minhaFunction `texto como parametro com tagged template literals`;


minhaNovaFunction = (arrayDeStrings,palavra) =>{

    console.log(`${arrayDeStrings[0]} ${palavra} ${arrayDeStrings[1]}`);

}

const palavra = 'ALURA';

minhaNovaFunction `Eu estudo na ${palavra} todos os dias`;

console.log('Teste 2');
minhaNovaFunction(['Eu estudo na ', ' todos os dias'], palavra);


console.log('Function Negrito');
function negrito(arrayStrings, ...valores) {

    return arrayStrings.reduce((acumulador, string, i) => {
     return `${acumulador}${string}${valores[i] ? `<strong>${valores[i]}</strong>` : ''}`;
   }, '');
}

const nome = 'Paulo Scalercio';
const redeSocial = '@PauloScalercio';

console.log(negrito`${nome} trabalha na Caelum/Alura como desenvolvedor e instrutor e você pode encontrá-lo nas redes sociais procurando por ${redeSocial}`);
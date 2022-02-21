/**
 * 
 * Valores que nao sao booleanos , mas que se comportam como se fosse.
 * Exemplos
 * 
 * TRUTHY
 * 1 
 * 
 * FALSY -
 * 0 
 * "" -> string vazia
 * 
 * 
 */

const usuarioLogado = true;
const contaPaga = false;

console.log(0 == false); //true
console.log("" == false); //true

console.log(1 == true); // true


//null -> tipo de dados que nao representam nada.

let valorUndfefined;
 
console.log("-----*-------*------*------");
console.log(typeof null); //nessa caso retorna object por foi criado como tal no inicio da ling.
console.log(typeof valorUndfefined);

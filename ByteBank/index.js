
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const c1 = new Cliente("Douglas","08651097450");
const c2 = new Cliente("Luis","12345667889");


const conta1 = new ContaCorrente(1581,50,c1);
const conta2 = new ContaCorrente(1581,50,c2);

// console.log(conta1);
// console.log(conta2);

conta1.transferir(10,conta2);

console.log(conta1);
console.log(conta2);



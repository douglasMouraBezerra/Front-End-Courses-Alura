
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { Conta } from "./Conta/Conta.js";


const c1 = new Cliente("Douglas","08651097450");
const c2 = new Cliente("Luis","12345667889");

// console.log(conta1);
// console.log(conta2);

// conta1.transferir(10,conta2);

// console.log(conta1);
// console.log(conta2);


const cc = new ContaCorrente(c1,1234);
console.log(cc);

cc.depositar(500);

console.log(cc);

cc.depositar(500);
console.log(cc);

cc.sacar(100);

console.log(cc);


import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { Conta } from "./Conta/Conta.js";



const cliente3 = new Cliente("Amaral da Silva","08651097450");



const conta3 = new ContaCorrente();
conta3.depositar(50);
conta3.agencia = 1234;
conta3.cliente = cliente3;

console.log(conta3);


const cc = new ContaCorrente(c1,1234);
console.log(cc);

cc.depositar(500);

console.log(cc);

cc.depositar(500);
console.log(cc);

cc.sacar(100);


console.log(cc);

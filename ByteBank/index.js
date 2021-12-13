
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// const c1 = new Cliente("Douglas","08651097450");
// const c2 = new Cliente("Luis","12345667889");


// const conta1 = new ContaCorrente(1581,50,c1);
// const conta2 = new ContaCorrente(1581,50,c2);

// console.log(conta1);
// console.log(conta2);

// conta1.transferir(10,conta2);

// console.log(conta1);
// console.log(conta2);


const cliente3 = new Cliente("Amaral da Silva","08651097450");



const conta3 = new ContaCorrente();
conta3.depositar(50);
conta3.agencia = 1234;
conta3.cliente = cliente3;

console.log(conta3);


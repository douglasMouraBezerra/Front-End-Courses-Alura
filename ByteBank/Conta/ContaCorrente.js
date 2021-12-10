/*
    Orientacao a Objetos com JS

    Convencao para atributos privados _variavelname
    Proposta para ser aceita #variavelName
*/

import {
    Conta
} from "./Conta.js";


export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(cliente, agencia, 0);
        ContaCorrente.numeroDeContas++;

    }


    sacar(valor) {
        let tx = 1.1;
        const valorSacado = tx * valor;
        // return this.sacar(valorSacado);

        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    // set agencia(numero) {
    //     if (numero.length > 4) {
    //         console.log("Numero de agencia invalido");
    //         return;
    //     }

    //     this._agencia = numero;

    // }

    // depositar(value) {
    //     if (value <= 0) {
    //         return;
    //     }

    //     this._saldo += value;

    // }

    // sacar(value) {
    //     if (this._saldo >= value) {
    //         this._saldo -= value;
    //         return value;
    //     }
    // }

    // transferir(value, conta) {
    //     if (value > this._saldo) {
    //         console.log("Saldo insuficiente");
    //         return;

    //     }

    //     const valorSacado = this.sacar(value);
    //     conta.depositar(valorSacado);

    // }

}
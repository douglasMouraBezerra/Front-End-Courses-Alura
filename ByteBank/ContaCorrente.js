/*
    Orientacao a Objetos com JS

    Convencao para atributos privados _variavelname
    Proposta para ser aceita #variavelName
*/

//lembra muito os imports do java
import {
    Cliente
} from "./Cliente.js";


export class ContaCorrente {
    static numeroDeContas = 0;
    _agencia;
    _saldo = 0;
    _cliente;
    
    constructor(){
        ContaCorrente.numeroDeContas+=1;
    }

    set cliente(cliente) {
        try {

            if (cliente instanceof Cliente) {
                this._cliente = cliente;
            }

        } catch (error) {
            console.log(error);
        }
    }

    set agencia(numero) {
        if (numero.length > 4) {
            console.log("Numero de agencia invalido");
            return;
        }

        this._agencia = numero;

    }


//*************************************** */



    depositar(value) {
        if (value <= 0)
            return;
        this._saldo += value;
    }

    sacar(value) {
        if (this._saldo >= value) {
            this._saldo -= value;
            return value;
        }
    }

    transferir(value, conta) {
        if (value > this._saldo) {
            console.log("Saldo insuficiente");
            return;

        }
        const valorSacado = this.sacar(value);
        conta.depositar(valorSacado);
    }


}
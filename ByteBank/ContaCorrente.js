/*
    Orientacao a Objetos com JS

    Convencao para atributos privados _variavelname
    Proposta para ser aceita #variavelName
*/


export class ContaCorrente {

    _agencia;
    _saldo;
    _cliente

    constructor(agencia, saldo, cliente) {
        this._agencia = agencia;
        this._saldo = saldo;
        this._cliente = cliente;
    }

    setAgencia(numero) {
        if (numero.length > 4) {
            console.log("Numero de agencia invalido");
            return;
        }

        this._agencia = numero;

    }

    depositar(value) {
        if (value <= 0) {
            return;
        }

        this._saldo += value;

    }

    sacar(value) {
        if(this._saldo  >= value){
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
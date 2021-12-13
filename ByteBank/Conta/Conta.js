/**
 * 
 * 
 * 
 * 
 */
export class Conta {
    constructor(cliente, agencia, saldo = 0, ) {
        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldo;

    }

    /**
     * 
     */
    set agencia(agenciaNumero) {
        this._agencia = agenciaNumero;
    }

    get agencia() {
        return this._agencia;
    }

    get saldo() {
        return this._saldo;
    }

    get cliente() {
        return this._cliente;
    }


    depositar(value) {
        if (value <= 0) {
            return;
        }

        this._saldo += value;
    }

    sacar(value) {
        let taxa = 1;
        return this._sacar(value, taxa);
    }

    /**
     * Privado
     */
    _sacar(valor,tx){
        const valorSacado = tx * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    transferir(value, conta) {
        if (value > this._saldo) {
            return;
        }

        const valorSacado = this.sacar(value);
        conta.depositar(valorSacado);

    }


}
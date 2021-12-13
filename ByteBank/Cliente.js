export class Cliente {

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;

    }

    get cpf() {
        return this._cpf;
    }

    get nome() {
        return this._nome;
    }

}
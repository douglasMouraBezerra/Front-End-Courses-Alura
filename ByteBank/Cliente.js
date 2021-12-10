export class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    
    }

    setNome(nome) {
        this._nome = nome;
    }

    getNome() {
        return this._nome;
    }

    setCpf(cpf) {
        this._cpf = cpf;
    }

    getCpf() {
        return this._cpf;
    }
}

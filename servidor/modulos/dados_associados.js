class Pessoas{
    constructor(nome, sobrenome, cpf){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
    }

    get getNome(){
        return this.nome;
    }

    get getSobrenome(){
        return this.sobrenome;
    }

    get getCpf(){
        return this.cpf;
    }

}

class Associado extends Pessoas{
    constructor(nome, sobrenome, cpf, email, data_nascimento, senha){
        super(nome, sobrenome, cpf);        
        this.email = email;
        this.data_nascimento = data_nascimento;
        this.senha = senha;
    }

    get getEmail(){
        return this.email;
    }

    get getData_nascimento(){
        return this.data_nascimento;
    }

    get getSenha(){
        return this.senha;
    }

}

class Dependentes extends Pessoas{
    constructor(nome, sobrenome, cpf){
        super(nome, sobrenome, cpf)
    }
}

class Administradores extends Pessoas{
    constructor(nome, sobrenome, cpf){
        super(nome, sobrenome, cpf)
    }
}


class Endereco{
    constructor(logadouro, numero, bairro, cidade, cep, estado, id_associados){
        this.logadouro = logadouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.cep = cep;
        this.estado = estado;
        this.id_associados = id_associados;
    }

    get logadouro(){
        return this.logadouro;
    }

    get numero(){
        return this.numero;
    }

    get bairro(){
        return this.bairro;
    }

    get cidade(){
        return this.cidade;
    }

    get cep(){
        return this.cep;
    }

    get estado(){
        return this.estado;
    }

    get id_associados(){
        return this.id_associados;
    }
}

class Itens{
    constructor(nome){
        this.nome = nome;
    }

    get getNome(){
        return this.nome;
    }
}

class ItensComuns extends Itens{
    constructor(nome, quantidade){
        super(nome)
        this.quantidade = quantidade;
    }

    get getQuantidade(){
        return this.quantidade;
    }
}




//Encapsulamento e Herança

//Objeto simples

const pessoa1 = {
    _nome: 'Kevin', 
    idade: 18,
    profissao: 'Estudante', 

    Infos: function(){
        console.log(this._nome)
        console.log(this.idade)
        console.log(this.profissao)
    },

    set nome(novoNome){
        this._nome = novoNome + " T_T"
    },

    get nome(){
        return this._nome + " _"
    }
}

pessoa1.nome = 'kek'
console.log(pessoa1.nome)
pessoa1.Infos()

const aluno1 = {
    curso: "Análise e desenvolvimento de Sistemas",
    rga: "XXXXXXXX",
    __proto__: pessoa1,                  //Herda os campos e funções de outros objetos
}

console.log(aluno1.curso)
console.log(aluno1.profissao)

//Instanciação de objetos por meios de classes

class PessoaClasse {
    #nome
    
    constructor(nome, idade, profissao, carro){
        this.#nome = nome
        this.idade = idade
        this.profissao = profissao
        this.carro = carro
    }

    imprimeDados(){
        console.log("**************************************")
        console.log(this.#nome)
        console.log(this.idade)
        console.log(this.profissao)
        console.log(this.carro)
    }

    getNome(){
        return this.#nome
    }
}

class Aluno extends PessoaClasse{       //Nova classe com herança de outra

    constructor(nome, idade, profissao, carro, curso, rga){
        super(nome, idade, profissao, carro)
        this.curso = curso
        this.rga = rga
    }  
    
    imprimeDados(){
        console.log("--------------------------------------")
        console.log(this.curso)
        console.log(this.rga)
    }
}


class Impressora {
    constructor(marca, qntFolhas){
        this.marca = marca
        this.qntFolhas = qntFolhas
    }

    imprimeDados(){
        console.log("==============================")
        console.log(this.marca)
        console.log(this.qntFolhas)
    }
}



const pessoa2 = new PessoaClasse('Francisquete', 13, 'Bartender', 'Corsa')
console.log(pessoa2.getNome())
pessoa2.imprimeDados()

const aluno2 = new Aluno('Kevin', 20, 'Estudante', 'Mustang', "ADS", 'XXXXXXXX')
console.log(aluno2.idade)
console.log(aluno2.curso)

const listObj = [new PessoaClasse('Juvaldo', 12, 'Astronauta', 'NIssan'), new Impressora('HP', 100), new Aluno('Romeu', 15, 'Estudante', 'Velho', 'Marketing', "XXX", new Impressora('Desktop', 200))]

listObj.forEach((obj) => obj.imprimeDados())   
//Polimorfia de ações, executa uma mesma ação para diferentes classes
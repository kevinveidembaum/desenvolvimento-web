//Objeto simples

const pessoa1 = {
    nome: 'Kevin', 
    idade: 18,
    profissao: 'Estudante', 

    Infos: function(){
        console.log(this.nome)
        console.log(this.idade)
        console.log(this.profissao)
    }
}


pessoa1.Infos()

//Campos podem ser criados dinamicamente
pessoa1.carro = 'Gol quadrado'

console.log(pessoa1.carro)

//Formas de acessar campos dentro do objeto
console.log(pessoa1['nome'])

function acessaInfo(objeto, campo){
    return objeto[campo]
}

console.log(acessaInfo(pessoa1, 'carro'))

//Classe Object
const pessoa2 = new Object()
pessoa2.nome = 'Kevineos'
pessoa2.idade = 18
pessoa2.profissao = 'Estudante'
pessoa2.imprimeDados = function(){
    console.log(this.nome)
    console.log(this.idade)
    console.log(this.profissao)
}

pessoa2.imprimeDados()

//Criando Objetos por meio de função
const Pessoa = function(nome, idade, profissao){
    this.nome = nome
    this.idade = idade
    this.profissao = profissao
    
    this.imprimeDados = function(){
        console.log(this.nome)
        console.log(this.idade)
        console.log(this.profissao)
    }
}

const pessoa3 = new Pessoa('Kevolino', 18, 'Estudando')
pessoa3.imprimeDados()
console.log(typeof(Pessoa))
console.log(typeof(pessoa3))

//Instanciação de objetos por meios de classes

class PessoaClasse {
    constructor(nome, idade, profissao, carro){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
        this.carro = carro
    }

    imprimeDados(){
        console.log(this.nome)
        console.log(this.idade)
        console.log(this.profissao)
        console.log(this.carro)
    }
}


const pessoa4 = new PessoaClasse('Kevones', 18, 'Aluno', 'Meriva vermelho')
pessoa4.imprimeDados()
console.log(typeof(PessoaClasse))
console.log(typeof(pessoa4))
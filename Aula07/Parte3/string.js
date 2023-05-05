const nome = "Kev'ine'os"     //quando há o uso de aspas duplas pode-se colocar aspas simples no meio da string
console.log(nome)

const sobrenome = 'Vei"dem"baum'    //do mesmo modo ocorre no sentido inverso
console.log(sobrenome)

 
const mensagem = `Nome: ${nome} ${sobrenome}`    //O tal do template string
console.log(mensagem)

//Métodos de concatenação
console.log("Nome: " + nome)
console.log("Sobrenome: ".concat(sobrenome))
console.log('Nome: ', nome, 'Sobrenome: ', sobrenome, 'Continha: ', (2021+12))
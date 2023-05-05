//função nomeada, crio a função, dou um nome a ela e depois a chamo

function somar(num1, num2){
    const resultado = num1 + num2
    return resultado
}

//Função não nomeada, função dentro de variaveis
const subtracao = function (num1, num2){
    return num1 - num2
}

//Forma mais rápida de realizar funções
//Arrow Function
const multiplicacao = (num1, num2) => num1 * num2

//Arrow Function 2 com mais de dois parametros
const divisao = (num1, num2) => {
    if(num2 > 0){
        return num1 / num2
    }else {
        return "Não foi possível realizar a conta."
    }
}


console.log(somar(20,30))
console.log(subtracao(14, 9))
console.log(multiplicacao(14, 9))
console.log(divisao(14, 7))

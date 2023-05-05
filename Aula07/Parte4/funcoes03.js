//Programação Funcional
//Passando funções como argumentos
function operacao(func, num1, num2){
    return func(num1, num2)
}

function somar(num1, num2){
    return num1 + num2
}

const subtracao = (num1, num2) => num1 - num2

console.log(operacao(somar, 100, 90))
console.log(operacao(subtracao, 20, 12))

console.log("======================================")
//CallBack Functions
const notas = [1.2, 3.2, 7.5, 8.9, 10]

console.log(notas)

console.log("======================================")
//forEach
notas.forEach((nota, indice) => console.log(`Nota ${indice+1}: ${nota}`))

console.log("======================================")
//map
//Função callback que retorna valores em formato de array porém modificados como eu ordenar
const notas2 = notas.map((novanota) => novanota + 0.5)

//uma possivel variação de como ter o mesmo resultado da funcao callback map
const notas3 = []       
for (let i=0;i<notas.length;i++){
    notas3.push(notas[i] - 0.5)
}

console.log(notas2)
console.log(notas3)

console.log("======================================")
//filter
//filtro os elementos da array como desejar
const notas4 = notas.filter((nota) => nota>=7)
console.log(notas4)

console.log("======================================")
//reduce
//"resume a array", pode somar tudo, mulltiplicar, achar a média sla
const media = notas.reduce((acumulador, nota) => (acumulador+nota)/notas.length, 0)
console.log(media)

console.log("======================================")
//Exemplo
//somar todas as notas >=5 
const notas5 = notas.filter((nota) => nota>=5).reduce((acumulador, nota) => (acumulador+nota))
console.log(notas5)

console.log("======================================")
//Funções com valores padroes, já estavelecidos
function divisao(numerador=10, denominador=2){
    return numerador / denominador
}

console.log(divisao())




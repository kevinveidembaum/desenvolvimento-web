//Write an arrow function that takes in an array of numbers and returns the sum of all even numbers in the array.
const soma = (numeros) => {
    return numeros.filter((num) => num %2 === 0).reduce((acumulador, num) => acumulador+num, 0)
}

console.log(soma([1,2,3,4,5,6,7,8,9]))

/*Write a higher-order function that takes in an array of numbers and a callback function. The higher-order function should apply the callback function to each element in the array and return a new array with the results.*/ 
const mod = (arr, funcao) => {
    return arr.map(funcao)
}

console.log(mod([10, 50, 100], (cada) => cada / 5))
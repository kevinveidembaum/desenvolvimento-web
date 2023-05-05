function qualquer (arg1, arg2, arg3){
    console.log('Arg1: ', arg1)
    console.log('Arg2: ', arg2)
    console.log('Arg3: ', arg3)
}

//Uso dos tres pontinhos já formata o argumento em Array
function anyVariavel (...argumentos){
    console.log(argumentos)
}

function anyVariavel2 (arg1, arg2, ...resto){
    console.log('Arg1: ', arg1)
    console.log('Arg2: ', arg2)
    console.log('Resto: ', resto)
}

anyVariavel('kevines', ' Veidembaum', 99, 69)
qualquer('kevin', 123, '444')
qualquer('kevin', '444')
anyVariavel2(1,2,3,4,5,6,7,8,9)
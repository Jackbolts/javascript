//Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

var x = 3
var y = 3

console.log(soma(x,y))
console.log(sub(x,y))
console.log(div(x,y))
console.log(mult(x,y))


function soma(x, y){
    console.log('Subtração:')
    return  x+y
}

function sub(x, y){
    console.log('Subtração:')
    return x-y
}

function div(x, y){
    console.log('Divisão:') 
    return x/y
}

function mult(x, y){
    console.log('Multiplicação:')
    return x*y
}

let isItWorking = true
console.assert(isItWorking, "this is the reason why")
/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/
let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Ana', 'Davi', 'Paulo', 'Gill']
let vetorDouble = [1.1, 2.20, 3.300, 4.4000]


function Vetores(...args) {

    let resultado = []

    for (let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
        
    }
    return resultado

}

console.log(Vetores(vetorInteiro, vetorString))
console.log(Vetores(vetorDouble,vetorInteiro))
console.log(Vetores(vetorString,vetorDouble))


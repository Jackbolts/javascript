/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

function mediaAritimetica(num) {
    let cont = 0
    for (let i = 0; i < num.length; i++) {
        cont = cont+ num[i]
    }

    let resultotal = cont/num.length
    return console.log(`media dos vetores é igual a ${resultotal}`)
    
}

num = [1,2,3,4]

mediaAritimetica(num)
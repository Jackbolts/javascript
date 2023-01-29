/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

function Exe29(num) {
    caso1 = 0
    for (let i = 0; i < num.length; i++) {

        if (num[i]>=10 && num[i]<=20) {
            caso1++
    }
    
}
console.log(`Existem no intervao de 10 e 20  existem ${caso1} entre  `)
}

num = [11,16,22,21,17,38,39,13,14]
Exe29(num)
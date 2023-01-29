/*Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/


function menorq0(num) {
    let cont = 0
    for (let i = 0; i < num.length; i++) {
        if (num[i]<0) {
            cont++
        }
        
    }

   return console.log(`A ${cont} nessa array`)
    
}

num = [3,2,1,0,-1,-2,-3]
menorq0(num)
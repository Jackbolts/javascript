/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/
let v1 = [1, 2, 3, 4, 5];
let v2 = [6, 7, 8, 9, 10];

function TrocaElementos(v1,v2) {
    if (v1.length == v2.length) {
        tamanho = v1.length
        for (let i = 0; i < tamanho; i ++) {
            v1.push(v2[i])
            v2.push(v1[i])   
        }

        for (let i = 0; i < tamanho; i ++) {
            v1.shift()
            v2.shift()
        }
    } else {
        console.log('vetores de tamanhos diferentes')
    }
}

TrocaElementos(v1,v2)

console.log(`Vetor A ${v1}`)
console.log(`Vetor B ${v2}`)

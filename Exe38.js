/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/


function numerosImpares(inicio, fim) {
    inicio > fim ? [inicio, fim] : [fim, inicio];
    let impares = []
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 != 0) {
            impares.push(i)
        }
    }
    let vir = "";
    for (let i in impares) {
        vir = vir.concat(impares[i], ",")
    }
    console.log(vir);
}

numerosImpares(0, 100);
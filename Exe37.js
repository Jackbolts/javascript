/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/

function pa(n, a1, r) {
    let pa = [];
    let somaPa = 0;
    for (let i = 0; i < n; i++) {
        a1 = a1 + r
        somaPa = somaPa + a1;
        pa.push(a1);
    }
    console.log(`PA: ${pa}`);
    console.log(`Soma PA: ${somaPa}`);
}

function pg(n, a1, r) {
    let pg = [];
    let somaPg = 0;
    for (let i = 0; i < n; i++) {
        a1 = a1 * r;
        somaPg = somaPg + a1;
        pg.push(a1);
    }
    console.log(`PG: ${pg}`);
    console.log(`Soma PG: ${somaPg}`);
}

pa(10, 1, 2);
pg(10, 1, 2);

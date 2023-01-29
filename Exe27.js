/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

function compAlturas(altura1, taxa1, altura2, taxa2){
    var tempo = 0 
    if(altura1 == altura2){
        if (taxa1>taxa2) {
            console.log(`Primeira criaça passara a segunda criança em 1 ano`)
        }else if (taxa1<taxa2) {
            console.log(`Segunda criança passara a Primeira em 1 ano`)
        }
    }else if(altura1 < altura2){
        console.log(`Criança 1 com ${altura1} cm`);
        console.log(`Criança 2 com ${altura2} cm`);
        while(altura1<altura2){
            altura1 = altura1 + altura1 * taxa1
            altura2 = altura2 + altura2 * taxa2
            tempo++
        }
        {      
        }
        console.log(`Criança primeira criaça passou a segunda em ${tempo} anos`)
        console.log(`altura da primeira criança:${altura1}`)
        console.log(`altura da segunda criança:${altura2}`)
    }else 
    console.log(`Segunda criança passou primeira criança em ${tempo}`)
    console.log(`altura da primeira criança:${altura1}`)
    console.log(`altura da segunda criança:${altura2}`)

      
}


compAlturas(168, 0.10, 165, 0.80);



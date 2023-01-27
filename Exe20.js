/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

function caixaEletronico(valor){
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0
    let nota5 = 0
    let nota1 = 0
    let valorNota = calcularValorNota(valor)
    while (valorNota > 0) {
        switch (valorNota) {
            case 100:
                nota100++
                valor -=100
                break
                case 50:
                    nota50++
                    valor -=50
                    break
                    case 10:
                        nota10++
                        valor -=10
                        break
                        case 5:
                            nota5++
                            valor -=5
                            break
                            case 1:
                                nota1++
                                valor -=1
                                break
        }
        valorNota = calcularValorNota(valor)
    } 
    
    imprimeNotas(nota100, nota50, nota10, nota5, nota1)

}


function calcularValorNota(valor){
    if (valor >=100) {
        return 100
    }else if(valor >= 50 ){
        return 50
    }else if(valor >= 10){
        return 10
    }else if (valor >=5) {
        return 5
    }else if (valor >= 1) {
        return 1
    }else 
    return 0
}

function imprimeNotas (nota100,nota50,nota10,nota5,nota1){
    if (nota100) {
        console.log(`${nota100} nota(s) de R$ 100,00`)
    }
    if (nota50) {
        console.log(`${nota50} nota(s) de R$ 50,00`)
    }
    if (nota10) {
        console.log(`${nota10} nota(s) de R$ 10,00`)
    }
    if (nota5) {
        console.log(`${nota5} nota(s) de R$ 5,00`)
    }
    if (nota1) {
        console.log(`${nota1} nota(s) de R$ 1,00`)
    }
}

caixaEletronico(127.00)
caixaEletronico(350.00)
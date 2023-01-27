/*O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

function lanchonete(cd,qt,ds,pr){ 
    switch (cd) {
        case 100:
            var prf = 3 * qt
            console.log(`O preço final do(s) Cachorro(s) Quente(s) é R$ ${prf}`)
            break;
            case 200:
                var prf = 4 * qt
                console.log(`O preço final do(s) Hambúrguer(s) Simples é R$ ${prf}`)
                break;
                case 300:
                    var prf = 5.50 * qt
                    console.log(`O preço final do(s) Cheeseburguer(s) é R$ ${prf.toFixed(2)}`)
                    break;
                    case 400:
                        var prf = 7.50 * qt
                        console.log(`O preço final do(s) Bauru(s) é R$ ${prf.toFixed(2)}`)
                        break;
                        case 500:
                            var prf = 3.50 * qt
                            console.log(`O preço final do(s) Refrigerante(s) é R$ ${prf.toFixed(2)}`)
                            break;
                            case 600:
                                var prf = 2.80 * qt
                                console.log(`O preço final do(s) Suco(s) é R$ ${prf.toFixed(2)}`)
                                break;    
        default: 
            console.log('Codigo do Produto Invalido')
            break;
    }
}

lanchonete(100,1)
lanchonete(200,2)
lanchonete(300,3)
lanchonete(400,3)
lanchonete(500,5)
lanchonete(600,1)
lanchonete(700,1)
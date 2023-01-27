/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/
function plano(idade,fixo){

    fixo = 100
    if (idade <= 10) {

        let total = fixo+80
        return console.log(`valor do Plano é de ${total}`)
        
    }else if(idade > 10 && idade <= 30 ){
        let total = fixo+50
        return console.log(`valor do Plano é de ${total}`)

    }else if (idade >= 30 && idade < 60) {
        let total = fixo+95.00
        return console.log(`valor do Plano é de ${total}`)
    }else  {
        let total = fixo+130
        return console.log(`valor do Plano é de ${total}`)
    }
}

plano(10)
plano(27)
plano(31)
plano(61)
/*Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/

function vendaCarros(carro){
    switch (carro) {
        case'sedans':
        case'motocicletas':
        case'caminhonetes':
            return console.log('Tem certeza que não prefere este modelo?')
            break
        case 'hatch':
           return console.log('compra efetuada com sucesso')
            break
        default:
           return console.log("Não trabalhamos com este tipo de automóvel aqui")
            break;
    }
}



console.log(vendaCarros('sedans'))
console.log(vendaCarros('motocicletas'))
console.log(vendaCarros('caminhonetes'))
console.log(vendaCarros('transformes'))
console.log(vendaCarros('hatch'))
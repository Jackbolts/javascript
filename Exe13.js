/*Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

function diaUltio(dia){
    switch (dia) {
        case 1:
            return console.log(`Fim de Semana`);
            break
        case 2:
            return console.log(`Dia  últiu`);
            break
        case 3:
            return console.log(`Dia  últiu`);
            break
        case 4:
            return console.log(`Dia  últiu`);
            break
        case 4:
            return console.log(`Dia  últiu`);
            break
        case 5:
            return console.log(`Dia  últiu`); 
            break
        case 6:
            return console.log(`Dia  últiu`);
            break  
        case 7:
            return console.log(`Fim de Semana`);
            break                        
        default:
            return console.log(`Dia  Invalido`);
            break 
    }
}


console.log(diaUltio(0))
console.log(diaUltio(1))
console.log(diaUltio(2))
console.log(diaUltio(3))
console.log(diaUltio(4))
console.log(diaUltio(5))
console.log(diaUltio(6))
console.log(diaUltio(7))
console.log(diaUltio(8))


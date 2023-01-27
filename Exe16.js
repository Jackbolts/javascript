/*Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

function calc(num1,num2,opera){
    switch (opera) {
        case '+':
            return num1 + num2 
            break;
        case '-':
            return num1 - num2 
            break;
        case '/':
            return num1 / num2 
            break;
        case '*':
            return num1 * num2 
            break; 
        default:
            console.log('Operador não Existe dentro dos paramentros')
            break;
    }
}

console.log(calc(2,5,'+'))
console.log(calc(2,5,'-'))
console.log(calc(2,5,'/'))
console.log(calc(2,5,'*'))
console.log(calc(2,5,'!'))
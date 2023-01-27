/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function aumento(salario,plano){
    switch (plano) {
        case 'A':
        case 'a':
        return console.log(`O novo salário é R$ ${(salario*10)/100+salario },00`);
        break;

        case 'B':
        case 'b':
        return  console.log(`O novo salário é R$ ${(salario*15)/100+salario },00`);
        break;

        case 'C':
        case 'c':
        return console.log(`O novo salário é R$ ${(salario*20)/100+salario },00`);
        break;

        default:
            console.log(`Plano inválido`);
    }
}

console.log(aumento(2000,'A'))
console.log(aumento(1500,'b'))
console.log(aumento(3500,'C'))
console.log(aumento(1350,'a'))
console.log(aumento(1550,'d'))


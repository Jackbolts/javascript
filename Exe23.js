/*Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

function Resultado(cod, nota1, nota2, nota3) {
    let media = calculaMediaPonderada(nota1, nota2, nota3);
    let restultado = media >= 5 ? "Aprovado" : "Reprovado";
    console.log(`Código do aluno: ${cod}\nNota 1: ${nota1}\nNota 2: ${nota2}\nNota 3: ${nota3}\nMédia: ${media}\nResultado: ${restultado}`);
}

function calculaMediaPonderada(nota1, nota2, nota3) {
    let maior;
    let notaMenor1;
    let notaMenor2;
    if (nota1 >= nota2 && nota1 >= nota3) {
        maior = nota1;
        notaMenor1 = nota2;
        notaMenor2 = nota3;
    } else if (nota2 >= nota1 && nota2 >= nota3) {
        maior = nota2;
        notaMenor1 = nota1;
        notaMenor2 = nota3;
    } else {
        maior = nota3;
        notaMenor1 = nota1;
        notaMenor2 = nota2;
    }
    return ((maior * 4) + (notaMenor1 * 3) + (notaMenor2 * 3)) / 10
}

Resultado(100, 5, 5, 5)
Resultado(200, 4, 5, 5)
Resultado(300, 4, 5, 6)
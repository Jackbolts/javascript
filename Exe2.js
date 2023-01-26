/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/


function Triangulo(x,y,z){
    if (x == y && y == z ) {
        console.log("Triangulo equilátero")
    }else if (x == y || x == z || z == y) {
        console.log('Triangulo isóceles')
    }else 
    console.log('Triângulo escaleno');
    
}

Triangulo(1,2,3)
Triangulo(3,3,3)
Triangulo(2,2,3)
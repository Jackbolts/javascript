/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos*/

function calculaJurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    return `R$ ${(capitalInicial + capitalInicial * taxaJuros * tempoAplicacao).toFixed(2)}`;
}

function calculaJurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    return `R$ ${((capitalInicial * (1 + taxaJuros) ** tempoAplicacao)).toFixed(2)}`;
}

console.log(calculaJurosSimples(100, 0.1, 5));
console.log(calculaJurosCompostos(100, 0.1, 5));

console.log('_______________________________________')

console.log(calculaJurosSimples(50, 1, 5));
console.log(calculaJurosCompostos(50, 1, 5));
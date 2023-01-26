/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

const exponentiation = (base, expoente) => {
  return Math.pow(base, expoente)
  
}

function rest(base, expoente){
    return base%expoente
}

console.log('Resutltado:',exponentiation(2,3))
console.log('Resto:',rest(2,3))
/*As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/

function anoBissexto(ano){
    let anoBissexto
    if (ano <= 0) {
        anoBissexto = false
    }else if(anoBissexto % 400 == 0){
        anoBissexto=true
    }else if(ano % 100 == 0){
        anoBissexto = false
    }else if (anoBissexto % 4 == 0) {
        anoBissexto = true
    }else 

        if(!anoBissexto){
            console.log(`O ano ${ano} não é Bissexto`)
            return false
        }

        console.log(`O ano ${ano} é Bissexto`)
        return true

}


console.log(anoBissexto(0))
console.log(anoBissexto(4))
console.log(anoBissexto(100))
console.log(anoBissexto(400))
console.log(anoBissexto(800))
console.log(anoBissexto(2014))
console.log(anoBissexto(2020))
console.log(anoBissexto(2024))
console.log(anoBissexto(2025))
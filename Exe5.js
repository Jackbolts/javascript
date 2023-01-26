
function emReal (a) {
    // tofixed para pegar somente as duas casas decimais depois do ponto
    // to replace para trasformar o ponto em virgula 
    console.log(`R$ ${a.toFixed(2).replace('.', ',')}`);
}

emReal(0.1 + 0.2);

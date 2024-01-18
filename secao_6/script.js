const verificaValores = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Erro! Os valores presisam ser numéricos')
    }
}


const sum = (a, b) => {
    try{
        verificaValores(a, b);
        return a + b;
    }
    catch (erro) {
        return erro.message;
    }
}

console.log(sum(5,'5'));
console.log(sum(2,7));
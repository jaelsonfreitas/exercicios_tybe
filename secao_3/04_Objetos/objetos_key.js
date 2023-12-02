const produtos = {
    nome:'Doritos',
    preco: 8.59,
    frabricante: 'Elma Chips',
    informacoesNutricionais: {
        carboidratos: 12,
        acucar: 0,
        sodio:129,
    }
};

console.log(Object.keys(produtos));
console.log(Object.values(produtos));

// Object.entries( )
// No caso do Object.entries, ele retorna um array de arrays, no qual cada conjunto tem a chave e o valor do objeto. Observe o exemplo a seguir:

console.log(Object.entries(produtos));

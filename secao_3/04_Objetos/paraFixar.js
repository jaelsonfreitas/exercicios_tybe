const player = {
    nome : 'Marta',
    sobrenome : 'Silva',
    idade : 34,
    medalhas: { ouro: 2, prata: 3, },
    bestinTheWorld : [2006, 2007, 2008, 2009, 2010, 2018],
};

console.log(`A jogadora ${player.nome} ${player.sobrenome} tem ${player.idade} anos de idade.`);

// const conquistas = player.bestinTheWorld[0].length;

console.log(`A jogadora ${player.nome} ${player.sobrenome}, foi eleita a melhor do mundo por ${player['bestinTheWorld'].legth} vezes.`);


//Objetos são estruturas ou coleções compostas de pares chave-valor. É possível armazenar qualquer tipo de dado, até mesmo armazenar um objeto dentro de outro ou até mesmo dentro de um array. Com isso, objetos são estruturas de armazenamento de dados muito poderosas.

const company = {
    name: 'Pirilampos',
    slogan: 'Voce conhece voce confia.',
    foundationYear: 2023,
    isActive: true,
    citie: [
        'Belo Horizonte',
        'Curitiba',
        'Quixerambolim'
    ]
}

//Essa é a estrutura de um Objeto.

const car  = {
    marca: 'Fiat',
    modelo: 'Uno',
    cor: 'Prata',
    slogan: 'Rei da Estrada.'
};
// Como faço para acessar uma chave dentro do objeto?
// Posso usar dois metodos que são Do Notation (Notação por pontos.) car.brand;
// Bracket Notation (Notação de colchetes); car['brand'].

//Observaçao as chaves de um Obejeto sao armazenadas como SVGStringList.

// Objeto dentro de objeto
// Manipulação de objeto dentro de objeto, que a partir de agora chamaremos de objetos aninhados, é algo muito comum no desenvolvimento de software, pois nos dá a possibilidade de representar melhor as informações.

// No objeto conta abaixo, o valor da chave bank guarda outro objeto:

const conta = {
    agencia: '0975',
    banco: { 
        cod: '012',
        id: 4,
        name: 'TrybeBank',
    },
};
 // Para conseguir acessar o objeto banco devo antes acessar o objeto conta.
  
//Utilizando notação por ponto.
console.log(conta.banco);

// Com colchetes.
console.log(conta['banco']);

//Se você quiser acessar o valor da propriedade name que está dentro da propriedade bank, será preciso acessar o objeto account primeiro, seguido do objeto bank, seguido da propriedade name:

console.log(conta.banco.name);
console.log(conta['banco']['name']);

const usuario = {
    id: 1,
    email: 'jafoijaeravaiser@gmail.com',
    infoGerais: {
        nome: 'Jaelson',
        sobrenome: 'Freitas',
        endereco: {
            rua: 'Rua dos Bobos, 0 - Fundos',
            distrito: 'Ninho dos Guaxo',
            cidade: 'Tongooiá',
            estado: 'Paraná'
        },
    },
    };

    console.log(usuario['id']);
    console.log(usuario.email);
    console.log(usuario.infoGerais.endereco.rua);
    console.log(usuario['infoGerais']['endereco']['cidade']);


//     Objeto dentro de um array
// Agora, e se o objeto estiver dentro de um array, como acessar as propriedades dele?

// Esse bloco de código é um exemplo de um array composto de objetos. Esses objetos podem ser acessados por meio de seus índices e armazenados dentro de variáveis para facilitar a compreensão.

// De olho na dica 👀: Se o objeto estiver dentro de um array, ele será acessado por meio de seu índice, assim como uma informação seria acessada em um array de strings.
// Veja este exemplo:


const moradores = [
    {
        nome: 'João',
        sobrenome: 'de Arimateia',
        laje: '10',
        apartamento: '1005',
    },
    {
        nome: 'Maria',
        sobrenome: 'Madalena',
        laje: '5',
        apartamento: '501',  
    },
    {
        nome: 'Matheus',
        sobrenome: 'Evangelista',
        laje: '2',
        apartamento: '205',
    },
    {
        nome: 'Lucas',
        sobrenome: 'Médico',
        laje: '19',
        apartamento: '1905',
    },
];

// console.log(moradores[0]);
// const primeiroMorador = moradores[2];
// console.log(primeiroMorador);
// console.log(primeiroMorador.laje);

const primeiroMorador = moradores[moradores.length - 1];
console.log(primeiroMorador);

for (let index = 0; index < moradores.length; index +=1) {
    const morador = moradores[index];
    console.log(morador.nome);
};
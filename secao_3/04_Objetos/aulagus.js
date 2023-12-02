const produtos = [
    {
    produto: "Leite",
    preco: 3.49,
    disponibilidade: true,
    categorias: ["Laticínios","Bebidas"],
    estoque: {
        quantidade: 100,
        localizacão: "Corredor 2, prateleira C",
    },
    fornecedor: {
        nome: "Laticinios Tirol",
        contato: {
            telefone: "47-99999-9999",
            email: "compras@tirol.com",
        },
    },
    avaliacoes: [
        { usuario: "Cliente1", nota: 4},
        { usuario: "Cliente2", nota: 5},
        { usuario: "Cliente3", nota: 5,}
    ],
},
{
    produto: "Achocolatado",
    preco: 6.49,
    disponibilidade: true,
    categorias: ["Mercearia","Bebidas"],
    estoque: {
        quantidade: 200,
        localizacão: "Corredor 2, prateleira D",
    },
    fornecedor: {
        nome: "Nestlé do Brasil",
        contato: {
            telefone: "47-99699-9989",
            email: "compras@mondelez.com",
        },
    },
    avaliacoes: [
        { usuario: "Cliente1", nota: 4},
        { usuario: "Cliente2", nota: 5},
        { usuario: "Cliente3", nota: 5,}
    ],
},
{
    produto: "Ovos",
    preco: 10.49,
    disponibilidade: true,
    categorias: ["mercearia","horti-fruti"],
    estoque: {
        quantidade: 10,
        localizacão: "Corredor 10, prateleira C",
    },
    fornecedor: {
        nome: "Galinheiro da cocoricó",
        contato: {
            telefone: "47-93999-9099",
            email: "compras@cocorico.com",
        },
    },
    avaliacoes: [
        { usuario: "Cliente1", nota: 4},
        { usuario: "Cliente2", nota: 5},
        { usuario: "Cliente3", nota: 5,}
    ],
},
{
    produto: "Café",
    preco: 9.49,
    disponibilidade: true,
    categorias: ["Mercearia","Bebidas"],
    estoque: {
        quantidade: 80,
        localizacão: "Corredor 3, prateleira C",
    },
    fornecedor: {
        nome: "Três corações",
        contato: {
            telefone: "47-99959-9399",
            email: "compras@trêscorações.com",
        },
    },
    avaliacoes: [
        { usuario: "Cliente1", nota: 4},
        { usuario: "Cliente2", nota: 5},
        { usuario: "Cliente3", nota: 5,}
    ],
},
];

// vou criar uma funcao que vai receber os produtos.
const contadordeProdutos = (array) => {
    let contador = 0;
    for (let index = 0; index < array.length; index += 1) {
        contador += array[index].estoque.quantidade;
    }
    return contador;
};

const addPropriedade = (array, nome) => {
    for (let index = 0; index < array.length; index += 1) {
        array[index][nome].push({usuario: "Cliente4", nota: 5});
    }
};

addPropriedade(produtos, 'avaliacoes');

console.log(produtos[3]);
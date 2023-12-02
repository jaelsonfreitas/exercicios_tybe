const cliente = {
    Nome: 'Jaelson',
    idade: 22,
    profissao: 'Vendedor',
};

cliente.sobrenome = 'Freitas';
console.log(cliente);

const adicionalItens = (object, key, value) => {
if (typeof object[key] === "undefined") {
    object[key] = value;
    }
};

adicionalItens(cliente, 'Data de Nasc', '07/04/1990' );



adicionalItens(cliente, 'Endereço', 'Rua: Eleodoro Marcos Teixeira, 179')

console.log(cliente);
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
adicionalItens(cliente, 'email','jaelsonfreitas@gmail.com'),
adicionalItens(cliente, 'Telefone','+55 (047) 99898-9898'),
adicionalItens(cliente, 'Usuário GitHub','jaelson.freitas'),

console.log(cliente);
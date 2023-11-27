const product = 'Iphone 15';
const price = (7200).toFixed(2);
const discount = 10;

const message = 
`Produto: ${product}
Preço de Tabela: ${price}
Black Friday: ${(price - (price * discount)/100 ).toFixed(2)}`;

console.log(message);
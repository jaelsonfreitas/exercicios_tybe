let = shoppingList = ['Arroz', 'Batata', 'Leite NInho', 'Sucrilhos'];

console.log(shoppingList[2]);

// Posso salvar o item do meu array em uma variavel ou constante .
// const item2 = shoppingList[1]

// console.log(item2);

// // Para alterar um elemento preciso acessar o mesmo e alterar seu nome.

// shoppingList[3] = 'Suco de guaiaba'
// console.log(shoppingList);

// // Para adicionar ou remoer elementos usamos push() unshift() pop() shift()

// //push Adiciona um elemento ao final do array
// shoppingList.push('Cotonetes')
// console.log(shoppingList);
// //unshift() Adiciona um elemento no início do array
// shoppingList.unshift('Àgua de Coco');
// console.log(shoppingList);
// //pop() Remove o último elemento do array
// shoppingList.pop()
// console.log(shoppingList);
// //shift Remove o primeiro elemento do array
// shoppingList.shift();
// console.log(shoppingList);

//Uma informação muito útil para próximos conteúdos, é saber o tamanho de um array, ou seja, quantos elementos o array possui.
//Vamos usar essa informação para percorrer um array, realizar exclusões, realizar adições, modificações ou exibir o total de elementos daquele array.
//Para isso vamos utilizar a propriedade length (tamanho). Exemplo:
console.log(shoppingList); // Saída: ['Arroz', 'Batata', 'Leite Ninho', 'Sucrilhos']

console.log([shoppingList.length]); // Saída: 4

const menu = ['Home', 'Seviços', 'portfólio', 'links'];
const menuServices = (menu[1]);

console.log(menuServices);

menu.push('Contato'); // sempre entre parenteses.
console.log(menu);


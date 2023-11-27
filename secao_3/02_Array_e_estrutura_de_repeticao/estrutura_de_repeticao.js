//formula 1 racing

// const laps = 68;

// for (let index = 1; index < laps; index++) {
//    console.log(`Volta nº ${index}`);
    
// }

// console.log('Volta nº 68 - Final da corrida');

//Exemplo prático: somando todos os elementos de um array de números
//Imagine que você quer somar todos os elementos de um array que guarda números, independente de seu tamanho. Ou seja, precisa funcionar se o tamanho do array for 3 ou se for 628464. Como faríamos isso? 🤔

// primeiro crio um array de numeros.

const numbers = [2, 19, 23, 4, 8, 10];

// agora crio a variavel que ira acumular os valores da soma
let sum = 0;

// Loop for, que irá iterar da posição 0 até o último elemento do array
// A variável sum sempre irá receber o valor atual dela + o número do array
// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index];
//   };

//   console.log(sum);

//   const shopping = ['Sabão em Pó', 'Macarrão', 'Leite condensado', 'Refrigerante', 'Maça', 'Alface', 'Nescau'];

//   // para repetir varias vezes usamos o loop for.

//   for (let index = 0; /* onde irei comecar */ index < shopping.length; /* até onde vai minha condicao.*/ index += 1 /*aqui esta meu incremento*/ ){
//     // console.log(index);
//     //console.log(shopping[index]); /* Para imprimir o que esta dentro do array.*/
//     console.log(`${index} - ${shopping[index]}`);
//   };

const cars = [
    "Toyota",
    "Ford",
    "Chevrolet",
    "Honda",
    "Volkswagen",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Nissan",
    "Tesla",
    "Hyundai",
    "Kia",
    "Subaru",
    "Mazda",
    "Fiat",
    "Volvo",
    "Jaguar",
    "Land Rover",
    "Jeep",
    "Chrysler",
    "Dodge",
    "Ram",
    "Buick",
    "Cadillac",
    "GMC",
    "Acura",
    "Lexus",
    "Infiniti",
    "Porsche",
    "Mitsubishi",
    "Lamborghini",
    "Ferrari",
    "Maserati",
    "Alfa Romeo",
    "MINI",
    "Smart",
    "Dacia",
    "Citroën",
    "Peugeot",
    "Renault",
    "Opel",
    "Fiat",
    "Seat",
    "Skoda",
    "Vauxhall",
    "Daihatsu",
    "Isuzu",
    "Suzuki",
    "Proton",
    "Perodua",
    "Lada",
    "Geely",
    "BYD",
    "Chery",
    "Great Wall",
    "Haval",
    "Saab",
    "Saturn",
    "Pontiac",
    "Oldsmobile",
    "Hummer",
    "Aston Martin",
    "Lotus",
    "McLaren",
    "Bugatti",
    "Bentley",
    "Rolls-Royce",
    "Maybach",
    "Lancia",
    "Abarth",
    "MG",
    "Rover",
    "Foton",
    "JAC",
    "Brilliance",
    "Faw",
    "Dongfeng",
    "Haima",
    "MG",
    "Tata",
    "Mahindra",
    "Hindustan",
    "Ashok Leyland",
    "Maruti",
    "Tata",
    "Force",
    "Koenigsegg",
    "Scion",
    "Hennessey",
    "Ruf",
    "Spyker",
    "Vector",
    "Wuling",
    "Lincoln",
    "Tatra",
    "IKCO",
    "Lynk & Co",
    "Lucid Motors",
    "Rivian",
    "Polestar",
  ];
  

for (let i = 0; i < cars.length; i += 1){
console.log(`${i} - ${cars[i]}`);    
};
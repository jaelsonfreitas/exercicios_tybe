

// function greetCustomer(customer) {
//   return `Olá, ${customer}. Essa é sua conta do TrybeBank.`;
// };

// console.log(greetCustomer(trybeBankCustomers)); // Olá, Oliva,Nat,Gus. Essa é sua conta do TrybeBank.


// function greetCustomer(customer) {
//     for (let index = 0; index < customer.length; index += 1) {
//         console.log(`Olá ${customer[index]}. Essa é sua conta do Trybebank.`);
//         }
//     };
  

// greetCustomer(trybeBankCustomers);

const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];
const pirilamposCustomers = ['Noel', 'Jaum', 'Angel Gus',];

function finElement(array, element) {
    return (array.includes(element));
}


console.log(finElement(pirilamposCustomers, "Gus"));
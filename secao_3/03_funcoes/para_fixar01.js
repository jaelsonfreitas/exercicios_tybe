// const balance = 100;

// function sumBalance(balance, deposito) {
//   return balance + deposito;
// }
// const result = sumBalance(balance, 100)

// console.log(`Seu saldo Final é de : R$ ${result}`);


// function subBalance(balance, saque) {
//     return balance - saque;
// }
//  const result2 = subBalance(result, 50.00)
  
// console.log(`Seu saldo Final é de : R$ ${result2}`);

// function AdicionaValor(balance, deposito) {
//     return balance + deposito;
//   }
//   const result = AdicionaValor(200.00, 100.00)
  
//   console.log(`Seu saldo Final é de : R$ ${result}`);
  
//   function saque(balance, saque) {
//     return balance - saque;
//   }
//   const result2 = saque(result, 50.00)
  
//   console.log(`Seu saldo Final é de : R$ ${result2}`);
  
//   function taxa(balance, taxa) {
   
//     return balance * taxa;
//   }
//   const result3 = taxa(result, 0.5/100)
  
//   console.log(`Sua taxa é de : R$ ${result3}`);
  
//   function division(balance, div) {
//     return balance / div
//   }
//   const result4 = division(result, 2)
  
//   console.log(`A Divisao da : R$ ${result4}`);
  

// const balance = 100;

// function sumBalance(balance, deposito) {
//   return balance + deposito;
// }
// const result = sumBalance(balance, 200)

// console.log(`Seu saldo Final é de : R$ ${result}`);

// function subBalance(balance, saque) {
//   return balance - saque;
// }
// const result2 = subBalance(result, 50.00)

// console.log(`Seu saldo Final é de : R$ ${result2}`);

// function multBalance(balance, taxa) {
//   return balance * taxa
// }
// const result3 = multBalance(balance, 0.05)

//  console.log(`Sua taxa é de : R$ ${result3}`);


//  function divBalance(balance, div) {
//   return balance / div
// }
// const result4 = divBalance (result, 2)

// console.log(`A Divisao da : R$ ${result4}`);


const balance = 100;

function sumBalance(deposito) {
  return balance + deposito;
}
const result = sumBalance(50);

function subBalance(saque) {
  return balance - saque;
}
const result2 = subBalance(result, 50.0);

console.log(`Seu saldo Final é de : R$ ${result2}`);

function multBalance(taxa) {
  return balance * taxa;
}
const result3 = multBalance(0.5 * 100);

console.log(`Sua taxa é de : R$ ${result3}`);

function divBalance(div) {
  return balance / div;
}
const result4 = divBalance(result, 2);

console.log(`A Divisao da : R$ ${result4}`);


/// inumeros tentativas acima até passar nos testes. 
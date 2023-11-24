const beenPrice = 10;
const totalMoney = 11;
let message = ""

if(totalMoney < beenPrice) {
    message = 'Você está sem saldo.'
}else if(totalMoney === beenPrice){
    message = 'Parabéns você gastou todo seu dinheiro'
} else {
    message = 'Pode comprar'
}

console.log(message);

const personAge = 14;
let canVote;

if (personAge >= 16) {
  canVote = 'Pode votar!';
} else {
  canVote = 'Não pode votar!';
}

console.log(canVote); // Pode votar!
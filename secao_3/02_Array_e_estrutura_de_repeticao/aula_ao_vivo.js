// Jogo do Estudante.
const jaelGamer = [3, 25, 23, 15, 21, 12, 13, 11, 9, 4, 1, 6, 24, 18, 5 ];
// Jogo Sorteado
let megaSenaNumbers = [];
for (let index = 0; index < 15; index += 1){
    const number = Math.floor(Math.random()* 25)+1;

    if(megaSenaNumbers.includes(number)){
        index -= 1
    } else {
        megaSenaNumbers.push(number);
    }
}



// conferindo o Jogo
let numberOfHits = 0;

for ( let i = 0; i < jaelGamer.length; i += 1){
    let jaelNumber = jaelGamer[i];

    for (let index = 0; index < megaSenaNumbers.length; index+= 1) {
        let element = megaSenaNumbers[index];
        
        if (jaelNumber === element) {
            numberOfHits += 1
        } 
    }
}
console.log(jaelGamer);
console.log(megaSenaNumbers);
console.log(`Numero de acertos, ${numberOfHits}`);
// criando for - sempre iniciamos com o index, e sempre informo de onde ele começa

// for (let index = 0; index < 6; index += 1) {
//     console.log(resultLottery[index]);
// }

// Utilizando for off


// for(let value of lotteryNumbers){
//     console.log(value);
// }


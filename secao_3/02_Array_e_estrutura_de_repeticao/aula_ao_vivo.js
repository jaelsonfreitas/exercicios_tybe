// Jogo do Estudante.
const jaelGamer = [7, 13, 21, 39, 44, 51];
// Jogo Sorteado
const resultLottery = [6, 12, 13, 20, 38, 51];


// conferindo o Jogo
let numberOfHits = 0;

for ( let i = 0; i < jaelGamer.length; i += 1){
    let jaelNumber = jaelGamer[i];

    for (let index = 0; index < resultLottery.length; index+= 1) {
        let element = resultLottery[index];
        
        if (jaelNumber === element) {
            numberOfHits += 1
        } 
    }
}

console.log(`Numero de acertos, ${numberOfHits}`);
// criando for - sempre iniciamos com o index, e sempre informo de onde ele começa

// for (let index = 0; index < 6; index += 1) {
//     console.log(resultLottery[index]);
// }

// Utilizando for off


// for(let value of lotteryNumbers){
//     console.log(value);
// }


const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
sum = 0
mArit = ''

for (let index = 0; index < numbers.length; index += 1) {
sum += numbers[index];
mArit = sum/numbers.length
};

//   console.log(sum);
console.log(`
A soma e de: ${sum}
A média aritmética e de ${mArit} `);

if(mArit  >= 20){
    console.log(`O valor da média aritmética é maior que 20`);
}else{
    console.log(`O valor da média aritmética é menor ou igual a 20`);
}

let biggerNumber = [0]

for (let i = 1; i < numbers.length; i += 1 ){
    if (numbers[i] > biggerNumber){
        biggerNumber = numbers[i]
    }
};
console.log(biggerNumber);

let result = 0;

for (let i = 0; i < numbers.length; i += 1){
    if(numbers[i] % 2 !==0){
        result += 1;
    }
};

if(result=== 0) {
    console.log(`Nenhum valor ímpar encontrado.`);
} else {
    console.log(result);
}

let fatorial = 1;


for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
};

console.log(fatorial);

let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord);

for (let index = word.length - 1; index >= 0; index -= 1) {
    reverseWord += word[index];
  };
  
  console.log(reverseWord);

  let n = 5;
  let symbol = '*';
  let inputLine = '';
  
  for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    inputLine = inputLine + symbol;
  };
  
  for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    console.log(inputLine);
  };


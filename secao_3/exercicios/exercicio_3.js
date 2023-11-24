let number1 = 330
let number2 = 600
let number3 = 50
message = ""

if (number1 > number2 && number1 > number3) {
    message = `O primeiro numero é maior pois ele é igual á ${number1} e ${number1} é maior do que ${number2} e ${number3}`
} else if (number2 > number1 && number2 > number3 ) {
    message = `O segundo numero é maior pois ele é igual á ${number2} e ${number2} é maior do que ${number1} e ${number3}`  
} else {
    message = `O terceiro numero é maior pois ele é igual á ${number3} e ${number3} é maior do que ${number1} e ${number2}`
}

console.log(message);
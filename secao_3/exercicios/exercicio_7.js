let grossSalary = 6800.00;
let baseInss1 = (grossSalary * 8) / 100;
let baseInss2 = (grossSalary * 9) / 100;
let baseInss3 = (grossSalary * 11) / 100;
let baseInssM = 570.80;

let baseSalaryIr = "";
let discountIr = "";
let netSalary = "";

if (grossSalary <= 1556.94) {
    baseSalaryIr = grossSalary - baseInss1;
} else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
    baseSalaryIr = grossSalary - baseInss2;
} else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
    baseSalaryIr = grossSalary - baseInss3;
} else {
    baseSalaryIr = grossSalary - baseInssM;
}

if (baseSalaryIr <= 1903.99) {
    discountIr = 0;
    netSalary = baseSalaryIr - discountIr;
} else if (baseSalaryIr >= 1903.99 && baseSalaryIr <= 2826.65) {
    discountIr = (baseSalaryIr * 7.5) / 100 - 142.80;
    netSalary = baseSalaryIr - discountIr;
} else if (baseSalaryIr >= 2826.66 && baseSalaryIr <= 3751.05) {
    discountIr = (baseSalaryIr * 15) / 100 - 354.80;
    netSalary = baseSalaryIr - discountIr;
} else if (baseSalaryIr >= 3751.06 && baseSalaryIr <= 4664.68) {
    discountIr = (baseSalaryIr * 22.5) / 100 - 636.13;
    netSalary = baseSalaryIr - discountIr;
} else {
    discountIr = (baseSalaryIr * 27.5) / 100 - 869.33;
    netSalary = baseSalaryIr - discountIr;
}

console.log(`Seu salário líquido esse mês foi de: R$ ${netSalary}`);

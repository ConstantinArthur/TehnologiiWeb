const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const divisor = 3;

const sumDivisible = (arrayNumbers, divisor) => {
        const divisibleNumbers = arrayNumbers.filter(number => number % divisor == 0)
        const sum = divisibleNumbers.reduce((sum, number) => sum + number, 0);
        return sum;
}

const result = sumDivisible(arrayNumbers, divisor);
console.log("Suma numerelor divizibile cu", divisor, "este:", result);
import { add, subtract, multiply, divide } from './math';

const num1: number = 2;
const num2: number = 3;

console.log(`${num1} + ${num2} = `, add(num1, num2));
console.log(`10 - 8 = `, subtract(10, 8));
console.log(`${num1} * ${num2} = `, multiply(num1, num2));
console.log(`12 / 4 = `, divide(12, 4));

// import functions
import { add, subtract, multiply, divide, modulo, integerDivision, hypotenuse, volOfCylinder } from './calculations.js';
import { volOfSphere, areaOfTriangle } from '../calculations.js';

// reference needed DOM elements

const addNum1 = document.getElementById('add-num1');
const addNum2 = document.getElementById('add-num2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

const subtractNum1 = document.getElementById('subtract-num1');
const subtractNum2 = document.getElementById('subtract-num2');
const subtractButton = document.getElementById('subtract-button');
const subtractAnswer = document.getElementById('subtract-answer');

const multiplyNum1 = document.getElementById('multiply-num1');
const multiplyNum2 = document.getElementById('multiply-num2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyAnswer = document.getElementById('multiply-answer');

const divideNum1 = document.getElementById('divide-num1');
const divideNum2 = document.getElementById('divide-num2');
const divideButton = document.getElementById('divide-button');
const divideAnswer = document.getElementById('divide-answer');

const moduloNum1 = document.getElementById('modulo-num1');
const moduloNum2 = document.getElementById('modulo-num2');
const moduloButton = document.getElementById('modulo-button');
const moduloAnswer = document.getElementById('modulo-answer');

const integerDivisionNum1 = document.getElementById('integer-division-num1');
const integerDivisionNum2 = document.getElementById('integer-division-num2');
const integerDivisionButton = document.getElementById('integer-division-button');
const integerDivisionAnswer = document.getElementById('integer-division-answer');

const hypotenuseNum1 = document.getElementById('hypotenuse-num1');
const hypotenuseNum2 = document.getElementById('hypotenuse-num2');
const hypotenuseButton = document.getElementById('hypotenuse-button');
const hypotenuseAnswer = document.getElementById('hypotenuse-answer');

const sphereNum1 = document.getElementById('sphere-num1');
const sphereButton = document.getElementById('sphere-button');
const sphereAnswer = document.getElementById('sphere-answer');

const cylinderNum1 = document.getElementById('cylinder-num1');
const cylinderNum2 = document.getElementById('cylinder-num2');
const cylinderButton = document.getElementById('cylinder-button');
const cylinderAnswer = document.getElementById('cylinder-answer');

const triangleNum1 = document.getElementById('triangle-num1');
const triangleNum2 = document.getElementById('triangle-num2');
const triangleButton = document.getElementById('triangle-button');
const triangleAnswer = document.getElementById('triangle-answer');
// set event listeners 
// get user input(s)
// do any needed work with the value(s)
// update DOM to reflect new value(s)

addButton.addEventListener('click', () => {
    let num1 = addNum1.value;
    let num2 = addNum2.value;
    
    num1 = Number(num1);
    num2 = Number(num2);
    
    const sum = add(num1, num2);

    addAnswer.textContent = sum;
});

subtractButton.addEventListener('click', () => {
    let num1 = subtractNum1.value;
    let num2 = subtractNum2.value;
    
    num1 = Number(num1);
    num2 = Number(num2);
    
    const sum = subtract(num1, num2);

    subtractAnswer.textContent = sum;
});

multiplyButton.addEventListener('click', () => {
    let num1 = multiplyNum1.value;
    let num2 = multiplyNum2.value;
    
    num1 = Number(num1);
    num2 = Number(num2);
    
    const sum = multiply(num1, num2);

    multiplyAnswer.textContent = sum;
});

divideButton.addEventListener('click', () => {
    let num1 = divideNum1.value;
    let num2 = divideNum2.value;
    
    num1 = Number(num1);
    num2 = Number(num2);
    
    const sum = divide(num1, num2);

    divideAnswer.textContent = sum;
});

moduloButton.addEventListener('click', () => {
    let num1 = moduloNum1.value;
    let num2 = moduloNum2.value;
    
    num1 = Number(num1);
    num2 = Number(num2);
    
    const sum = modulo(num1, num2);

    moduloAnswer.textContent = sum;
});

integerDivisionButton.addEventListener('click', () => {
    let num1 = integerDivisionNum1.value;
    let num2 = integerDivisionNum2.value;
    
    num1 = Number(num1);
    num2 = Number(num2);
    
    const sum = integerDivision(num1, num2);

    integerDivisionAnswer.textContent = sum;
});

hypotenuseButton.addEventListener('click', () => {
    let num1 = hypotenuseNum1.value;
    let num2 = hypotenuseNum2.value;
    
    num1 = Number(num1);
    num2 = Number(num2);
    
    const sum = hypotenuse(num1, num2);

    hypotenuseAnswer.textContent = sum;
});

sphereButton.addEventListener('click', () => {
    let num1 = sphereNum1.value;
    
    num1 = Number(num1);
    
    const sum = volOfSphere(num1);
    
    sphereAnswer.textContent = sum;
});

cylinderButton.addEventListener('click', () => {
    let num1 = cylinderNum1.value;
    let num2 = cylinderNum2.value;
    
    num1 = Number(num1);
    num2 = Number(num2);
    
    const sum = volOfCylinder(num1, num2);

    cylinderAnswer.textContent = sum;
});

cylinderButton.addEventListener('click', () => {
    let num1 = cylinderNum1.value;
    let num2 = cylinderNum2.value;
    
    num1 = Number(num1);
    num2 = Number(num2);
    
    const sum = volOfCylinder(num1, num2);

    cylinderAnswer.textContent = sum;
});

triangleButton.addEventListener('click', () => {
    let num1 = triangleNum1.value;
    let num2 = triangleNum2.value;
    
    num1 = Number(num1);
    num2 = Number(num2);
    
    const sum = areaOfTriangle(num1, num2);

    triangleAnswer.textContent = sum;
});
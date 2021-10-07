// IMPORT MODULES under test here:
// import { add } from '../calculator.js';
import { add, multiply, subtract, divide, modulo, integerDivision, hypotenuse } from '../calculations.js';
import { volOfSphere, volOfCylinder, areaOfTriangle } from '../calculations.js';


const test = QUnit.test;



// name your test by what it is testing
test('add 5 + 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 3;
    const expected = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtract 4 - 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 3;
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiply 4 * 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 3;
    const expected = 12;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divide 12 / 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 12;
    const y = 3;
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('modulo 12 % 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 12;
    const y = 5;
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = modulo(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('integer Division 12 / 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 12;
    const y = 5;
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = integerDivision(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('hypotenuse 12 x 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 12;
    const y = 5;
    const expected = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = hypotenuse(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('hypotenuse 12 x 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 12;
    const y = 5;
    const expected = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = hypotenuse(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('hypotenuse 12 x 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 12;
    const y = 5;
    const expected = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = hypotenuse(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('volume of a sphere 12', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 12;
    const expected = 7238.229473870882;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = volOfSphere(x); // use your function here
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('volume of cylinder 12 x 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const r = 12;
    const h = 5;
    const expected = 2261.946710584651;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = volOfCylinder(r, h); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('area of a triangle 12 x 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 12;
    const y = 5;
    const expected = 30;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = areaOfTriangle(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
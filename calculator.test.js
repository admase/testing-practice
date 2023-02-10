const calculator = require('./calculator');

test('should add two numbers', () => {
    expect(calculator.add(8, 2)).toEqual(10);
});

test('should show error message', () => {
    expect(calculator.add(8, "two")).toEqual("is not a valid number");
});

test('should subtract two numbers', () => {
    expect(calculator.subtract(8, 2)).toEqual(6);
});

test('should show error message', () => {
    expect(calculator.subtract(8, "two")).toEqual("is not a valid number");
});


test('should multiply two numbers', () => {
    expect(calculator.multiply(8, 2)).toEqual(16);
});

test('should show error message', () => {
    expect(calculator.multiply(8, "two")).toEqual("is not a valid number");
});

test('should divide two numbers', () => {
    expect(calculator.divide(8, 2)).toEqual(4);
});

test('should show error message', () => {
    expect(calculator.divide(8, "two")).toEqual("is not a valid number");
});

test('should throw an error', () => {
    expect(() => calculator.divide(8, 0)).toThrow("you cannot divide by 0");
});
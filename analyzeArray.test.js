const analyzeArray = require('./analyzeArray');

test('[1, 2, 3, 4, 5] to be', () => {
    const isPass = {
        average: 3,
        min: 1,
        max: 5,
        length: 5
    }
    const data = [1, 2, 3, 4, 5];
    expect(analyzeArray(data)).toEqual(isPass);
});

test('[] should return null', () => {
    const data = [];
    expect(analyzeArray(data)).toBeNull();
});

test('[10, 100, 1000, 10000, 100000] to be', () => {
    const isPass = {
        average: 22222,
        min: 10,
        max: 100000,
        length: 5
    }
    const data = [10, 100, 1000, 10000, 100000];
    expect(analyzeArray(data)).toEqual(isPass);
});
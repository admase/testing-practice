const capitalize = require('./capitalize');

test('return "" for strings with length 0', () => {
    expect(capitalize("")).toBe("");
});

test('should capitalize first letter in string', () => {
    const str = 'danny';
    expect(capitalize(str)).toBe('Danny');
});
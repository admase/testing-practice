const reverseString = require('./reverseString');

test('shoule return "" for string with length 0', () => {
    expect(reverseString("")).toBe("");
});

test("should reverse normal strings", () => {
    expect(reverseString('reverse')).toBe('esrever');
});
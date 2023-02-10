const caesar = require('./caesarCipher');

test('return "" for strings with length 0', () => {
    expect(caesar("")).toBe("");
});

test('works with normal phrase', () => {
    expect(caesar('Caesar Cipher', 7)).toBe("Jhlzhy'Jpwoly");
});

test('works with negative shift', () => {
    expect(caesar("Jhlzhy'Jpwoly", -7)).toBe('Caesar Cipher');
});

test('works with same casing', () => {
    expect(caesar("Aaa", 1)).toBe("Bbb");
});

test('wrap z-a', () => {
    expect(caesar('z', 1)).toBe('a');
});

test('works with punctuations', () => {
    expect(caesar('Hello, World!', 5)).toBe("Mjqqt1%\\twqi&");
    expect(caesar('Mjqqt1%\\twqi&', -5)).toBe("Hello, World!");
});
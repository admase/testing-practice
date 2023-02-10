const reverseString = (str) => {
    if (str.length === 0 || str == "")
    {
        return '';
    }
    return str.split("").reverse().join("");
}

// console.log(reverseString('danny'));

module.exports = reverseString;
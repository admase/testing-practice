const caesar = (str, shift) => {
    let resultArr = [];

    if (str == '' || str.length === 0)
    {
        return '';
    }

    for (let i = 0; i < str.length; i++)
    {
        let code = str.charCodeAt(i) + shift;

        while (code > 122)
        {
            code = (code - 122) + 96;
        }
        resultArr.push(String.fromCharCode(code));
    }
    return resultArr.join('');
}

module.exports = caesar;

const capitalize = (str) => {
    if (str.length === 0 || str == "")
    {
        return "";
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = capitalize;
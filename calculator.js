const calculator = (() => {

    const add = (num1, num2) => {
        if (isNaN(num1) || isNaN(num2)) {
            return "is not a valid number";
        }
        return num1 + num2;
    }

    const subtract = (num1, num2) => {
        if (isNaN(num1) || isNaN(num2)) {
            return "is not a valid number";
        }
        return num1 - num2;
    }

    const multiply = (num1, num2) => {
        if (isNaN(num1) || isNaN(num2)) {
            return "is not a valid number";
        }
        return num1 * num2;
    }

    const divide = (num1, num2) => {
        if (parseInt(num2) == 0) {
            throw ("you cannot divide by 0");
        }

        if (isNaN(num1) || isNaN(num2)) {
            return "is not a valid number";
        }
        return num1 / num2;
    }

    return {
        add,
        subtract,
        multiply,
        divide
    }
})();

module.exports = calculator;
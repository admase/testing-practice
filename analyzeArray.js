const analyzeArray = (arr) => {
    if (arr.length === 0) {
        return null;
    }

    const sum = arr.reduce((a, b) => a + b);

    const average = sum / arr.length;
    const min = arr.reduce((a, b) => (b < a) ? b : a);
    const max = arr.reduce((a, b) => (b > a) ? b : a);
    const length = arr.length;

    return {
        average: average,
        min: min,
        max: max,
        length: length
    }
}

// console.log(analyzeArray([1,2,3,4,5])); // return { average: 3, min: 1, max: 5, length: 5 }

module.exports = analyzeArray;
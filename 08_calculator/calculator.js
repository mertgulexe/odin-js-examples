const add = function(...num) {
	return num.reduce((i, j) => (i + j));
};

const subtract = function(...num) {
		return num.reduce((i, j) => (i - j));
};

const sum = function(arr) {
	return arr.reduce(
        (i, j) => (i + j),
        0
    );
};

const multiply = function(num) {
    return num.reduce((i, j) => (i * j));
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
    // my verbose solution
    let accumulatedNum = 1;
    if (!num || num === 1) {
        return 1;
    } else {
        for (let n = 2; n <= num; n++) {
            accumulatedNum *= n; 
        }
        return accumulatedNum;
    }

    // odin's solution, which has more concise logic
    let product = 1;
    for (let n = num; n > 0; n--) {
        product *= n; 
    }
    return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

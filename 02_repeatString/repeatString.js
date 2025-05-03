const repeatString = function(str, numOfRepeats) {
    if (numOfRepeats < 0) return "ERROR";

    let resultingString = '';

    for (let i = 0; i < numOfRepeats; i++) {
        resultingString += str;
    }
    return resultingString;
};

// Do not edit below this line
module.exports = repeatString;

const reverseString = function(str) {
    // mert's solution
    const strArray = Array.from(str);
    let reversedString = '';

    while (strArray.length) {
        reversedString += strArray.pop();
    }

    return reversedString;

    // odin's solution:
    return str.split('').reverse().join('')
};

// Do not edit below this line
module.exports = reverseString;

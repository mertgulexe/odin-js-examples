const sumAll = function(firstTerm, lastTerm) {
    if (
        (!Number.isSafeInteger(firstTerm)) ||
        (!Number.isSafeInteger(lastTerm)) ||
        (firstTerm < 0) || (lastTerm < 0)
     ) return "ERROR";

    // let's use the summation formula:
    let sumResult, numOfIntegersBetween;
    numOfIntegersBetween = Math.abs(lastTerm - firstTerm) + 1;  // abs(...) for order-insensitive arguments
    sumResult = numOfIntegersBetween * (lastTerm + firstTerm) / 2;
    return sumResult;
};

// Do not edit below this line
module.exports = sumAll;

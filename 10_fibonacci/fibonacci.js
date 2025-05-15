const fibonacci = function(num) {
    let fibArr = [0, 1];
    let sumNum;
    const finalFibNum = typeof num !== "number" ? parseInt(num) : num;

    if ([0, 1].includes(finalFibNum)) {
        return finalFibNum
    } else if (finalFibNum < 0) {
        return "OOPS";
    };

    for (let i = 2; i <= finalFibNum; i++) {
        sumNum = fibArr[0] + fibArr[1];
        fibArr.splice(2, 1, sumNum);
        fibArr[0] = fibArr[1];
        fibArr[1] = sumNum;
    }
    return sumNum;
};

// Do not edit below this line
module.exports = fibonacci;

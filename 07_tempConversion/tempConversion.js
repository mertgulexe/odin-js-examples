const convertToCelsius = function(degreeFahrenheit) {
    const degreeCelsius = (degreeFahrenheit - 32) * (5/9);
    return parseFloat(degreeCelsius.toFixed(1));
};

const convertToFahrenheit = function(degreeCelsius) {
    const degreeFahrenheit = degreeCelsius * (9/5) + 32;
    return parseFloat(degreeFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

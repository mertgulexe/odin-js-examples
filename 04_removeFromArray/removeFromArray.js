const removeFromArray = function(arr, ...itemsToBeRemoved) {
    if (false) {
 
        // my solution: inefficient b.c. checks one by one:
        const arrDeepCopy = JSON.parse(JSON.stringify(arr));
        while (itemsToBeRemoved.length) {
            const itemToBeRemoved = itemsToBeRemoved.pop();
            while (arrDeepCopy.includes(itemToBeRemoved)) {
                const indxOfItem = arrDeepCopy.indexOf(itemToBeRemoved);
                arrDeepCopy.splice(indxOfItem, 1);
            }
        }
        return arrDeepCopy;

    } else if (false) {

        // odin solution 1:
        const newArray = [];
        arr.forEach(element => {
            if (!itemsToBeRemoved.includes(element)) {
                newArray.push(element);
            }
        });
        return newArray;

    } else {

        // odin solution 2:
        return arr.filter(
            element => !itemsToBeRemoved.includes(element)
        );

    }
};

// Do not edit below this line
module.exports = removeFromArray;

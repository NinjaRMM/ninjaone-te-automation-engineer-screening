function arrayContainsOnlyNumbers(array) {
    return array.every(n => {
        return typeof n === 'number';
    });
}

function knapsack (totalWeight, itemsWeights, itemValue) {
    let itemsWeightsLength = itemsWeights.length;
    let itemValueLength = itemValue.length;

    // If values are not numbers
    if(!arrayContainsOnlyNumbers(itemsWeights) || !arrayContainsOnlyNumbers(itemValue) || !(typeof totalWeight === 'number')) {
        return 0;
    }

    // Validation for not null values
    if (totalWeight == null || itemsWeights == null || itemValue == null) {
        return 0;
    }

    // If no weight is supported to be carried
    if (totalWeight === 0) {
        return 0;
    }

    // If array sizes don't match
    if(itemValueLength != itemsWeightsLength) {
        return 0;
    }

    // If values are negative
    if (totalWeight < 0 || itemsWeights.some(value => value < 0) || itemValue.some(value => value < 0)) {
        return 0;
    }

    // Validation for throwing different error messages can be implemented. Or even a try catch structure

    // Array to store value maximum items value
    let maxValueArray = Array(totalWeight + 1).fill(0);

    // Iterate over the amount of items available
    for (i = 0; i < itemsWeightsLength; i++) {
        // Iterate over the total supported weight
        for (weight = totalWeight; weight >= 0; weight--) {
            // If current item weight can fit knapsack
            if(itemsWeights[i] <= weight) {
                // Find the maximum value item or items
                maxValueArray[weight] = Math.max(maxValueArray[weight], maxValueArray[weight - itemsWeights[i]] + itemValue[i]);
            }
        }
    }

    return maxValueArray[totalWeight];
}
module.exports = knapsack;
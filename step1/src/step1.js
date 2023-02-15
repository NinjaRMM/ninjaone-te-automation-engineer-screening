function knapsack (totalWeight, itemsWeights, itemValue) {
    let itemsWeightsLength = itemsWeights.length;
    let itemValueLength = itemValue.length;

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

    // Find the maximum value object and verify I can carry it
    let maxArray = Array(totalWeight + 1).fill(0);

    // Iterate over the amount of items available
    for (i = 0; i < itemsWeightsLength; i++) {
        // Iterate over the total supported weight
        for (weight = totalWeight; weight >= 0; weight--) {
            if(itemsWeights[i] <= weight) {
                // Find the maximum value item
                maxArray[weight] = Math.max(maxArray[weight], maxArray[weight - itemsWeights[i]] + itemValue[i]);
            }
        }
    }

    return maxArray[totalWeight];
}
module.exports = knapsack;
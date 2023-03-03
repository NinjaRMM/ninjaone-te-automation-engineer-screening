/**
 * Implements the memory function method for the knapsack problem
 * @param {number} capacity - the total amount of weight you can carry
 * @param {Array.<number>} weights - non-negative array of the weights of all the items
 * @param {Array.<number>} values - an array of the values of all the items
 * @returns {number} maximum value that you will be able to carry
 */
function knapsack(capacity, weights, values) {
    if (weights.length !== values.length) {
        throw new Error("The number of weights and values must be equal");
    }

    const n = weights.length; // number of items

    // Create a 2D array to store the maximum value at each capacity and for each item
    const K = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        K[i] = new Array(capacity + 1).fill(0);
    }

    // Fill the K table. Bottom-up approach
    for (let i = 0; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (i === 0 || w === 0) {
                // if no items or capacity is 0, then maximum value is 0
                K[i][w] = 0;
            } else if (weights[i - 1] <= w) {
                // either include it or exclude the current item if its weight is less than or equal to the remaining capacity
                K[i][w] = Math.max(
                    values[i - 1] + K[i - 1][w - weights[i - 1]], // include current item
                    K[i - 1][w] // exclude current item
                );
            } else {
                // If the current item's weight is more than the remaining capacity, exclude it
                K[i][w] = K[i - 1][w];
            }
        }
    }

    return K[n][capacity];
}

module.exports = knapsack;
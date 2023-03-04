function knapsack(capacity, weights, values) {
    let breakCapacity = false;
    let indexValues = 0;
    let finalLoot = -1;

    if (capacity <= 0) return 0;
    if (weights.length != values.length)return 0;

    weights.reduce(function (accumulator, current, index) {
        if (((accumulator + current) > capacity) && !breakCapacity) {
            breakCapacity = true
            indexValues = index
            finalLoot = values.slice(0, indexValues).reduce((accumulator, current) => accumulator + current, 0)
            return accumulator;
        }
        return accumulator + current
    }, 0);

    if (!breakCapacity)  finalLoot = values.reduce((accumulator, current) => accumulator + current, 0)
    
    return finalLoot;
}

exports.knapsack = knapsack;

const knapsack = require('../src/knapsack-solution');
const assert = require('assert');

describe('Knapsack solution testing', function(){
    dataInputList = [
        {capacity: 10, weights: [1,2,3,4,5], values: [5,4,3,2,1], result:14},
        {capacity:  4, weights: [1,1,1,1,1], values: [5,4,3,2,1], result:14},
        {capacity:  5, weights: [1,2,3,4,5], values: [5,4,3,2,1], result: 9},
        {capacity: 0, weights: [1,2,3,4,5], values: [5,4,3,2,1], result:0}
    ];
    dataInputList.forEach((entry) => {

        it('succefully gets the expected result', async function(){
            assert.equal(knapsack(entry.capacity, entry.weights, entry.values), entry.result);
        });
    });
});
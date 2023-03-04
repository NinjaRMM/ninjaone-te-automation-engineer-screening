const {knapsack} = require('./challenge.js')
const tests = [
    { testName: 'extra capacity', capacity: 20, weights: [5, 2, 3, 4, 5], values: [5, 4, 3, 2, 1], expectedResult: 15 },
    { testName: 'full capacity', capacity: 15, weights: [5, 2, 3, 4, 5], values: [5, 4, 3, 6, 1], expectedResult: 18 },
    { testName: 'zero capacity', capacity: 0, weights: [1, 2, 3, 4, 5], values: [13, 41, 45, 122, 1], expectedResult: 0 },
    { testName: 'capacity is in range', capacity: 13, weights: [8, 2, 1, 6, 5], values: [13, 42, 25, 122, 1], expectedResult: 80 },
    { testName: 'objects are empty', capacity: 1, weights: [], values: [], expectedResult: 0 },
    { testName: '"weigth" object with more elements than "values"', capacity: 24, weights: [1,6,2,7,8,0,2], values: [15,8,1], expectedResult: 0 },
    { testName: '"values" object with more elements than "weigth"', capacity: 12, weights: [15,8,1], values: [1,6,2,7,8,0,2], expectedResult: 0 }

];

tests.forEach((unittest) => {
    test(`validate my knapsack capacity when it has '${unittest.testName}'`, () => {
        expect(knapsack(unittest.capacity, unittest.weights, unittest.values)).toBe(unittest.expectedResult);
    });
});
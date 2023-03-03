const knapsack = require('../src/knapsack')

const capacity = 10
const weights = [3, 6, 8]
const values = [50, 60, 100]
test('should return 0 if knapsack capacity is 0', () => {
    expect(knapsack(0, weights, values)).toBe(0)
})

test('should return 0 if no items are stored in the knapsack', () => {
    expect(knapsack(capacity, [], [])).toBe(0)
})

test('should throw error if the number of weights and values are not equal', () => {
    expect(() => knapsack(capacity, weights, [1])).toThrow("The number of weights and values must be equal")
})

test('should return the maximum value to carry for non negative weights and valid values', () => {
    expect(knapsack(capacity, weights, values)).toBe(110)
})
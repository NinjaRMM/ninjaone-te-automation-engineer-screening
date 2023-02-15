const knapsack = require('./step1');

// the total amount of weight you can carry = 10
// an array of the weights of all the items = [3,6,8]
// an array of the values of all of the items = [50,60,100]
test('Verify example value in README', () => {
    expect(knapsack(10, [3,6,8], [50,60,100])).toBe(110);
});

// the total amount of weight you can carry = 10
// an array of the weights of all the items = [10, 1]
// an array of the values of all of the items = [1, 1000]
test('Verify maximum weight and minimum value', () => {
    expect(knapsack(10, [10, 1], [1, 1000])).toBe(1000);
});

// the total amount of weight you can carry = 10
// an array of the weights of all the items = [1, 10]
// an array of the values of all of the items = [999, 1]
test('Verify minimum weight and maximum value', () => {
    expect(knapsack(10, [1, 10], [999,1])).toBe(999);
});

// the total amount of weight you can carry = 10
// an array of the weights of all the items = [1, 5, 3, 1, 10]
// an array of the values of all of the items = [1, 5, 3, 1, 10]
test('Verify tie in sum for max weight', () => {
    expect(knapsack(10, [1, 5, 3, 1, 10], [1, 5, 3, 1, 10])).toBe(10);
});

// the total amount of weight you can carry = 10
// an array of the weights of all the items = [10, 10, 10, 10, 10, 10]
// an array of the values of all of the items = [100, 1, 200, 2, 300, 3]
test('Verify same weights, different values', () => {
    expect(knapsack(10, [10, 10, 10, 10, 10, 10], [100, 1, 200, 2, 300, 3])).toBe(300);
});

// the total amount of weight you can carry = 10
// an array of the weights of all the items = [11, 12, 13, 14]
// an array of the values of all of the items = [1000, 2000, 3000, 4000]
test('Verify no item to carry', () => {
    expect(knapsack(10, [11, 12, 13, 14], [1000, 2000, 3000, 4000])).toBe(0);
});

// the total amount of weight you can carry = -1
// an array of the weights of all the items = [11, 12, 13, 14]
// an array of the values of all of the items = [1000, 2000, 3000, 4000]
test('Verify negative value in weight that can be carried', () => {
    expect(knapsack(-1, [11, 12, 13, 14], [1000, 2000, 3000, 4000])).toBe(0);
});

// the total amount of weight you can carry = 10
// an array of the weights of all the items = [10, 9, 8, -20]
// an array of the values of all of the items = [1000, 2000, 3000, 4000]
test('Verify negative value in weight array', () => {
    expect(knapsack(10, [10, 9, 8, -20], [1000, 2000, 3000, 4000])).toBe(0);
});

// the total amount of weight you can carry = 10
// an array of the weights of all the items = [10, 9, 8, 20]
// an array of the values of all of the items = [1000, 2000, -1, 4000]
test('Verify negative value in value array', () => {
    expect(knapsack(10, [10, 9, 8, 20], [1000, 2000, -1, 4000])).toBe(0);
});

// the total amount of weight you can carry = 0
// an array of the weights of all the items = any length
// an array of the values of all of the items = any length

test('Verify 0 is received if empty ', () => {
    expect(knapsack(0, [1,2,3,4,5,6,7,8,9,10], [100,101,102,103,104,105,106,107,108, 109, 110])).toBe(0);
});

// the total amount of weight you can carry = 10
// an array of the weights of all the items = lenght of 1, weight = 10
// an array of the values of all of the items = lenght of 1, value = 100

test('Verify only one possible item to take with equal supported weight to carry', () => {
    expect(knapsack(10, [10], [100])).toBe(100);
});

// the total amount of weight you can carry = 10
// an array of the weights of all the items = lenght of 1, weight = 11
// an array of the values of all of the items = lenght of 1, value = 100

test('Verify one item that weights more than supported weight', () => {
    expect(knapsack(10, [11], [100])).toBe(0);
});

// the total amount of weight you can carry = any
// an array of the weights of all the items = length of 5
// an array of the values of all of the items = length of 1

test('Verify array sizes of weights is greater than the values array', () => {
    expect(knapsack(10008000, [11,1,2,3,4], [100])).toBe(0);
});

// the total amount of weight you can carry = any
// an array of the weights of all the items = length of 1
// an array of the values of all of the items = length of 10

test('Verify array sizes of weights is lower than the values array', () => {
    expect(knapsack(10008000, [11], [100, 11, 12, 13, 14, 15, 16, 17, 18, 19])).toBe(0);
});
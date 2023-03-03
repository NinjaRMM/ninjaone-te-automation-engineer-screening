# Knapsack Problem

A JavaScript implementation of the Knapsack problem using dynamic programming.

## Installation

To install the required dependencies, run:

```bash
npm install
```

## How to use the function

To use the knapsack function, import it into your JavaScript code:

```javascript
const knapsack = require('./knapsack');
```

Then call the function with the capacity, weights, and values as parameters:

```javascript
const capacity = 50;
const weights = [10, 20, 30];
const values = [60, 100, 120];

const maxValue = knapsack(capacity, weights, values);
console.log(`Maximum value: ${maxValue}`);
```

This will output the maximum value that can be achieved with the given capacity, weights, and values.

#### Tests

To run the tests, use the following command:

```bash
npm test
```

This will run the tests using Jest and output the results in the console.

## References

This implementation of the Knapsack problem is based on the dynamic programming approach described in the book "The Design & Analysis of Algorithms" by Anany Levitin.


# Solution for Knapsack challenge

# 1 - Installing dependencies

Under `step1/src` folder execute the following command

```
npm install
```

# 2 - Testing 
## How to execut a test
Run following command to execute all tests

```bash
cd ./step1/src
npm run tests
```

## How to add a new custom test
To add more custom tests please update knapsack.test.js file and include a new object in `tests` 
```javascript
const tests = [
    { testName: 'extra capacity', capacity: 20, weights: [1, 4, 5], values: [5, 4, 3, 2, 1], expectedResult: 15 },
    { testName: 'full capacity', capacity: 15, weights: [3, 4, 5], values: [5, 4, 3, 6, 1], expectedResult: 18 },
    //{Add here my new custom test}
];
```

## Current tests
I've configured seven tests by default
-  validate my knapsack capacity when it has 'extra capacity'
-  validate my knapsack capacity when it has 'full capacity' 
-  validate my knapsack capacity when it has 'zero capacity' 
-  validate my knapsack capacity when it has 'capacity is in range'
-  validate my knapsack capacity when it has 'objects are empty'
-  validate my knapsack capacity when it has '"weigth" object with more elements than "values"'
-  validate my knapsack capacity when it has '"values" object with more elements than "weigth"'

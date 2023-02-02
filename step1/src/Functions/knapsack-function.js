
/*
Function name: knapsack
Param: 
  items: an array of {w: v:} (where 'w' stands for weight, and 'v' stands for value)
  capacity: a positive integer number
Will return max sum value that can reach, and the chosen subset to add up to the value.
*/

function knapsack(items, capacity){
    
    // This implementation uses dynamic programming.
    // Variable 'memo' is a grid(2-dimentional array) to store optimal solution for sub-problems,
    // which will be later used as the code execution goes on.
      var memo = [];
  
    // Filling the sub-problem solutions grid.
    for (var i = 0; i < items.length; i++) {
      // Variable 'cap' is the capacity for sub-problems. In this example, 'cap' ranges from 1 to 6.
      var row = [];
      for (var cap = 1; cap <= capacity; cap++) {
        row.push(getSolution(i,cap));
      }
      memo.push(row);
    }
  
    // The right-bottom-corner cell of the grid contains the final solution for the whole problem.
    return(getLast());
  
    function getLast(){
      var lastRow = memo[memo.length - 1];
      return lastRow[lastRow.length - 1];
    }
  
    function getSolution(row,cap){
      const NO_SOLUTION = {maxValue:0, subset:[]};
      // the column number starts from zero.
      var col = cap - 1;
      var lastItem = items[row];
      // The remaining capacity for the sub-problem to solve.
      var remaining = cap - lastItem.w;
  
      // Refer to the last solution for this capacity,
      // which is in the cell of the previous row with the same column
      var lastSolution = row > 0 ? memo[row - 1][col] || NO_SOLUTION : NO_SOLUTION;
      // Refer to the last solution for the remaining capacity,
      // which is in the cell of the previous row with the corresponding column
      var lastSubSolution = row > 0 ? memo[row - 1][remaining - 1] || NO_SOLUTION : NO_SOLUTION;
  
      // If any one of the items weights greater than the 'cap', return the last solution
      if(remaining < 0){
        return lastSolution;
      }
  
      // Compare the current best solution for the sub-problem with a specific capacity
      // to a new solution trial with the lastItem(new item) added
      var lastValue = lastSolution.maxValue;
      var lastSubValue = lastSubSolution.maxValue;
  
      var newValue = lastSubValue + lastItem.v;
      if(newValue >= lastValue){
        // copy the subset of the last sub-problem solution
        var _lastSubSet = lastSubSolution.subset.slice();
        _lastSubSet.push(lastItem);
        
        return {maxValue: newValue, subset:_lastSubSet};
        
        
      }else{
        return lastSolution;
      }
    }
  }
  
  // test with different values 
  var items = [
    {w:3,v:10},
    {w:6,v:60},
    {w:8,v:10}
  ];


  var items2 = [
    {w:1,v:20},
    {w:4,v:80},
    {w:2,v:40}
  ];


  var items3 = [
    {w:1,v:30},
    {w:4,v:30},
    {w:2,v:40}
  ];


  var items4 = [
    {w:1,v:10},
    {w:4,v:10},
    {w:2,v:10}
  ];

  
  function sumArray(items){
    let sum = 0 // the sum is initialed to 0
  
    for (let i = 0; i < items.length; i += 1) {
    // take every item in the array and add it to sum variable
    sum += items[i]
    
    }
  
    console.log(sum) 
    // return sum
    return sum
  }

  function validation(valueItems){
    
    if (valueItems <= 100){
      console.log("you will able to steal all this items");
      
    }else if(valueItems > 100){
      console.log("you will NOT able to steal all this items");
      
    }
    
    // return sum
   
  }


  function secondValidation(weightItems){
    
    if (weightItems <= 100){
      console.log("you will able to carry all this items");
      
    }else if(weightItems > 100){
      console.log("you will NOT able to carry all this items");
      
    }
    
    // return sum
   
  }

  var capacity = 100;  
  let sumOfValue = items.map(({ v }) => v);
  console.log("Test Number 1 should be able to steal these items");
  //sumArray(sumOfValue); print the sum 
  validation(sumArray(sumOfValue));
  console.log(knapsack(items, capacity));

  console.log("Test Number 2 should Not be able to steal this items");
  let sumOfValue2 = items2.map(({ v }) => v);
  validation(sumArray(sumOfValue2));
  console.log(knapsack(items2, capacity));

  console.log("Test Number 3 should be able to steal these item");
  let sumOfValue3 = items3.map(({ v }) => v);
  validation(sumArray(sumOfValue3));
  console.log(knapsack(items3, capacity));


  console.log("Test Number 3 should be able to steal these item");
  let sumOfValue4 = items4.map(({ v }) => v);
  validation(sumArray(sumOfValue4));
  console.log(knapsack(items4, capacity));

  
 
  

  

 
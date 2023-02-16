function knapsack(capacity, itemsWeightList, itemsValueList){
    let result;
    let addItemOption;
    let doNotAddItemOption;

    if(capacity == 0 || itemsValueList.length == 0 || itemsWeightList.length == 0){
        result =0; 
    }else if(itemsWeightList[0] > capacity){
        result = knapsack(capacity, itemsWeightList.slice(1), itemsValueList.slice(1));
    }else{
        doNotAddItemOption = knapsack(capacity, itemsWeightList.slice(1), itemsValueList.slice(1));
        addItemOption = itemsValueList[0] + knapsack(capacity-itemsWeightList[0], itemsWeightList.slice(1), itemsValueList.slice(1));
        result = Math.max(addItemOption, doNotAddItemOption);
    }
    return result;
}
console.log(knapsack(5,[1,2,3],[5,4,3]))

module.exports = knapsack;
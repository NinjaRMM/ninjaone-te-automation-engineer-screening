# step1

Knapsack Problem:

The Knapsack problem is a well-known optimization problem in computer science and mathematics. It involves choosing a subset of items from a given set of items, each with its own weight and value, in order to maximize the total value of the chosen items while not exceeding a given weight constraint.

Imagine you are a thief and you have a knapsack with a limited capacity. You have a list of items with their respective values and weights. Your goal is to choose a combination of items that maximizes the total value of the items that you can carry in your knapsack without exceeding its weight limit.


### Run test for Knapsack: TestKnapsack.java
Make sure to be in the root directory

Change values in command to test if necessary
testMaxValue is the EXPECTED max value, if it's equal to the result of the  algorithm the test will PASS (For the values and weights in the example command the max total value in knapsack is 110)

Run test command:
* `mvn test -Dtest=".TestKnapsack" -DnumItems=3 -Dweights=3,6,8 -Dvalues=50,60,100 -Dcapacity=10 -DtestMaxValue=110`



## Versions
* `testng@v7.7.1`
* `slf4j-api@v1.7.5`
* `slf4j-log4j12@v1.7.5`

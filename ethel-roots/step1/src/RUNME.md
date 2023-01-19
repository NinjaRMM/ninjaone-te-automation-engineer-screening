RUNME
=====
The directory perftest-roots\step1\src\ contains the following files:

	perftest-roots\step1\src\Knapsack.java
	perftest-roots\step1\src\TestKnapsack.java

Knapsack.java is a class file in which contain a static method knapsack() which 
takes in the following parameters and return the maximum values this particular
knapsack can hold.
	- the total amount of weight you can carry
	- an array of the weights of all the items
	- an array of the values of all of the items

TestKnapsack.java is the file that prompt user to input the above parameters.
* Assume the input type is integer and here did not do type check for the input.

After having all the input values, it will call Knapsack.knapsack() function to find 
the maximum values the particular knapsack can hold.

Compile the java files at command line:
----------------------------------------
	> javac Knapsack.java
	> javac TestKnapsack.java

Run Test:
---------
	> java TestKnapsack
	Enter knapsack capacity: <enter an integer and press enter>
	
	Please enter list of the values seperated by a space:
	<enter list of interger values and press enter>
	
	Please enter list of the weights seperated by a space:
	<enter list of interger values and press enter>
	
	Maximum knapsack value: <answer>

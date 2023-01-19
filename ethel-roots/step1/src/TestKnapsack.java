import java.util.Scanner;
import java.util.*;
/*
 *	TestKnapsack to test the findKnapsackMaxValue from Knapsack class.
 *  It prompts for knapsack capacity, list of values and list of weights.
 *  Then call Knapsack.knapsack() to find the maximum value 
 *  this particular Knapsack can have.
 */

class TestKnapsack {

	public static void main(String[] args) {
			
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter knapsack capacity: ");
		int capacity = Integer.parseInt(sc.nextLine());
		System.out.println("Capacity: " + capacity);

		// Prompt for the weights 
		System.out.println("Please enter list of the weights seperated by a space: ");
		String[] str_weights = sc.nextLine().split(" ");
		int[] weights = new int[str_weights.length];
		int i = 0;
		for (String w : str_weights) 
			weights[i++] = Integer.valueOf(w);		

		// Prompt for the values 
		System.out.println("Please enter list of the values seperated by a space: ");
		String[] str_values = sc.nextLine().split(" ");
		int[] values = new int[str_values.length];
		i = 0;
		for (String v : str_values) 
			values[i++] = Integer.valueOf(v);

		// Call method Knapsack.knapsack() to find the maximum values it can hold
		int maxValues = Knapsack.knapsack(capacity, weights, values);
		System.out.println("Maximum knapsack value: " + maxValues);
	}

}
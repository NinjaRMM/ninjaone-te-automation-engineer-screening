import java.util.*;
/*
 *  0/1 knapsack resolve by using bottom-up Dynamic Programming 
 *  DP memoization bottom-up with time and space complexity of O(N * C)
 *	Use dp[][] to represent the maximum knapsack value for capacity 'c' 
 *  calculated from the first 'i' items.
 *  For each item at index 'i' and capacity 'c' have two options:
 *	1. Exclude the item at index 'i' and take whatever value we get
 *     from the sub-array excluding this item: dp[i-1][c]
 *  2. Include the item at index 'i' if its weight is not more than the
 *     capacity.  We include its value plus whatever value we get from the 
 *     remaining capacity and from remaining items: values[i] + dp[i-1][c-weights[i]]
 *	The maximum of the above two values will be the optimal solution.
 */
class Knapsack {
	
	public static int knapsack(int capacity, int[] weights, int[] values) {
		// basic checks
		if (capacity <= 0 || values.length == 0 || weights.length != values.length)
			return 0;
		
		int n = values.length;
		int[][] dp = new int[n][capacity +1];
		
		// populate the capacty=0 columns, with '0' capacty we have '0' values 
		for (int i = 0; i < n; i++)
			dp[i][0] = 0;
		
		// if we have only one weight, we will take it if it is not more than the capacity
		for (int c = 0; c < capacity; c++) {
			if (weights[0] <= c)
				dp[0][c] = values[0];
		}
		
		// process all sub-arrays for all the capacities
		for(int i=1; i < n; i++) {
			for(int c=1; c <= capacity; c++) {
				int value1= 0, value2 = 0;
				// include the item, if it is not more than the capacity
				if(weights[i] <= c)
					value1 = values[i] + dp[i-1][c-weights[i]];
				// exclude the item
				value2 = dp[i-1][c];
				// take maximum
				dp[i][c] = Math.max(value1, value2);
			}
		}	
		// maximum values will be at the bottom-right corner.
		return dp[n-1][capacity];
	}
}
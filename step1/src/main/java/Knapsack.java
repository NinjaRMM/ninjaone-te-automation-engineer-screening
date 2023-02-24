

public class Knapsack {

	public static int knapsackDP(int capacity, int[] weights, int[] values) {
		int n = weights.length;
		
	    if (n <= 0 || capacity <= 0) {
	        return 0;
	    }
        
	    int[][] dp = new int[n + 1][capacity + 1];

	    for (int i = 1; i <= n; i++) {
	        for (int j = 1; j <= capacity; j++) { 
	            if (weights[i - 1] > j) {
	                dp[i][j] = dp[i - 1][j];
	            } else {
	                dp[i][j] = Math.max(
	                  dp[i - 1][j], 
	                  dp[i - 1][j - weights[i - 1]] + values[i - 1]);
	            }
	        }
	    }
	    
	    return dp[n][capacity];
	}
	
	static int knapsackSpaceOpt(int capacity, int[] weights, int[] values) {
		int n = weights.length;

	    if (n <= 0 || capacity <= 0) {
	        return 0;
	    }
	    
        int[] dp = new int[capacity + 1];
 
        for (int i = 0; i < n; i++) {
            for (int j = capacity; j >= weights[i]; j--) {
                dp[j] = Math.max(dp[j], values[i] + dp[j - weights[i]]);
            }
        }
        
        return dp[capacity];
	}

}

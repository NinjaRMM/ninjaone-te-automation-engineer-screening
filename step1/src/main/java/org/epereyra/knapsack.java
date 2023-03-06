package org.epereyra;

public class knapsack {
    public static int main(int maxWeight, int[] weights, int[] values) {
        try {
            return knapsack(maxWeight,weights,values);
        } catch (Exception e) {
            throw new IllegalArgumentException();
        }
    }
    public static int knapsack(int maxWeight, int[] weights, int[] values) {
        if (weights.length != values.length) {
            throw new ArithmeticException();
        }
        int n = weights.length;
        int[][] dp = new int[n + 1][maxWeight + 1];
        for (int i = 1; i <= n; i++) {
            int weight = weights[i-1];
            int value = values[i-1];
            for (int w = 1; w <= maxWeight; w++) {
                if (weight <= w) {
                    dp[i][w] = Math.max(dp[i-1][w], dp[i-1][w-weight] + value);
                } else {
                    dp[i][w] = dp[i-1][w];
                }
            }
        }
        return dp[n][maxWeight];
    }

}
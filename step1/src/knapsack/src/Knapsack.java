public class Knapsack {
    public static void main(String[] args) {
        System.out.println(knapsack(new int[] {3, 6, 8},new int[] {50, 60, 100}, 10));
        System.out.println(knapsack(new int[] {3, 6, 8},new int[] {50, 60, 100}, 7));
        System.out.println(knapsack(new int[] {3, 6, 8},new int[] {50, 60, 100}, 0));
        System.out.println(knapsack(new int[] {1, 2, 4, 5 ,7, 8},new int[] {2, 5, 6,10, 13, 16}, 8));
    }

    static int knapsack(int[] weights, int[] values, int maxWeightCarry) {
        int n = weights.length;
        // dimension error
        if(weights.length != values.length){
            return -1;
        }
        // size 0
        if (n == 0 || maxWeightCarry <= 0) {
            return 0;
        }


        // empty knapsack
        int[][] table = new int[n + 1][maxWeightCarry + 1];
        for (int j = 0; j <= maxWeightCarry; j++) {
            table[0][j] = 0;
        }

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= maxWeightCarry; j++) {
                if (weights[i - 1] > j) {
                    table[i][j] = table[i - 1][j];
                } else {
                    int currentValue = table[i - 1][j];
                    int candidateValue = table[i - 1][j - weights[i - 1]] + values[i - 1];
                    if (candidateValue > currentValue) {
                        table[i][j] = candidateValue;
                    } else {
                        table[i][j] = currentValue;
                    }
                }
            }
        }

        // show table
        for (int i = 0; i < table.length; i++) {
            for (int j = 0; j < table[i].length; j++) {
                System.out.print(table[i][j] + " ");
            }
            System.out.println();
        }

        return table[n][maxWeightCarry];
    }

}

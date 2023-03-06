package org.epereyra;
import org.testng.Assert;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;
public class errorhandler {

    @Parameters({ "weights","values","result","maxWeight" })
    @Test(expectedExceptions = IllegalArgumentException.class)
    public void test(String weights, String values, int result, int maxWeight) {
        int[] weightsArr = functions.strTointArr(weights);
        int[] valuesArr = functions.strTointArr(values);
        Assert.assertEquals(knapsack.main(maxWeight,weightsArr,valuesArr), result);
    }
}
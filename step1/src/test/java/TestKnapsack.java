import org.testng.annotations.Test;
import java.util.Arrays;
import java.util.List;
import org.testng.AssertJUnit;

public class TestKnapsack {
  
  @Test(testName = "TestKnapsack")
  public void testDPSolution() {
      System.out.println("Knapsack problem test");

      int n = Integer.valueOf(System.getProperty("numItems"));
      int capacity = Integer.valueOf(System.getProperty("capacity"));
      int testMaxValue = Integer.valueOf(System.getProperty("testMaxValue"));

      String weigthsInput = System.getProperty("weights");
      List<String> weigthList = Arrays.asList(weigthsInput.split(","));
      int []weigths = new int[n];
      
      String valuesInput = System.getProperty("values");
      List<String> valueList = Arrays.asList(valuesInput.split(","));
      int []values = new int[n];
      
      for(int i=0; i<n; i++) {
    	  weigths[i] = Integer.valueOf(weigthList.get(i));
    	  values[i] = Integer.valueOf(valueList.get(i));
      }

      int maxValue = Knapsack.knapsackDP(capacity, weigths, values);
      AssertJUnit.assertEquals(maxValue, testMaxValue);
  }
}

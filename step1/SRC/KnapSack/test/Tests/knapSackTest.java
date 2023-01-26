/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit5TestClass.java to edit this template
 */
package Tests;

import static junit.framework.Assert.assertEquals;
import knapsack.KnapSack;
import org.junit.Test;

/**
 *
 * @author sapoj
 */
public class knapSackTest extends KnapSack {
    
    public knapSackTest() {
    }
    
   

    // TODO add test methods here.
    // The methods must be annotated with annotation @Test. For example:
    //
    @Test
    public void test1() {
    
      int weight= 10;
      int weights[] = {3, 6, 8};
      int values[] = {50, 60, 100};
      
      System.out.println(knapsack(weight,weights,values));
      assertEquals(110,knapsack(weight,weights,values));
    }
    
     @Test
     public void test2() {
    
      int weight= 10;
      int weights[] = {1, 3, 11};
      int values[] = {50, 60, 100};
      
      System.out.println(knapsack(weight,weights,values));
      assertEquals(110,knapsack(weight,weights,values));
    }
     
     @Test
     public void test3() {
    
      int weight= 10;
      int weights[] = {1, 6, 2};
      int values[] = {100, 43, 60};
      
      System.out.println(knapsack(weight,weights,values));
      assertEquals(203,knapsack(weight,weights,values));
    } 
     
        @Test
     public void test4() {
    
      int weight= 13;
      int weights[] = {5, 6, 3};
      int values[] = {132, 43, 60};
      
      System.out.println(knapsack(weight,weights,values));
      assertEquals(192,knapsack(weight,weights,values));
    } 
    
    
}

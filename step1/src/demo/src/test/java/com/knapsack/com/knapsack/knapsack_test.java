package com.knapsack;

import static org.junit.Assert.assertEquals;

import org.junit.Test;


public class knapsack_test extends step1Knapsack
{
    
    @Test
    public void Test_Default()
    {
        int weight= 10;
        int items_weight[] = {3, 6, 8};
        int items_values[] = {50, 60, 100};
        int expected = 110;
        int result = knapsack(weight, items_weight, items_values);
        System.out.println("Test 1:"+result);
        assertEquals( expected, result);
    }
    @Test
    public void Test_MoreItemList()
    {
        int weight= 10;
        int items_weight[] = {3, 6, 8, 1, 2, 5};
        int items_values[] = {50, 60, 100, 10, 35, 120};
        int expected = 205;
        int result = knapsack(weight, items_weight, items_values);
        System.out.println("Test 2:"+result);
        assertEquals( expected, result);
    }
    @Test
    public void Test_MoreWeight()
    {
        int weight= 15;
        int items_weight[] = {3, 6, 8, 1, 2, 5};
        int items_values[] = {50, 60, 100, 10, 35, 120};
        int expected = 240;
        int result = knapsack(weight, items_weight, items_values);
        System.out.println("Test 3:"+result);
        assertEquals( expected, result);
    }
    @Test
    public void Test_LessWeight()
    {
        int weight= 8;
        int items_weight[] = {3, 6, 8, 1, 2, 5};
        int items_values[] = {50, 60, 100, 10, 35, 120};
        int expected = 170;
        int result = knapsack(weight, items_weight, items_values);
        System.out.println("Test 4:"+result);
        assertEquals( expected, result);
    }
    @Test
    public void Test_DuplicatedItemsWeight()
    {
        int weight= 10;
        int items_weight[] = {3, 6, 8, 8};
        int items_values[] = {50, 60, 100, 120};
        int expected = 120;
        int result = knapsack(weight, items_weight, items_values);
        System.out.println("Test 5:"+result);
        assertEquals( expected, result);
    }
    @Test
    public void Test_DuplicatedItemsValue()
    {
        int weight= 10;
        int items_weight[] = {3, 6, 8, 1};
        int items_values[] = {50, 60, 100, 50};
        int expected = 160;
        int result = knapsack(weight, items_weight, items_values);
        System.out.println("Test 5:"+result);
        assertEquals( expected, result);
    }
}

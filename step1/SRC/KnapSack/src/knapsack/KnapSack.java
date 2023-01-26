/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */

package knapsack;

import java.util.ArrayList;
import java.util.List;
import java.util.*;

/**
 *
 * @author sapoj
 */
public class KnapSack {

    public static List<Integer> listW;
    public static List<Integer> listV;
    /**
     * @param args the command line arguments
     */
    
  
 public static int knapsack(int weight, int[] stuffWeights, int[] stuffValues){
       
        List<Integer> sortedlist = new ArrayList<Integer>();
        List<Integer> vlList = new ArrayList<Integer>();
        List<Integer> whList = new ArrayList<Integer>();
        
        
        int lon =stuffWeights.length;
        int aux=0;
        
        while(aux<lon){
            whList.add(stuffWeights[aux]);
            //System.out.println(whList.get(aux));
            aux++;
            
        }

        vlList.addAll(whList);
        for(int i=0; i<lon;i++){
            int handsValue=0;
            int pivot=stuffWeights[i];
            whList.remove(whList.indexOf(pivot));
            handsValue=stuffValues[vlList.indexOf(pivot)];
            //System.out.println(handsValue);
            aux=0;
            while (aux<whList.size()){
                if(weight>=pivot+whList.get(aux)){
                    handsValue=handsValue+stuffValues[vlList.indexOf(whList.get(aux))];
                   // System.out.println(whList.get(aux));
                    pivot=pivot+whList.get(aux);
                }
               aux++; 
            }
            sortedlist.add(handsValue);
            whList.add(stuffWeights[i]);
        }
         
        aux=0;
        int mayor=0;
        System.out.println(sortedlist);
        while(aux<sortedlist.size()){
        
           if (mayor<=sortedlist.get(aux)){
               mayor=sortedlist.get(aux);
           }          
           aux++;
            
        }
        

        return mayor;
    }
    
   
    public static void main(String[] args) {
        // TODO code application logic here
      


       
       
    }
    
 
    
}

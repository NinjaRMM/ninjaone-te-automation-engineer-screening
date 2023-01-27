package com.knapsack;
import java.util.*;

public class step1Knapsack {
    public static void main(String args[]) {
      
    }

    public static int knapsack(int w, int []itm_w, int []itm_val){
        List<Integer> list_vwpos = new ArrayList<Integer>();
        List<Integer> list_weights = new ArrayList<Integer>();
        List<Integer> final_list = new ArrayList<Integer>();
        
        for(int v:itm_w){
            list_weights.add(v);
        }
        
        list_vwpos.addAll(list_weights);
        
        for(int i=0; i<itm_w.length;i++){
            int tmp=itm_w[i];
            int total=0;
            list_weights.remove(list_weights.indexOf(tmp));
            total=itm_val[list_vwpos.indexOf(tmp)];
            for(int v:list_weights){
                if(w>=tmp+v){
                    total=total+itm_val[list_vwpos.indexOf(v)];
                    tmp=tmp+v;
                }
            }
            final_list.add(total);
            list_weights.add(itm_w[i]);
        }
        Collections.sort(final_list,Collections.reverseOrder());
        return final_list.get(0);
    }
}

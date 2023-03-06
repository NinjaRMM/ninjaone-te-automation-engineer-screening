package org.epereyra;

public class functions {
    static int[] strTointArr(String str)
    {
        if (str == ""){
            int[] zero = {};
            return zero;
        }else {
            String[] splitArray = str.split(",");
            int[] array = new int[splitArray.length];

            // parsing the String argument as a signed decimal
            // integer object and storing that integer into the
            // array
            for (int i = 0; i < splitArray.length; i++) {
                array[i] = Integer.parseInt(splitArray[i]);
            }
            return array;
        }
    }
}

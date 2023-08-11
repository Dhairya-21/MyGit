package Day7;

import java.util.Scanner;

public class Prac5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number with decimal point");
        float num = sc.nextFloat();
        sc.close();
        String str = Float.toString(num);
        StringBuffer sb = new StringBuffer(str);
        String rev = new String();
        int n = str.indexOf('.');
        sb.deleteCharAt(n);
        sb = sb.reverse();
        str = sb.toString();
        sc.close();
        for (int i = 0; i < str.length(); i++) {
            if (i == n) {
                rev = rev + "." + str.charAt(i);
            } else {
                rev = rev + str.charAt(i);
            }
        }
        System.out.print(rev);
    }
}

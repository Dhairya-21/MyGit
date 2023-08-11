package Day7;

import java.util.Scanner;

public class Prac7 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a string");
        String str = sc.next();
        StringBuffer sb = new StringBuffer(str);
        sb.delete(0, sb.length());
        System.out.println(sb);
        sc.close();
    }
}

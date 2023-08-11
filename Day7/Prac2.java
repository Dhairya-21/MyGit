package Day7;

import java.util.*;

public class Prac2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int n = sc.nextInt();
        System.out.println("Enter another number: ");
        int m = sc.nextInt();
        n = n + m;
        m = n - m;
        n = n - m;
        System.out.println(n);
        System.out.println(m);
        sc.close();

    }
}

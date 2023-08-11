package Day8;

import java.util.Scanner;

public class File13 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number");
        int n = sc.nextInt();
        System.out.println("Enter another number");
        int m = sc.nextInt();
        if (n > m) {
            int per, com;
            per = fact(n) / fact(n - m);
            com = fact(n) / (fact(m) * fact(n - m));
            System.out.print("The permutation of numbers is: " + per);
            System.out.print("\nThe combination of numbers is: " + com);
        } else {
            System.out.print("Second number must be smaller");
        }
        sc.close();
    }

    static int fact(int n) {
        if (n == 1) {
            return 1;
        } else {
            return n * fact(n - 1);
        }
    }
}
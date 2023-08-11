package Day8;

import java.util.Scanner;

public class File15 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number");
        int n = sc.nextInt();
        int m = n;
        String s = Integer.toString(n);
        int arm = 0;
        for (int i = 0; i < s.length(); i++) {
            arm += Math.pow((n % 10), s.length());
            n /= 10;
        }
        if (m == arm) {
            System.out.println(m + " is a armstrong number");
        } else {
            System.out.println(m + " is not an armstrong number ");
        }
        sc.close();
    }
}

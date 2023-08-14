package Day8;

import java.util.Scanner;

public class test2 {
    public static void main(String[] args) {
        test2 obj = new test2();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of dices");
        int n = sc.nextInt();
        System.out.println("Enter the outcome");
        int out = sc.nextInt();
        if (n <= 6 && out <= n * 6) {
            System.out.println(obj.rollsToTarget(n, out));
        } else {
            System.out.println("Enter a valid input");
        }
        sc.close();
    }

    public int rollsToTarget(int d, int target) {
        if (d == 0 && target == 0) {
            return 1;
        }
        if (d == 0 || target < 0) {
            return 0;
        }
        int diffways = 0;
        for (int i = 1; i <= 6; i++) {
            diffways += rollsToTarget(d - 1, target - i);
            System.out.print(diffways + " ");
        }
        System.out.println();
        return diffways;
    }
}

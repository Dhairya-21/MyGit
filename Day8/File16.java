package Day8;

import java.util.Scanner;

public class File16 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number of dice rolls: ");
        int noOfDice = sc.nextInt();
        System.out.println("Enter the outcome of rolls");
        int outcome = sc.nextInt();
        System.out.println(numRollsToTarget(noOfDice, outcome));
        sc.close();
    }

    static int numRollsToTarget(int dice, int outcome) {
        int[][] dp = new int[dice + 1][outcome + 1];
        dp[0][0] = 1;
        for (int i = 1; i <= dice; i++) {
            for (int j = 1; j <= outcome; j++) {
                for (int k = 1; k <= 6; k++) {
                    if (j >= k) {
                        dp[i][j] = dp[i][j] + dp[i - 1][j - k];
                        // System.out.print(dp[i][j] + " ");
                    } else {
                        break;
                    }
                }
                // System.out.println();
            }
            // System.out.println();
        }
        return dp[dice][outcome];
    }
}
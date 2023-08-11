package Day7;

import java.util.*;

public class Prac4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a string");
        String str = sc.nextLine();
        System.out.println("Enter a number");
        int n = sc.nextInt();
        int m = 1;
        for (int i = 0; i < str.length(); i++) {
            if (m == n) {
                if (str.charAt(i) != ' ') {
                    System.out.print(str.charAt(i));
                } else {
                    break;
                }
            } else if (m < n) {
                if (str.charAt(i) == ' ') {
                    m++;
                }
            }
        }
        sc.close();
    }
}

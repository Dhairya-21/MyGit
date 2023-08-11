package Day7;

import java.util.*;

public class Prac3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of elements");
        int n = sc.nextInt();
        int arr[] = new int[n];
        System.out.println("Enter numbers");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        System.out.println("The odd numbers are: ");
        for (int j = 0; j < n; j++) {
            if ((arr[j] % 2) == 1) {
                System.out.print(arr[j] + " ");
            }
        }
        sc.close();
    }
}
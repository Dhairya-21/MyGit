package Day8;

import java.util.Scanner;

public class File12 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a string");
        String str = sc.nextLine();
        String word = "";
        String arr[] = new String[10];
        int index = 0;
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) != ' ') {
                word += str.charAt(i);
            } else {
                arr[index] = word;
                word = "";
                ++index;
            }
        }
        for (int i = 9; i >= 0; i--) {
            if (arr[i] != null) {
                word = word + " " + arr[i];
            }
        }
        System.out.println(word);
        sc.close();
    }
}

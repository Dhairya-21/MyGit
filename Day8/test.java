package Day8;

import java.util.Scanner;

public class test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a string");
        String s = sc.nextLine();
        StringBuffer sb = new StringBuffer(s);
        char temp;
        for (int i = 0; i < sb.length(); i++) {
            for (int j = 0; j < sb.length() - 1; j++) {
                if (sb.charAt(j) >= sb.charAt(j + 1)) {
                    temp = sb.charAt(j);
                    sb.replace(j, j + 1, Character.toString(sb.charAt(j + 1)));
                    sb.replace(j + 1, j + 2, Character.toString(temp));
                }
            }
        }
        System.out.println(sb);
        sc.close();
    }
}

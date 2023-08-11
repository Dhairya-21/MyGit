package Day8;

import java.util.*;

public class File1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a String with white spaces");
        String str = sc.nextLine();
        String nosp = "";
        for (int i = 0; i < str.length(); i++) {
            if ((char) (str.charAt(i)) == ' ') {
                continue;
            } else {
                nosp = nosp + str.charAt(i);
            }
        }

        System.out.println(nosp);
        sc.close();
    }
}

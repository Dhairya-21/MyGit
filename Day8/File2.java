package Day8;

import java.util.*;

public class File2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a String");
        String st = sc.nextLine();
        ArrayList<Character> ar = new ArrayList<Character>();
        for (int i = 0; i < st.length(); i++) {
            if (st.charAt(i) != ' ') {
                ar.add(st.charAt(i));
            }
        }
        Collections.sort(ar);
        System.out.println(ar);
        sc.close();
    }
}

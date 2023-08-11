package Day8;

public class File6 {
    public static void main(String[] args) {
        for (int i = 5; i > 0; i--) {
            for (int j = 0; j < 9; j++) {
                if (i == 5 && j >= 4) {
                    System.out.print("*");
                } else if ((j - i) == 3 || (j - i) == -1) {
                    System.out.print("*");
                } else if (i == 1 && j <= 4) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}

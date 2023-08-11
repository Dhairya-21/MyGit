package Day8;

public class File5 {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 4; j++) {
                if (i > 4 && j == 0 && i != 9) {
                    System.out.print(" ");
                } else if (i == 4 || j == 0 || i == 9) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            for (int k = 0; k < 5; k++) {
                if (k == 0 || i == 0 || i == 4) {
                    System.out.print("*");
                } else if (i > 4 && k == 4) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();

        }
    }
}

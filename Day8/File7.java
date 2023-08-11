package Day8;

public class File7 {
    public static void main(String[] args) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 5; j++) {
                if (i == 0 && (j == 0 || j == 4)) {
                    System.out.print(" ");
                } else if (i == 4 && (j == 0 || j == 4)) {
                    System.out.print(" ");
                } else if (i == 8 && (j == 0 || j == 4)) {
                    System.out.print(" ");
                } else if (i == 0 || i == 4 || i == 8) {
                    System.out.print("*");
                } else if (j == 0 || j == 4) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}

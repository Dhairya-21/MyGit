package Day8;

public class File11 {
    public static void main(String[] args) {
        for (int i = 0; i < 9; i++) {
            for (int j = 4; j > i; j--) {
                System.out.print(" ");
            }
            for (int k = 0; k <= i; k++) {
                if (i > 4) {
                    break;
                }
                if (k == 0) {
                    System.out.print(".");
                } else {
                    System.out.print(i + ".");
                }
            }
            for (int j = 4; j < i; j++) {
                System.out.print(" ");
            }
            for (int l = 9; l > i; l--) {
                if (i < 5) {
                    continue;
                }
                if (l == 0) {
                    System.out.print(".");
                } else {
                    System.out.print((8 - i) + ".");
                }
            }
            System.out.println();
        }
    }
}

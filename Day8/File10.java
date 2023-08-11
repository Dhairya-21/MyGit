package Day8;

public class File10 {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            for (int j = 4; j > i; j--) {
                System.out.print(" ");
            }
            for (int k = 0; k <= i; k++) {
                if (k == 0) {
                    System.out.print(".");
                } else {
                    System.out.print(i + ".");
                }
            }
            System.out.println();
        }
    }
}

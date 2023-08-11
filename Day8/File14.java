package Day8;

public class File14 {
    public static void main(String[] args) {
        try {
            String abc = null;
            System.out.println(abc.length());

        } catch (NullPointerException e) {
            System.out.println(e);
        }
    }
}
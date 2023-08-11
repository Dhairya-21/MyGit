package Day7;

interface FirstInterface {
    public void firstMethod();

    public default void first() {
        System.out.println("First Interface Default method");
    }
}

interface SecondInterface {
    public void secondMethod();

    public default void second() {
        System.out.println("Second Interface Default method");
    }
}

public class Prac6 implements FirstInterface, SecondInterface {
    public void firstMethod() {
        System.out.println("First Method");
    }

    public void secondMethod() {
        System.out.println("Second Method");
    }

    public static void main(String[] args) {
        Prac6 obj = new Prac6();
        obj.firstMethod();
        obj.secondMethod();
        obj.first();
        obj.second();
    }
}

package Day7;

class Inherit {
    void print() {
        System.out.println("This is an example of inheritance");
    }
}

class InheritTwice extends Inherit {
    void print() {
        System.out.print("Printing from the second level");
    }
}

public class Prac1 extends InheritTwice {
    public static void main(String[] args) {
        System.out.println("Hello");
        Inherit obj = new Inherit();
        InheritTwice obj2 = new InheritTwice();
        obj.print();
        obj2.print();
    }
}
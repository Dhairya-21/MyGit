package Day8;

public class File3 {
    public static void main(String[] args) {
        int temp = 0;
        int arr[] = { 98, 32, 72, 94, 75, 73, 92, 36, 28, 34 };
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length - 1; j++) {
                if (arr[j] < arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        System.out.println("Second Highest element is " + arr[1]);
    }
}

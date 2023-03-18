// By - Kaustav Purkayastha ( Gurucharan University, Silchar - @ Department of Computer Science )

// 1. Write a Java program to explore the different methods of ArrayList class.


import java.util.ArrayList;

public class ArrayListMethods {
  public static void main(String[] args) {
    // Create an empty ArrayList
    ArrayList<String> fruits = new ArrayList<String>();

    // Add elements to the ArrayList
    fruits.add("apple");
    fruits.add("banana");
    fruits.add("orange");

    // Get the size of the ArrayList
    int size = fruits.size();
    System.out.println("Size of the ArrayList: " + size);

    // Check if the ArrayList is empty
    boolean isEmpty = fruits.isEmpty();
    System.out.println("Is the ArrayList empty? " + isEmpty);

    // Access an element in the ArrayList
    String firstFruit = fruits.get(0);
    System.out.println("First fruit in the ArrayList: " + firstFruit);

    // Replace an element in the ArrayList
    fruits.set(1, "grape");
    System.out.println("New second fruit in the ArrayList: " + fruits.get(1));

    // Remove an element from the ArrayList
    fruits.remove(2);
    System.out.println("Updated ArrayList after removing an element: " + fruits);

    // Clear the ArrayList
    fruits.clear();
    System.out.println("Cleared ArrayList: " + fruits);
  }
}

// By - Kaustav Purkayastha ( Gurucharan University, Silchar - @ Department of Computer Science )

// 2. Write a Java program to sort the list of numbers or words using collection framework.


import java.util.*;

public class SortList {
  public static void main(String[] args) {
    // Create a Scanner object to get user input
    Scanner input = new Scanner(System.in);

    // Create an ArrayList to store the user input
    List<String> list = new ArrayList<String>();

    // Get input from the user and add it to the ArrayList
    System.out.print("Enter list of numbers/words (separated by space): ");
    String userInput = input.nextLine();
    String[] items = userInput.split(" ");
    for (String item : items) {
      list.add(item);
    }

    // Sort the ArrayList
    Collections.sort(list);

    // Print the sorted ArrayList
    System.out.println("Sorted list: " + list);
  }
}
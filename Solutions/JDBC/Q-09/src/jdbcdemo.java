// By - Kaustav Purkayastha ( Gurucharan University, Silchar - @ Department of Computer Science )

// 9. Write a JDBC program to connect java interface with DBMS to perform the database management operations.


import java.sql.*;

public class jdbcdemo {

    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/kaustavdb"; // Change this to your database URL
        String user = "root"; // Change this to your database username
        String password = "9365872396"; // Change this to your database password
        
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;
        
        try {
            // Connect to the database
            conn = DriverManager.getConnection(url, user, password);
            
            // Create a statement object
            stmt = conn.createStatement();
            
            // Execute a query
            rs = stmt.executeQuery("SELECT * FROM mytable");
            
            // Process the query results
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                double price = rs.getDouble("price");
                System.out.println("Product ID: " + id + ", Name: " + name + ", Price: " + price);
            }
            
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            // Close the result set, statement, and connection objects
            try {
                if (rs != null) rs.close();
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}

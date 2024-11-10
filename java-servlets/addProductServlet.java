import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/addProduct")
public class AddProductServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Get form data
        int productID = Integer.parseInt(request.getParameter("productID"));
        String productType = request.getParameter("productType");
        String productName = request.getParameter("productName");
        int quantity = Integer.parseInt(request.getParameter("quantity"));
        String productSize = request.getParameter("productSize");

        // Database connection details
        String jdbcURL = "jdbc:sqlite:identifier.sqlite";

        try {
            // Establish database connection
            Connection connection = DriverManager.getConnection(jdbcURL);

            // SQL query to insert data
            String sql = "INSERT INTO Product (productID, productType, productName, quantity, productSize) VALUES (?, ?, ?, ?, ?)";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setInt(1, productID);
            statement.setString(2, productType);
            statement.setString(3, productName);
            statement.setInt(4, quantity);
            statement.setString(5, productSize);

            // Execute the query
            int rows = statement.executeUpdate();
            if (rows > 0) {
                response.getWriter().println("Product added successfully!");
            }

            // Close the connection
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
            response.getWriter().println("Error adding product.");
        }
    }
}

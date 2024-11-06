import java.util.Date;

public class ShoppingCart {
    // Fields
    private int cartID;
    private int productID;
    private int quantity;
    private Date dateAdded;

    // Constructor
    public ShoppingCart(int cartID, int productID, int quantity, Date dateAdded) {
        this.cartID = cartID;
        this.productID = productID;
        this.quantity = quantity;
        this.dateAdded = dateAdded;
    }

    // Getter & Setter Methods
    public int getCartID() {
        return cartID;
    }

    public void setCardID(int cartID) {
        this.cartID = cartID;
    }

    public int getProductID() {
        return productID;
    }

    public void setProductID(int productID) {
        this.productID = productID;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Date getDateAdded() {
        return dateAdded;
    }

    public void setDateAdded(Date dateAdded) {
        this.dateAdded = dateAdded;
    }
}

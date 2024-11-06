public class Product {
    // Fields
    private int productID;
    private String productType;
    private String productName;
    private int quantity;
    private String productSize;

    // Constructor
    public Product(int productID, String productType, String productName, int quantity, String productSize) {
        this.productID = productID;
        this.productType = productType;
        this.productName = productName;
        this.quantity = quantity;
        this.productSize = productSize;
    }

    // Getter & Setter Methods
    public int getProductID() {
        return productID;
    }

    public void setProductID(int productID) {
        this.productID = productID;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getProductSize() {
        return productSize;
    }

    public void setProductSize(String productSize) {
        this.productSize = productSize;
    }
}

import java.util.Date;

// Make connection to Customer class
public class Order {
    // Fields
    private int orderID;
    private Date dateCreated;
    private Date dateShipped;
    private String customerName;
    private String customerID;
    private String status;
    private String shippingID;

    // Constructor
    public Order(int orderID, Date dateCreated, Date dateShipped, String customerName, String customerID, String status, String shippingID) {
        this.orderID = orderID;
        this.dateCreated = dateCreated;
        this.dateShipped = dateShipped;
        this.customerName = customerName;
        this.customerID = customerID;
        this.status = status;
        this.shippingID = shippingID;
    }

    // Getter & Setter Methods
    public int getOrderID() {
        return orderID;
    }

    public void setOrderID(int orderID) {
        this.orderID = orderID;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public Date getDateShipped() {
        return dateShipped;
    }

    public void setDateShipped(Date dateShipped) {
        this.dateShipped = dateShipped;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerID() {
        return customerID;
    }

    public void setCustomerID(String customerID) {
        this.customerID = customerID;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getShippingID() {
        return shippingID;
    }

    public void setShippingID(String shippingID) {
        this.shippingID = shippingID;
    }
}

public class Customer {
    // Fields
    private String customerName;
    private String address;
    private String email;
    private String creditCardInfo;
    private String shippingInfo;
    private float accountBalance;
    private User user;  // Aggregation: Customer "has-a" User

    // Constructor
    public Customer(String customerName, String address, String email, String creditCardInfo, String shippingInfo, float accountBalance, User user) {
        this.customerName = customerName;
        this.address = address;
        this.email = email;
        this.creditCardInfo = creditCardInfo;
        this.shippingInfo = shippingInfo;
        this.accountBalance = accountBalance;
        this.user = user;   // Establishing connection / relation to User class
    }

    // Getter & Setter Methods
    public String getCustomerName() {
        return customerName;
    }
    
    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCreditCardInfo() {
        return creditCardInfo;
    }

    public void setCreditCardInfo(String creditCardInfo) {
        this.creditCardInfo = creditCardInfo;
    }

    public String getShippingInfo() {
        return shippingInfo;
    }

    public void setShippingInfo(String shippingInfo) {
        this.shippingInfo = shippingInfo;
    }

    public getAccountBalance() {
        return accountBalance;
    }

    // addAccountBalance function to be put here

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

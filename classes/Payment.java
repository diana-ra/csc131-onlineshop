public class Payment {
    // Fields
    private int paymentID;
    private String email;
    private String paymentMethod;
    private String cardNum;

    // Constructor
    public Payment(int paymentID, String email, String paymentMethod, String cardNum) {
        this.paymentID = paymentID;
        this.email = email;
        this.paymentMethod = paymentMethod;
        this.cardNum = cardNum;
    }

    // Getter & Setter Methods
    public int getPaymentID() {
        return paymentID;
    }

    public void setPaymentID(int paymentID) {
        this.paymentID = paymentID;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getCardNum() {
        return cardNum;
    }

    public void setCardNum(String cardNum) {
        this.cardNum = cardNum;
    }
}

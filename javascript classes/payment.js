class Payment {
    // Constructor
    constructor(paymentID, email, paymentMethod, cardNum) {
        this.paymentID = paymentID;
        this.email = email;
        this.paymentMethod = paymentMethod;
        this.cardNum = cardNum;
    }

    // Getter & Setter Methods
    getPaymentID() {
        return this.paymentID;
    }

    setPaymentID(paymentID) {
        this.paymentID = paymentID;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getPaymentMethod() {
        return this.paymentMethod;
    }

    setPaymentMethod(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    getCardNum() {
        return this.cardNum;
    }

    setCardNum(cardNum) {
        this.cardNum = cardNum;
    }
}
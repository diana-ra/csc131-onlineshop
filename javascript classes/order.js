class Order {
    // Constructor
    constructor(orderID, dateCreated, dateShipped, customerName, customerID, status, shippingID) {
        this.orderID = orderID;
        this.dateCreated = new Date(dateCreated);
        this.dateShipped = new Date(dateShipped);
        this.customerName = customerName;
        this.customerID = customerID;
        this.status = status;
        this.shippingID = shippingID;
    }

    // Getter & Setter Methods
    getOrderID() {
        return this.orderID;
    }

    setOrderID(orderID) {
        this.orderID = orderID;
    }

    getDateCreated() {
        return this.dateCreated;
    }

    setDateCreated(dateCreated) {
        this.dateCreated = new Date(dateCreated);
    }

    getDateShipped() {
        return this.dateShipped;
    }

    setDateShipped(dateShipped) {
        this.dateShipped = new Date(dateShipped);
    }

    getCustomerName() {
        return this.customerName;
    }

    setCustomerName(customerName) {
        this.customerName = customerName;
    }

    getCustomerID() {
        return this.customerID;
    }

    setCustomerID(customerID) {
        this.customerID = customerID;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
    }

    getShippingID() {
        return this.shippingID;
    }

    setShippingID(shippingID) {
        this.shippingID = shippingID;
    }
}
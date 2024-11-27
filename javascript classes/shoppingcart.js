class ShoppingCart {
    // Constructor
    constructor(cartID, productID, quantity, dateAdded) {
        this.cartID = cartID;
        this.productID = productID;
        this.quantity = quantity;
        this.dateAdded = new Date(dateAdded);
    }

    // Getter & Setter Methods
    getCartID() {
        return this.cartID;
    }

    setCartID(cartID) {
        this.cartID = cartID;
    }

    getProductID() {
        return this.productID;
    }

    setProductID(productID) {
        this.productID = productID;
    }

    getQuantity() {
        return this.quantity;
    }

    setQuantity(quantity) {
        this.quantity = quantity;
    }

    getDateAdded() {
        return this.dateAdded;
    }

    setDateAdded(dateAdded) {
        this.dateAdded = new Date(dateAdded);
    }
}
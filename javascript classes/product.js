class Product {
    // Constructor
    constructor(productID, productType, productName, quantity, productSize) {
        this.productID = productID;
        this.productType = productType;
        this.productName = productName;
        this.quantity = quantity;
        this.productSize = productSize;
    }

    // Getter & Setter Methods
    getProductID() {
        return this.productID;
    }

    setProductID(productID) {
        this.productID = productID;
    }

    getProductType() {
        return this.productType;
    }

    setProductType(productType) {
        this.productType = productType;
    }

    getProductName() {
        return this.productName;
    }

    setProductName(productName) {
        this.productName = productName;
    }

    getQuantity() {
        return this.quantity;
    }

    setQuantity(quantity) {
        this.quantity = quantity;
    }

    getProductSize() {
        return this.productSize;
    }

    setProductSize(productSize) {
        this.productSize = productSize;
    }
}
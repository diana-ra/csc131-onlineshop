class ShippingInfo {
    // Constructor
    constructor(shippingID, shippingType, shippingCost, shippingRegionID) {
        this.shippingID = shippingID;
        this.shippingType = shippingType;
        this.shippingCost = shippingCost;
        this.shippingRegionID = shippingRegionID;
    }

    // Getter & Setter Methods
    getShippingID() {
        return this.shippingID;
    }

    setShippingID(shippingID) {
        this.shippingID = shippingID;
    }

    getShippingType() {
        return this.shippingType;
    }

    setShippingType(shippingType) {
        this.shippingType = shippingType;
    }

    getShippingCost() {
        return this.shippingCost;
    }

    setShippingCost(shippingCost) {
        this.shippingCost = shippingCost;
    }

    getShippingRegionID() {
        return this.shippingRegionID;
    }

    setShippingRegionID(shippingRegionID) {
        this.shippingRegionID = shippingRegionID;
    }
}
public class ShippingInfo {
    // Fields
    private int shippingID;
    private String shippingType;
    private int shippingCost;
    private int shippingRegionID;

    // Constructor
    public ShippingInfo(int shippingID, String shippingType, int shippingCost, int shippingRegionID) {
        this.shippingID = shippingID;
        this.shippingType = shippingType;
        this.shippingCost = shippingCost;
        this.shippingRegionID = shippingRegionID;
    }

    // Getter & Setter Methods
    public int getShippingID() {
        return shippingID;
    }

    public void setShippingID(int shippingID) {
        this.shippingID = shippingID;
    }

    public String getShippingType() {
        return shippingType;
    }

    public void setShippingType(String shippingType) {
        this.shippingType = shippingType;
    }

    public int getShippingCost() {
        return shippingCost;
    }

    public void setShippingCost(int shippingCost) {
        this.shippingCost = shippingCost;
    }

    public int getShippingRegionID() {
        return shippingRegionID;
    }

    public void setShippingRegionID(int shippingRegionID) {
        this.shippingRegionID = shippingRegionID;
    }
}

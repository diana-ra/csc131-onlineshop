const User = require('./User');

class Customer {
    // Constructor
    constructor(customerName, address, email, creditCardInfo, shippingInfo, accountBalance, user) {
        this.customerName = customerName;
        this.address = address;
        this.email = email;
        this.creditCardInfo = creditCardInfo;
        this.shippingInfo = shippingInfo;
        this.accountBalance = accountBalance;
        this.user = user;
    }

    // Getters & Setters
    getCustomerName() {
        return this.customerName;
    }

    setCustomerName(customerName) {
        this.customerName = customerName;
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        this.address = address;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getCreditCardInfo() {
        return creditCardInfo;
    }

    setCreditCardInfo(cardInfo) {
        this.creditCardInfo = cardInfo;
    }

    getShippingInfo() {
        return shippingInfo;
    }

    setShippingInfo(shippingInfo) {
        this.shippingInfo = shippingInfo;
    }

    getAccountBalance() {
        return accountBalance;
    }

    setAccountBalance(userBalance) {
        this.accountBalance = userBalance;
    }

    getUser() {
        return this.user;
    }

    setUser(user) {
        this.user = user;
    }
}
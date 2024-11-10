CREATE TABLE Users (
    email STRING PRIMARY KEY,
    password STRING,
    loginStatus BOOLEAN,
    registerDate DATE
);

CREATE TABLE Product (
    productID INTEGER PRIMARY KEY,
    productName STRING,
    quantity INTEGER,
    productSize STRING
);

CREATE TABLE ShoppingCart (
    cartID INTEGER PRIMARY KEY,
    productID INTEGER,
    FOREIGN KEY (productID) REFERENCES Product(productID)
);

CREATE TABLE Payment (
    paymentID INTEGER PRIMARY KEY,
    paymentMethod STRING,
    cardNum STRING
);

CREATE TABLE Customer (
    customerName STRING PRIMARY KEY,
    address STRING,
    email STRING,
    accountBalance FLOAT,
    FOREIGN KEY (email) REFERENCES Users(email)
);

CREATE TABLE ShippingInfo (
    shippingID INTEGER PRIMARY KEY,
    shippingType STRING,
    shippingCost INT
);

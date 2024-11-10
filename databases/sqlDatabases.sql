CREATE TABLE Users (
    email TEXT PRIMARY KEY,
    password TEXT,
    loginStatus BOOLEAN,
    registerDate DATE
);

CREATE TABLE Product (
    productID INTEGER PRIMARY KEY,
    productName TEXT,
    quantity INTEGER,
    productSize TEXT
);

CREATE TABLE ShoppingCart (
    cartID INTEGER PRIMARY KEY,
    productID INTEGER,
    FOREIGN KEY (productID) REFERENCES Product(productID)
);

CREATE TABLE Payment (
    paymentID INTEGER PRIMARY KEY,
    paymentMethod TEXT,
    cardNum TEXT
);

CREATE TABLE Customer (
    customerName TEXT PRIMARY KEY,
    address TEXT,
    email TEXT,
    accountBalance FLOAT,
    FOREIGN KEY (email) REFERENCES Users(email)
);

CREATE TABLE ShippingInfo (
    shippingID INTEGER PRIMARY KEY,
    shippingType TEXT,
    shippingCost INT
);

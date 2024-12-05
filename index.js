import { DB } from './connect.js';

import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());

// Get Users Table
app.get('/api', (req, res) => {
  res.set('content-type', 'application/json');
  
  //Sql statement that wil run in SqlLite
  const sql = 'SELECT * FROM users';
  let data = { users: [] };
  try {
    //returns all rows in user table
    DB.all(sql, [], (err, rows) => {
      if (err) {
        throw err; 
      }
      rows.forEach((row) => {
        data.users.push({ email: row.email, password: row.password, loginStatus: row.loginStatus, registerDate: row.registerDate });
      });
     //return user data in JSON 
      let content = JSON.stringify(data);
      res.send(content);
    });
  } catch (err) {
    console.log(err.message);
    res.status(467);
    res.send(`{"code":467, "status":"${err.message}"}`);
  }
});

// Get Product Table
app.get('/api/product', (req, res) => {
  res.set('content-type', 'application/json');
  const sql = 'SELECT * FROM product';
  let data = { users: [] };
  try {
    DB.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach((row) => {
        data.users.push({ productID: row.productID, productName: row.productName, quantity: row.quantity, productSize: row.productSize, price: row.price });
      });
      let content = JSON.stringify(data);
      res.send(content);
    });
  } catch (err) {
    console.log(err.message);
    res.status(467);
    res.send(`{"code":467, "status":"${err.message}"}`);
  }
});

// Get Payment Table
app.get('/api/payment', (req, res) => {
  res.set('content-type', 'application/json');
  const sql = 'SELECT * FROM payment';
  let data = { users: [] };
  try {
    DB.all(sql, [], (err, rows) => {
      if (err) {
        throw err; 
      }
      rows.forEach((row) => {
        data.users.push({ paymentID: row.paymentID, paymentMethod: row.paymentMethod, cardNum: row.cardNum });
      });
      let content = JSON.stringify(data);
      res.send(content);
    });
  } catch (err) {
    console.log(err.message);
    res.status(467);
    res.send(`{"code":467, "status":"${err.message}"}`);
  }
});

// Get Customer Table
app.get('/api/customer', (req, res) => {
  res.set('content-type', 'application/json');
  const sql = 'SELECT * FROM customer';
  let data = { users: [] };
  try {
    DB.all(sql, [], (err, rows) => {
      if (err) {
        throw err; 
      }
      rows.forEach((row) => {
        data.users.push({ customerName: row.customerName, address: row.address, email: row.email, accountBalance: row.accountBalance });
      });
      let content = JSON.stringify(data);
      res.send(content);
    });
  } catch (err) {
    console.log(err.message);
    res.status(467);
    res.send(`{"code":467, "status":"${err.message}"}`);
  }
});

// Get Shipping Info Table
app.get('/api/shippinginfo', (req, res) => {
  res.set('content-type', 'application/json');
  const sql = 'SELECT * FROM shippingInfo';
  let data = { users: [] };
  try {
    DB.all(sql, [], (err, rows) => {
      if (err) {
        throw err; 
      }
      rows.forEach((row) => {
        data.users.push({ shippingID: row.shippingID, shippingType: row.shippingType, shippingCost: row.shippingCost });
      });
      let content = JSON.stringify(data);
      res.send(content);
    });
  } catch (err) {
    console.log(err.message);
    res.status(467);
    res.send(`{"code":467, "status":"${err.message}"}`);
  }
});

// Get Shopping Cart Table
app.get('/api/shoppingcart', (req, res) => {
  res.set('content-type', 'application/json');
  const sql = 'SELECT * FROM shoppingCart';
  let data = { users: [] };
  try {
    DB.all(sql, [], (err, rows) => {
      if (err) {
        throw err; 
      }
      rows.forEach((row) => {
        data.users.push({ cartID: row.cartID, productID: row.productID });
      });
      let content = JSON.stringify(data);
      res.send(content);
    });
  } catch (err) {
    console.log(err.message);
    res.status(467);
    res.send(`{"code":467, "status":"${err.message}"}`);
  }
});

// Post to Users Table
app.post('/api', (req, res) => {
  console.log(req.body);

  res.set('content-type', 'application/json');
  //Runs sql statement in sqlLite each "?" is a value that is required to fill the user table with 
  const sql = 'INSERT INTO users(email, password, loginStatus, registerDate) VALUES (? , ? , ? , ?)';
  let newId;
  try {
    DB.run(sql, [req.body.email, req.body.password, req.body.loginStatus, req.body.registerDate], function (err) {
      if (err) throw err;
      newId = this.lastID; 
      res.status(201);
      let data = { status: 201, message: `User ${newId} saved.` };
      let content = JSON.stringify(data);
      res.send(content);
    });
  } catch (err) {
    console.log(err.message);
    res.status(468);
    res.send(`{"code":468, "status":"${err.message}"}`);
  }
});

// Delete a User
app.delete('/api', (req, res) => {
  res.set('content-type', 'application/json');
  //gets the id number from the endpoint ex. /api?id=3 while get the 3rd id in user table and be deleted
  const sql = 'DELETE FROM users WHERE id=?';
  try {
    DB.run(sql, [req.query.id], function (err) {
      if (err) throw err;
      if (this.changes === 1) {
        //one item deleted
        res.status(200);
        res.send(`{"message":"User ${req.query.email} was removed from list."}`);
      } else {
        //no delete done
        res.status(200);
        res.send(`{"message":"No operation needed."}`);
      }
    });
  } catch (err) {
    console.log(err.message);
    res.status(468);
    res.send(`{"code":468, "status":"${err.message}"}`);
  }
});

//port number listening on
app.listen(3000, (err) => {
  if (err) {
    console.log('ERROR:', err.message);
  }
  console.log('LISTENING on port 3000');
});

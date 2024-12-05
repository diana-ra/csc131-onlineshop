# csc131-onlineshop

An online shopping application created as part of a project for CSC 131. The application includes user management, product browsing, shopping cart functionality, payment processing, and database integration.

Make sure to download Node JS, Express JS, Postman.

How the Code Runs:

1. First type in the terminal on vsCode “node index.js” to execute the java file and start up the express server
2. It will start a local server on localhost:3000 and make a connection to the sqlite database “store.db”
3. Now it is listening on port 3000 for http calls for Get,Post, and Delete
4. For the Get call it runs a SQL query the returns the whole user table in json format 
5. For the Post call it runs a SQL insert statement that waits to input values in the users table by translating the json data it receives from the “/api” endpoint
6. For the Delete call it will run a SQL delete statement for one user id. It will determine the id number from the endpoint. For example user id 4 would be “/api?id=4”

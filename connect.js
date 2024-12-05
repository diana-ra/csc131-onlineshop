import sqlite3 from 'sqlite3';
const sql3 = sqlite3.verbose();

//creates the connection to the sqlite database
const DB = new sql3.Database('./store.db', sqlite3.OPEN_READWRITE, connected);

//lets us know if the connection is succesfull
function connected(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Connected to DB');
}

export { DB };


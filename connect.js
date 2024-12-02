import sqlite3 from 'sqlite3';
const sql3 = sqlite3.verbose();

// const DB = new sql3.Database(':memory:', sqlite3.OPEN_READWRITE, connected);
// const DB = new sql3.Database('', sqlite3.OPEN_READWRITE, connected);
const DB = new sql3.Database('./store.db', sqlite3.OPEN_READWRITE, connected);

function connected(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Created the DB or SQLite DB does already exist');
}

let sql = `CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY,
  email TEXT NOT NULL,
  password TEXT NOT NULL
)`;
DB.run(sql, [], (err) => {
  //callback function
  if (err) {
    console.log('error creating enemies table');
    return;
  }
  console.log('CREATED TABLE');
});

export { DB };

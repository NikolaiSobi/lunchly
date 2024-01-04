/** Database for lunchly */

require("dotenv").config()
const pg = require("pg");

// process.env.DATABASE should be in the form of
// "postgresql://user:password@host:5432/databaseName"
const db = new pg.Client(process.env.DATABASE);

db.connect((err) => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  });

module.exports = db;

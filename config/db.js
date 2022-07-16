var sqldb = require("mssql");

const db = {
    user: "Interadmin",
    password: "IN^$#@~!()",
    server: "192.168.30.95",
    database: "DB_INTERNSHIP",
    port: 1433,
    options: {
      encrypt: true,
      trustServerCertificate: true,
      
  }
};

module.exports = db;
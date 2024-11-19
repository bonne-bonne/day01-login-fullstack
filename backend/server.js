// ======== Package Imports ========= //
const express = require("express");
const mysql = require("mysql2");
require("dotenv").config({path:  '../../.env'});
const cors = require("cors");

// Enable express
const app = express();

// ========== Middleware ============= //
app.use(cors());

// Create the connection to the database using pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD, // your password for root
  database: process.env.MYSQL_DATABASE, // database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

//============ API ENDPOINTS ==============//
// Root endpoint
app.get("/", (req, res) => {
  console.log("/ endpoint was hit 🎯");

  pool.query(`SELECT * FROM team_mate`, (err, result) => {
    if (err) {
      console.log("Database error:", err);
      return res.status(500).json({errorMessage: "An error occurred while fetching data from the database.", error: err});
    } else {
      res.json(result);
    }
  });
});

// Login endpoint
app.post('/api/login', (req, res) => {
    console.log("The /api/login endpoint was hit 🎯");
    console.log(req);
    res.send("This is the login api")
})


//============= PORT =================//
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is alive on http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.log("Port is already in use");
    } else {
      console.log("Server Error", error);
    }
  });

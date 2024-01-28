const path = require("path");
const express = require("express");
var url = require("url");
var mysql = require('mysql');

const PORT = process.env.PORT || 3001;

const app = express();

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "HEad9731$",
    database:"mydb"
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({ message: "Hello ADAM 3 from server!" });
});

app.get("/select", (req, res) => { 
    var sql_select = "SELECT id, part_id, part_name, small_part FROM part_list ORDER BY part_id ASC";

    conn.connect(function(err) {
        if (err) throw err;

        conn.query(sql_select, function (err, result) {
            if (err) throw err;
            res.json( result );
        });
    });    
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
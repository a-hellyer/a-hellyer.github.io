//
// Alter Data
//
var mysql = require('mysql');

var sql = "INSERT INTO part_list (part_id, part_name, small_part) VALUES ?";

var values = [
    [1, 'Slingshot Covers', true],
    [2, 'Slingshot Housings', true],
    [3, 'Slingshot Cams', true],
    [4, 'Catapult Housings', true],
    [5, 'Catapult Covers', true],
    [6, 'T1XX Side Step - Crew Cab ', false],
    [7, 'T1XX Side Step - Reg Cab', false]
  ];

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "HEad9731$",
    database:"mydb"
  });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    con.query(sql_select, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
//
// Get Data
//
var mysql = require('mysql');

var sql_select = "SELECT * FROM part_list ORDER BY part_id ASC";

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
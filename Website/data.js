var mysql   = require('mysql');
var faker = require('faker');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'names'
});

var data = [];
for(var i = 0; i < 500; i++){
    data.push([
        faker.name.findName(),
        faker.date.past()
    ]);
}
 
var q = 'INSERT INTO list_names (name, created_at) VALUES ?';
 
connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});

connection.end();
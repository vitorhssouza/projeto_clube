var mysql  = require('mysql2');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'xxxxxx',
  database : 'db_senai'
});
 
connection.connect(function(err){
    if(err) throw err;
    console.log('Connected');
});

const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    port     : 3306,
    password : '',
    database : 'burgers_db'
});
 
connection.connect((err)=>{
    if(err){
        console.log('Error connecting: ' + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;

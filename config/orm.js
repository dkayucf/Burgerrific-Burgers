const connection = require('../config/connection');

   
    let orm = {
        selectAll: function(cb){
            connection.query('SELECT * FROM burgers', function (error, results, fields) {
              if (error) throw error;
              cb(results);
            });
        },
        insertOne: function(value, cb){

            let query = "INSERT INTO burgers ( burger_name) VALUES ( ? )";

            connection.query(query, [value], function (error, results, fields) {
              if (error) throw error;
              cb(results);
            });
        },
        deleteOne: function(id, cb){
            let query = "DELETE FROM burgers WHERE id = ? ";
            connection.query(query, [id], function(error, results, fields){
                if(error) throw error;
                cb(results);
                
            });
        },
        updateOne: function(id, cb){
            let query = "UPDATE burgers SET devoured = TRUE  WHERE id = ? ";
            connection.query(query, [id], function(error, results, fields){
                if(error) throw error;
                cb(results);
            })
        }
    }
    
    module.exports = orm;
        
        
       
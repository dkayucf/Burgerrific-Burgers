const orm = require('../config/orm');

const burger = {
    all: function(cb){
        orm.selectAll(function(res){
            cb(res);    
        });
    },
    create: function(value, cb){
        orm.insertOne(value, function(res){
            cb(res);
        });
    },
    delete: function(id, cb){
        orm.deleteOne(id, function(res){
            cb(res);
        });
    },
    update: function(id, cb){
        orm.updateOne(id, function(res){
            cb(res);
        });
    }
}

module.exports = burger;
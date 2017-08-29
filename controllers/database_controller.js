var mysql = require('mysql');
var configDB = require('../config/db.js');
var wacsoft_ls_db = mysql.createConnection(configDB.connection_parameters);// connect to mysql database

var m = "wajega allan christopher";

module.exports.CONNECT_TO_DATABASE = function(){
  wacsoft_ls_db.connect(function(err){
    if (err){
        throw err
       //console.log('Error Connecting to database');
    }
    else
    {
        console.log('connected to Database');
    }
  })
}

module.exports.sd_use = wacsoft_ls_db;
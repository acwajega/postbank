   var http = require('http');
   var url = require('url');
   var mysql = require('mysql');
   var db_controller = require('./controllers/database_controller.js');     
   var action_controller = require('./controllers/actions_controller.js');    
   
  //---------------------------------CONNECTING TO MYSQL DB--------------------------------------------------  
  db_controller.CONNECT_TO_DATABASE();
   //--------------------------------------------------------------------------------------------------------


   var server = http.createServer(function(req,res){

   console.log('Recieved Request'+ req.url);

    //---------------Registering the server request------
   // action_controller.registerServerRequest();
    //-------------End of registering the server request

  





   }).listen(8180, "0.0.0.0");
   console.log('Server running at http://0.0.0.0:8080');
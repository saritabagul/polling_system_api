const express = require('express');
const db = require('./config/mongoose');
const port = 8000;
const app = express();

//use middlewares
app.use(express.urlencoded());

// use express router
app.use('/', require('./routes'));


// server setting 
app.listen(port,function(err){
    if(err){
        console.log("Error connecting with server");
    }

    console.log('Server is listening on port: '+ port);
})

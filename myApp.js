var express = require('express');
var app = express();
app.use( (req, res, next) => {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip); 
  next();
});

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
/*console.log("Hello World");*/

/** 2) A first working Express Server */
/*
app.get("/", function(req, res) {
res.send('Hello Express');
})
*/
/** 3) Serve an HTML file */
let index = __dirname + "/views/index.html";
app.get("/", function(req, res) {res.sendFile(index);
                                }
       );

/** 4) Serve static assets  */
let publics = __dirname + "/public";
/*app.use(express.static(publics));*/

/** 5) serve JSON on a specific route */
let json = __dirname + "/json";
let newObj = {"message": "Hello json"};
/*app.get("/json", (req, res) => {res.json(newObj)});*/
/** 6) Use the .env file to configure the app */

 if (process.env.MESSAGE_STYLE === 'uppercase') {
   newObj['message']= newObj['message'].toUpperCase();
 }
app.get("/json", (req, res) => {res.json(newObj)});
console.log(newObj);
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next()},
  (req, res) => {
    res.json({time: req.time});
});

/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;



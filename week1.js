// PROBLEM 1
const { readFileSync, writeFileSync } = require("fs"); // creates a variable that both reads and writes each .txt file synchronously, which will allow you to work with the file system on your computer.

const fs = require("fs");
// creates a variable fs, which will allow you to work with the file system on your computer.

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
// creates variables that read and return the original contents of each .txt file by locating the path of the files and encoding the files.

console.log(first, second);
// logs the results of the last 2 variables into your console.

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`
);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
// creates a variable that both reads and writes each .txt file synchronously, which will allow you to work with the file system on your computer.

//==============================================================

//PROBLEM 2
const {readFile, writeFile} = require('fs');
// creates a variable that both reads and writes each .txt file, which will allow you to work with the file system on your computer.




console.log('start');


readFile('./content/first.txt','utf8', (err, result)=> {
   if (err) {
       console.log(err);
       return 
   }
   const first = result;
   console.log(result);
// console logs the result of the first variable that contains the readFile function, which reads and returns the original contents of each .txt file by locating the path of the files and encoding the files. An if/else statement is made to log an error if the file isn’t found and if not, return the result in the first variable.


readFile('./content/second.txt','utf8', (err, result)=> {
       if (err) {
           console.log(err);
           return 
       }
       const second = result;
       console.log(result); 
// console logs the result of the second variable that contains the readFile function, which reads and returns the original contents of each .txt file by locating the path of the files and encoding the files. An if/else statement is made to log an error if the file isn’t found and if not, return the result in the second variable.
       
writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`,(err, result) => {
           if (err) {
               console.log(err);
               return 
           }
           console.log('done with the task');
// creates a function called writeFile that both reads and writes each .txt file syn, which will allow you to work with the file system on your computer. An if/else statement is made to log an error if one comes up and if not, return “done with the task”.
       }
       );
   })
});


console.log('starting next task');
// Console logs “starting next task” when the function is completed. This function completes each task to get each .txt file asynchronously.

//==============================================================

// PROBLEM 3
const getTodos = () => {
 const request = new XMLHttpRequest();
// a function is created from the variable, “getTodos”. “Request” is a variable that exchanges data from the website to the server. It’s another way to use the fetch method.


request.addEventListener('readystatechange', ()=>{
// the “Request” variable adds the event listener, “readystatechange”, which will go through this function when the status of the “request” variable status changes. 


 if(request.readyState === 4 && request.status ===200){
   console.log(request.responseText)
    }
   else if (request.readyState === 4){
     console.log('could not fetch the data');
   }
});
// an if/else statement is ran that states that if the request sent was successful, it will console log whatever is returned with the XMLHTTpReqeuest. If it doesn’t go through successfully, it will log that it couldn’t fetch the data.


request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// Initializes the request and uses “GET” to retrieve data.
request.send();
}
// Sends the request 




getTodos();
getTodos();
// The function is ran twice.

//==============================================================

// PROBLEM 4
const { check } = require('express-validator');
// variable that has to include the “express-validator” module.
exports.signupValidation = [
   check('name', 'Name is requied').not().isEmpty(),
   check('email', 'Please include a valid email').isEmail().normalizeEmail({ 
gmail_remove_dots: true }),
   check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]
// exports and checks the sign up validation name, email, and password information
exports.loginValidation = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]
// exports and checks the sign in validation name, email, and password information


// Server.js file
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { signupValidation, loginValidation } = require('./validation.js');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// multiple variables created that require different node.js mdoules and files. “App.use” is used to connect express to other files to get the services from other files.
app.use(cors());
app.get("/", (req, res) => {
  res.send("Node js file upload rest apis");
});
app.post("/register", signupValidation, (req, res, next) => {
  // your registration code
});
app.post("/login", loginValidation, (req, res, next) => {
  // your login code
});
// Handling Errors
app.use((err, req, res, next) => {
  // console.log(err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});
app.listen(3000, () => console.log("Server is running on port 3000"));

//==============================================================

// PROBLEM 5
var mysql=require('mysql');
// “mysql” is created that has to include the “mysql” module.
var connection=mysql.createConnection({
// the “connection” variable connects the mySQL database to your js file that stores the host, user, password, and database.
  host:'localhost',
  user:'your username',
  password:'your password',
  database:'your database name'
});
connection.connect(function(error){
  if(!!error){
    console.log(error);
  }else{
    console.log('Connected!:)');
  }
// an if/else statement is ran if the database gets an error upon connecting. It will log an error if the connection fails, and logs “Connected!” if the connection goes through.
}); 
module.exports = connection;
// exports the data that we got.



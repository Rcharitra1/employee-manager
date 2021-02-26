// require dotenv package to read the properties in the .env file.
// never upload .env file to git.
require('dotenv').config();
//import the express module
const express = require('express');
// import the path utils from Node.
const path = require('path');

// create an instance of express
const app = express();

// create 
const ejs = require('ejs');

//import cors

const cors = require('cors');

//validation

const {body, validationResult}= require('express-validator');

//Register function
const registerService = require('../server/services/registerService.js');

//check if user exists
const userExists= require('./services/userExists.js');


//login function 
const loginService = require('./services/loginService.js');

//get all users

const getUsers = require('../server/services/getUsers.js')

//get cookie-session

const cookSession = require('cookie-session');

//for unique id for session

const {v4: uuid}=require('uuid');



 
// read the value of PORT NODE_EVN variable in the .env file
// when the index.js file starts up this file is read in and
// we can set configuration variables for the application.
// never upload to git...
const PORT =  process.env.PORT || 5000 


//To get access to the name value pairs send in the message Body of POST Request.
 app.use(express.urlencoded({extended:true}))
 app.use(express.json())
 app.use(cors());
 app.use(cookSession({
  name:"session",
  keys:[uuid(), uuid()]
  }))

  


  //set isValid to false


  
  




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Middleware Serving Static Pages from client directory
// second parameter is an configuration object of how we want
// the static file server to run.
app.use(express.static(path.join(__dirname, "../client"), {extensions: ["html", 'htm']})
);




 // session id

 // Routing Middleware.  
 // login route.


 app.get('/login', (req, res)=>
 {
   res.render('login')
 })
 app.post('/login',body('email').isEmail().withMessage('please provide a valid email'), body('password').isLength({min:6, max:10}).withMessage('password is between 6 to 10 characters') , (req, res)=>{
   let {email, password}= req.body;
   let loginUser = {
     email,
     password
   }

   console.log(req.session.isValid)
   const {errors}=validationResult(req);

   if(Object.keys(errors).length>0)
   {
     res.status(400).json(errors);
   }else
   {


    let user = loginService.authenticate(loginUser);


    if(user)
    {
      if(!req.session.isValid){
        req.session.isValid=true;
      }


      res.redirect('/dashboard');
    }
    else{
      res.status(400).send('Password dont match')
    }
   }
      
 })

 app.get('/dashboard', (req, res)=>{
   if(req.session.isValid)
   {
     res.render('dashboard');
   }else
   {
     res.redirect('/login');
   }
 })


 
//register route 

//error checking using express - validator

 app.post('/register',body('fullname').isLength({min:1, max:30}).withMessage('The name needs to be between 1 and 30 characters'), body('email').isEmail().withMessage('pls provide a valid email'), body('password').isLength({min:6, max:10}).withMessage('provide a password between 6 and 10 characters') , (req, res)=>{
 

  const {fullname, email, password}=req.body;
  let {errors} = validationResult(req);
  const newUser = {
    fullname,
    email,
    password
  }



  if(Object.keys(errors).length>0)
  {
    res.status(400).json({errors})
  }
  else
  {

    let user = userExists.findUser(newUser);
    // console.log(user);
    if(user!=undefined)
    {
      res.status(400).send('This email already exists');
    }
    else
    {
   
      registerService.createUser(newUser);


      res.render('login', {title:'login'})
      
      
    }     
  }

})


//Get all users


app.get('/api/users', (req, res)=>{
    res.status(200).json(getUsers.getAllUsers())
      
})

// Final Middleware 
// Catch all for any request not handled while express was
// processing requests. 
// Returns 404 Page from the client directory.
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../client/404.html"));
});



// Tell express app to listen for incomming request on a specific PORT

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});



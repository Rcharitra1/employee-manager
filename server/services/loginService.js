/*
    ** pass the email and password auth with the user.json
    ** read the user.json
    ** array methods map, filter, find, reduce, forEach
    ** Array of object
    ** Array of objects JSON XML SSR built on the server at Runtimer

    **run authentication 
    email ==> email from the form
    password ==> password from email
    {
        req.body.email,
        req.boy.password
    }
*/

const becrypt = require('bcryptjs');
const userExists = require('./userExists');

exports.authenticate = (credentials) =>{
    const {email, password} = {...credentials};
    
    let user= {email, password};
    
    let userFound = userExists.findUser( user);

    let checkUser;
    if(userFound)
    {
      
        let response=checkPassword(userFound, user);
    
 
        if(response)
        {  
            
           
            checkUser=true;
        }else
        {
           checkUser=false;
        }
    }
    

    return checkUser;

 } 
 function checkPassword(userFound, user)
  {
      let {password}={...user};
      let response;
      response = becrypt.compareSync(password, userFound.password)
      return response;
  }

 

//  authenticate({email:'charitra@gmail.com', password:'123'})
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

const fileService = require('./fileService');
 const authenticate = (credentials) =>{
    const {email, password} = {...credentials};
    const users = fileService.getFileContents('../data/users.json');
    console.log(users);
    console.log(email, password)

 } 

 authenticate({email:'user@gmail.com', password:'123456'})
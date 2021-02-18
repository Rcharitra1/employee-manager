

const fileService = require('./fileService');

const becrypt=require('bcryptjs');

const {v4:uuidv4} = require('uuid');





exports.createUser = (userInfo)=>
{
    const {fullname, email, password}= {...userInfo};

    const newUser = {
        id : uuidv4(),
        name: fullname,
        email: email,
        password: password
    }


   becrypt.genSalt(10, (err, salt)=> {
       becrypt.hash(newUser.password, salt, (err, hash)=>{
           if(err)
           {
               throw err;
           }
           newUser.password= hash;
           console.log(newUser);
           fileService.writeFileContents('../data/users.json', newUser);
           const users = fileService.getFileContents('../data/users.json');
           console.log(users);
       })
   })
}


// createUser({name: 'ram', email:'charitra@gmail.com', password:'123'});



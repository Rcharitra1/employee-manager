//function to check user in data.json
const fileService = require('./fileService');

exports.findUser=(userToCheck)=>
 {
    
    const users = fileService.getFileContents('../data/users.json');
     let usersArray=[...Object.values(users)];
     let userFound;
     userFound= usersArray.find(user=> user.email===userToCheck.email);
   
     return userFound;
 }



const fileService=require('./fileService');

exports.getAllUsers=()=>
{
    const users = fileService.getFileContents('../data/users.json');
    const allUsers = [...Object.values(users)];
    // console.log(allUsers);
    return allUsers;


}

// getAllUsers();
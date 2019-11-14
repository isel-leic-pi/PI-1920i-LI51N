'use strict'

//Simplified version with users in memory with passwords, shouldn t have passwords

module.exports= function(){

    let users = [{name:'user1',password:'1234'},{name:'user2',password:'abc'}]
    
    return {
        getAllUsers: getAllUsers
    }

    function getAllUsers(cb){
        setTimeout(()=>cb(null,users),500)  
    }
    
    
}
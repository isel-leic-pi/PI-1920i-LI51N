'use strict'

//This module only serves as an example of an incomplete simplified authentication middleware

module.exports = function(usersData) {

    return function(req, res, next){
        console.log('Authentication')
        if(!req.headers.authorization) return sendUnauthorize(res) 
        next()
    }
}

function sendUnauthorize(res){
    console.log('unauthorize')
    res.status(401)
    res.end()
}

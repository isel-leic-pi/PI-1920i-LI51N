'use strict'

const request = require('request')

module.exports= function(host){

    const baseUrl = `http://${host}`

    return {
        getAllBundles: getAllBundles,
        createBundle: createBundle
    }

    function getAllBundles(cb){
        const options = {
            url : `${baseUrl}/bundles/_search`,
            json : true
        }
        request.get(options, (err,res,body)=>{
            cb(err, body.hits.hits.map(e=>e._source))
        })         
    }
    
    function createBundle(name, description, cb){
        const options = {
            url : `${baseUrl}/bundles/_doc`,
            headers : {'Content-Type' : 'application/json'},
            json:true,
            body :
            {
                'name' : name,
                'description' : description,
                'books' : []
            }
        }
        request.post(options, (err,res,body)=>{
            cb(err, {id : body._id})
        })
    }
}
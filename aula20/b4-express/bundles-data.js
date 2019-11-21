'use strict'

const request = require('request-promise')

module.exports= function(host){

    const baseUrl = `http://${host}`

    return {
        getAllBundles: getAllBundles,
        createBundle: createBundle
    }

    function getAllBundles(){
        const options = {
            method : 'GET',
            url : `${baseUrl}/bundles/_search`,
            json : true
        }
        /*request(options, (err,res,body)=>{
            cb(err, body.hits.hits.map(e=>e._source))
        })*/
        
        return request(options).then(body => body.hits.hits.map(e=>e._source))
    }
    
    async function createBundle(name, description, cb){
        const options = {
            method : 'POST',
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
        /*request(options, (err,res,body)=>{
            cb(err, {id : body._id})
        })*/
        let body = await request(options)
        return {id : body._id}

        //return request(options).then(body => {return {id : body._id}})

    }
}
'use strict'

module.exports= function(){

    let bundles = []
    let nextId = 1
    return {
        getAllBundles: getAllBundles,
        createBundle: createBundle
    }

    function getAllBundles(cb){
        cb(null, bundles)
    }
    
    function createBundle(name, description, cb){
        let id = nextId++
        bundles.push({id: id, name : name, description: description})
        cb(null, {id : id})
    }
}
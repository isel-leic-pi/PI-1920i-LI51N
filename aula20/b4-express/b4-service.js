'use strict'

module.exports = function (booksData, bundlesData){
    
    return {
        getAllBundles: getAllBundles,
        createBundle: createBundle
    }

    function getAllBundles(){
        //bundlesData.getAllBundles( cb /*(err,bundles)=>{cb(err, bundles)}*/)
        return bundlesData.getAllBundles()
    }
    
    function createBundle(name, description){
        //bundlesData.createBundle(name, description, cb /*(err,id)=>{cb(err, id)}*/)
        return bundlesData.createBundle(name, description)
    }
}


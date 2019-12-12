'use strict'

module.exports = function (){
    
    let bundles = [
        {id: 1, name : "B1", description: "bundle1"},
        {id: 2, name : "B2", description: "bundle2"},
        {id: 3, name : "B3", description: "bundle3"}
    ]
    let nextId = 4

    return {
        getBundle: getBundle,
        getAllBundles: getAllBundles,
        createBundle: createBundle
    }

    function getBundle(id){
        return Promise.resolve(bundles.find(b=>b.id==id))
    }

    function getAllBundles(){
        return Promise.resolve(bundles)
    }
    
    function createBundle(name, description){
        let id = nextId++
        bundles.push({id, name, description})
        return Promise.resolve({status:'created', id: id})
    }
}


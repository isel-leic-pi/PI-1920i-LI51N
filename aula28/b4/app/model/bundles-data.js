'use strict'

function BundlesApiUris() {
    const baseUri = "http://localhost:8080/api/"
  
    this.getBundlesUri =  () => `${baseUri}bundles`
    this.getBundleUri =  (id) => `${baseUri}bundles/${id}`
    this.createBundleUri =  () => `${baseUri}bundles`
}

const Uris = new BundlesApiUris()

function getBundle(id){
    return fetch(Uris.getBundleUri(id))
            .then(res => res.json())
}

function getBundles(){
    return fetch(Uris.getBundlesUri())
            .then(res => res.json())
}

function createBundle(name, description){
    const options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body : JSON.stringify({
            name : name,
            description : description
        })
    }

    return fetch(Uris.createBundleUri(), options)
        .then(res => res.json()) 
}

module.exports  = {
    getBundles:getBundles,
    createBundle:createBundle,
    getBundle:getBundle

}
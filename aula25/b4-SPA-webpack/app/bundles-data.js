function getBundles(){
    return fetch("http://localhost:8080/api/bundles")
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

    return fetch("http://localhost:8080/api/bundles", options)
        .then(res => res.json())
    
}

module.exports  = {
    getBundles:getBundles,
    createBundle:createBundle

}
const bundlesData = require('../data/bundles-data')
const templates = require('../templates')

module.exports  = function (id) {

    const mainContent = document.getElementById("#mainContent")
    bundlesData.getBundle(id)
        .then (bundle => 
            mainContent.innerHTML = templates.bundleDetails({bundle})
        )
        .catch(()=>alertContent.innerHTML = templates.info({message : "Something went wrong"}))
}
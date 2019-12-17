'use strict'

const bundlesData = require('../data/bundles-data')
const templates = require('../templates')

module.exports  = function () {

    const mainContent = document.querySelector("#mainContent")
    bundlesData.getBundles()
        .then(bundles => {
            mainContent.innerHTML = templates.bundles({bundles})
            registerCreateForm()
    })
    
    function registerCreateForm() {
        const formCreateBundle = document.querySelector("#createBundle")
        formCreateBundle.addEventListener('submit', handleSubmit)

        function handleSubmit(e) {
            e.preventDefault()
            const inputName = document.querySelector("#inputName")
            const inputDescription = document.querySelector("#inputDescription")
            bundlesData.createBundle(inputName.value, inputDescription.value)
                .then(() => listBundles())
        }
    }

    function listBundles() {
        const bundlesContainer = document.querySelector("#bundlesContainer")
        bundlesData.getBundles()
            .then(bundles => bundlesContainer.innerHTML = template.tableBundlesTemplate({ bundles }))

    }
}
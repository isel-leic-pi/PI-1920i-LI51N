const bundlesData = require('./bundles-data')
const template = require('./templates')

module.exports  = function () {

    const bundlesContainer = document.getElementById("bundlesContainer")
    listBundles()
    registerCreateBundle()

    function registerCreateBundle() {
        const formCreateBundle = document.getElementById("createBundle")
        formCreateBundle.addEventListener('submit', handleSubmit)

        function handleSubmit(e) {
            e.preventDefault()
            const inputName = document.getElementById("inputName")
            const inputDescription = document.getElementById("inputDescription")
            bundlesData.createBundle(inputName.value, inputDescription.value)
                .then(() => listBundles())

        }
    }

    function listBundles() {
        bundlesData.getBundles()
            .then(bundles => bundlesContainer.innerHTML = template.tableBundlesTemplate({ bundles }))

    }


}
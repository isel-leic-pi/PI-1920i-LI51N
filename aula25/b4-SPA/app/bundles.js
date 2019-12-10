

function bundlesScript() {

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
            createBundle(inputName.value, inputDescription.value)
                .then(() => listBundles())

        }
    }

    function listBundles() {
        getBundles()
            .then(bundles => bundlesContainer.innerHTML = tableBundlesTemplate({ bundles }))

    }


}
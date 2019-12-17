const controller = require('./controller/bundles-controller')
const views = require('./view/views')

module.exports = {

    home : {
        controller : controller.home,
        view : views.home
    },

    bundles : {
        controller : controller.getBundles,
        view : views.bundles
    },

    bundleDetails : {
        controller : controller.bundleDetails,
        view : views.bundleDetails
    },

    createBundle : {
        controller : controller.createBundle,
        view : views.createBundle
    }
     
}
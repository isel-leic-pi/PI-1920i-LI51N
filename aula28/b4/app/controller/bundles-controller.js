const data = require('../model/bundles-data')

module.exports = {
  home: async function() {
    return  require('../img/books-1012088_640.jpg')
  },

  getBundles: async function () {
    return data.getBundles()
  },
  
  bundleDetails: async function (id) {
    return data.getBundle(id)
  },
  
  createBundle: async function(bundle) {
    return data.createBundle(bundle.name, bundle.description)
  }
}
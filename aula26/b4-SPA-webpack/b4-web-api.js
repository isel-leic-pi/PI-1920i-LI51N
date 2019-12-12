'use strict'

module.exports = function(router, b4Service){

  router.get('/', getAllBundles)
  router.post('/', createBundle)
  router.get('/:id', getBundle)

  return router

  function getBundle(req, res) {
    b4Service.getBundle(req.params.id).then(bundle => res.status(200).json(bundle))
  }

  function getAllBundles(req, res) {
    b4Service.getAllBundles().then(bundles => res.status(200).json(bundles))
  }

  function createBundle(req, res) {
    console.log(req.body)
    b4Service.createBundle(req.body.name, req.body.description).then(status => res.status(201).json(status.id))

  }
}

  



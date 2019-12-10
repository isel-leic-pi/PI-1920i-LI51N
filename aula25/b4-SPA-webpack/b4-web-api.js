'use strict'

module.exports = function(router, b4Service){

  router.get('/', getAllBundles)
  router.post('/', createBundle)

  return router

  function getAllBundles(req, res) {
    b4Service.getAllBundles().then(processGetAllBundles)

    function processGetAllBundles(bundles) {
      res.status(200).json(bundles)
    }
  }

  function createBundle(req, res) {
    console.log(req.body)
    b4Service.createBundle(req.body.name, req.body.description).then(processCreateBundle)
    function processCreateBundle(id) {
      res.status(201).json(id)
    }
  }
}

  



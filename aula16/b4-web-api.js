'use strict'

module.exports = function(b4Service){

  return {
    getAllBundles: getAllBundles,
    createBundle: createBundle
  }
  
  function getAllBundles(req, res) {
    b4Service.getAllBundles(processGetAllBundles)

    function processGetAllBundles(err, bundles) {
      res.statusCode = 200
      res.setHeader('Content-type', 'application/json')
      res.end(JSON.stringify(bundles))
    }
  }

  function createBundle(req, res) {
    let body = ''
    req.on('data', (chunk) => body += chunk.toString())
    req.on('end', () => {
      let bundle = JSON.parse(body)
      b4Service.createBundle(bundle.name, bundle.description, processCreateBundle)
  
      function processCreateBundle(err, id) {
        res.statusCode = 201
        res.setHeader('Content-type', 'application/json')
        res.end(JSON.stringify(status))
      }
    })
  }
}
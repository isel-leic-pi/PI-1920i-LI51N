const booksService = require('./books-service')

module.exports = {
  getAllBundles: getAllBundles,
  getBundle: getBundle,
  createBundle: createBundle
}

function getAllBundles(req, rsp) {
    booksService.getAllBundles(processGetAllBundles)

    function processGetAllBundles(err, bundles) {
      rsp.setHeader('Content-type', 'application/json')
      rsp.end(JSON.stringify(bundles))
    }
}

function getBundle(req, rsp) {

    booksService.getBundle(req.params.id, processGetBundle)

    function processGetBundle(err, bundle) {
      rsp.setHeader('Content-type', 'application/json')
      rsp.end(JSON.stringify(bundle))
    }
}

function createBundle(req, rsp) {
 
	booksService.createBundle(req.body.name, req.body.description, processCreateBundle)
	function processCreateBundle(err, status) {

	}
}
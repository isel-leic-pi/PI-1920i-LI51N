const http = require('http')
const booksApi = require('./books-web-api')

const router = require('./router');

router.get('/bundles', booksdApi.getAllBundles)
router.post('/bundles', booksApi.createBundle)
router.get('/bundles/:id', booksApi.getBundle)
router.delete('/bundles/:id', booksApi.deleteBundle)
router.put('/bundles/:id', booksApi.updateBundle)
router.put('/bundles/:idBundle/books/:idBook', booksApi.addBookToBundle)

server = http.createServer(router.processRequest)
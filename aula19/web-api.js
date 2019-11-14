module.exports = function(router ,service){

    router.get('/bundles', getBundles)
    router.get('/', rootHandler)

    return router

    function rootHandler(req, res){
        res.send("RootHandler")
    }

    function getBundles(req, res){
        res.send("getBundles")
    }


} 
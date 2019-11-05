'use strict'

const pathHandlers = {
    get : [],
    post : []
}   

function router(req,res){
    console.log(`Received Request - ${req.method} ${req.url}`)
    const reqHandler = pathHandlers[req.method.toLowerCase()]
    reqHandler[0].handler(req,res)
}

router.get = function (p, h){
    pathHandlers.get.push({path:p, handler:h})
}

router.post = function post(p, h){
    pathHandlers.post.push({path:p, handler:h})
}

module.exports = router
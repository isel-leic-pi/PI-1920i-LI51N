
require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

const bundlesScript = require('./bundles')
const templates = require('./templates')
const bookImg = require('./img/books-1012088_640.jpg').default

document.body.innerHTML=templates.main
window.addEventListener('hashchange', hashChangeHandler)
hashChangeHandler()


function hashChangeHandler(){

    const mainContent = document.getElementById('mainContent')

    switch(window.location.hash){
        case '#home' :
            mainContent.innerHTML = templates.home({bookImg})
            break;
        case '#bundles' :
            mainContent.innerHTML = templates.bundles
            bundlesScript()
            break;
        default:
            window.location.hash="#home"
    }


}
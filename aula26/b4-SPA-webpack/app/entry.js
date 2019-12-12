'use strict'

require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
require ('bootstrap')

const bundlesScript = require('./bundles')
const templates = require('./templates')
const bookImg = require('./img/books-1012088_640.jpg')
const bundlesData = require('./bundles-data')

window.addEventListener('hashchange', uglyHandle)
uglyHandle()    

function uglyHandle(){

    const hash = window.location.hash.substring(1)
    const [state, ...args] = hash.split('/')
    const mainContent = document.getElementById('mainContent')
    const alertContent = document.getElementById('alertContent')
    
    switch(state){
        case 'home' :
            mainContent.innerHTML = templates.home({bookImg})
            break;
        case 'bundles' :
            bundlesData.getBundles()
                .then(bundles => {
                    mainContent.innerHTML = templates.bundles({bundles})
                    bundlesScript()
                })
            break;
        case 'bundleDetails' :
            bundlesData.getBundle(args[0])
                .then (bundle => 
                    mainContent.innerHTML = templates.bundleDetails({bundle})
                )
                .catch(()=>alertContent.innerHTML = templates.error({message : "Something went wrong"}))
            break;
        default:
            window.location.hash="home"
    }
}
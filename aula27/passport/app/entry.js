'use strict'

//This code is a sample to be used as a starting point for PI-19/20i project, it is incomplete.

require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
require ('bootstrap')

const homeHandler = require('./handlers/home')
const bundlesHandler = require('./handlers/bundles')
const bundlesDetailsHandler = require('./handlers/bundlesDetails')
const loginHandler = require('./handlers/login')
const logoutHandler = require('./handlers/logout')

window.addEventListener('load', loadHandler)

function loadHandler()
{
    window.addEventListener('hashchange', hashChangeHandle)
    hashChangeHandle()    

    function hashChangeHandle(){

        const hash = window.location.hash.substring(1)
        const [state, ...args] = hash.split('/') 
        switch(state){
            case 'home' :
                homeHandler()
                break;
            case 'bundles' :
                bundlesHandler()
                break;
            case 'bundleDetails' :
                bundlesDetailsHandler(args[0])
                break;
            case 'login' :
                loginHandler()
                break;
            case 'logout' :
                logoutHandler()
                break;
            default:
                window.location.hash="home"
        }
    }
}

'use strict'

require('bootstrap/dist/css/bootstrap.min.css')
require ('bootstrap')
const templates = require('./templates')

module.exports={
    home : home,
    bundles : bundles,
    bundleDetails : bundleDetails,
    createBundle : createBundle
}

function home(bookImg, routeManager){
    routeManager.setMainContent(templates.home({bookImg}))
}

function bundles(bundles, routeManager){
    routeManager.setMainContent(templates.bundles({bundles}))
    const formCreateBundle = document.querySelector("#createBundle")
    formCreateBundle.addEventListener('submit', handleSubmit)

    function handleSubmit(e) {
        e.preventDefault()
        const inputName = document.querySelector("#inputName")
        const inputDescription = document.querySelector("#inputDescription")
        routeManager.changeRoute('createBundle', {name : inputName.value, description : inputDescription.value})
    }
}

function bundleDetails(bundle, routeManager){
    routeManager.setMainContent(templates.bundleDetails({bundle}))
}

function createBundle(id, routeManager){
    routeManager.changeRoute('bundles')
}
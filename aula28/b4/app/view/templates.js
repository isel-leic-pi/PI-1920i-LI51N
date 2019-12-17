'use strict'

const Handlebars = require('handlebars/dist/handlebars')

module.exports = {
    home: Handlebars.compile(require('./templates/home.hbs').default),
    bundles: Handlebars.compile(require('./templates/bundles.hbs').default),
    bundleDetails: Handlebars.compile(require('./templates/bundle-details.hbs').default),
    info: Handlebars.compile(require('./templates/info.hbs').default)
} 
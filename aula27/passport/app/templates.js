'use strict'

const Handlebars = require('../node_modules/handlebars/dist/handlebars')

const tableBundlesTemplate = require('./templates/table-bundles.hbs').default
Handlebars.registerPartial('tableBundlesTemplate', tableBundlesTemplate)

module.exports = {
    tableBundlesTemplate : Handlebars.compile(tableBundlesTemplate),
    home: Handlebars.compile(require('./templates/home.hbs').default),
    bundles: Handlebars.compile(require('./templates/bundles.hbs').default),
    bundleDetails: Handlebars.compile(require('./templates/bundle-details.hbs').default),
    login: Handlebars.compile(require('./templates/login.hbs').default),
    logout: Handlebars.compile(require('./templates/logout.hbs').default),
    info: Handlebars.compile(require('./templates/info.hbs').default)
} 
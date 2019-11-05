'use strict'

const assert = require('assert');

const bundlesData = require('./bundle-data-mem')()
const booksData = require('./books-data-mem')
const b4Service =  require('../b4-service')(booksData,bundlesData)

describe('Test service', function () {
	
	describe('getAllBundles', function () {
        it('should obtain an empty array', done => {
            b4Service.getAllBundles((err,bundles) =>{
                assert.strictEqual(bundles.length,0)
                done()
            })

        })
    })
})
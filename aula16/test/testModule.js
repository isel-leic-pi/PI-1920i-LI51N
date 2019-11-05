const data = require('./bundle-data-mem')()

data.createBundle('b1', 'desc1', (err, id)=>console.log(id))
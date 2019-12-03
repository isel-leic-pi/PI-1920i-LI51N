const express = require('express')
const app = express()

app.use('/files', express.static('public'))
app.get('/api/bundles/:id', getBundle)

app.listen(8080, ()=>console.log('Listening'))

function getBundle(req, res){
    res.status(200).json({name: "B1", description: "Bundle1"})
}
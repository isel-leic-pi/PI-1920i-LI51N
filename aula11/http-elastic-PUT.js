const request = require('request')

request.put('http://localhost:9200/tests', processResponsePut)


function processResponsePut(err, response, body) {
  if(err) {
    return console.log(err)
  }
  console.log(response.statusCode)
  console.log(response.headers)
  console.log(`Response received: ${JSON.stringify(body)}`)
}
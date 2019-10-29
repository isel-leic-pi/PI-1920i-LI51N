const request = require('request')

const optionsPost = { 
  method: 'POST',
  url: 'http://localhost:9200/tests/_doc',
  json: true,
  body: 
   { 
      name : 'test1'
   } 
 };


request(optionsPost, processResponsePost)


function processResponsePost(err, response, body) {
  if(err) {
    return console.log(err)
  }

  console.log(response.statusCode)
  console.log(response.headers)
  console.log(`Response received: ${JSON.stringify(body)}`)
}
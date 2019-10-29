const request = require('request')

 const options = { 
   method: 'GET',
   url: 'https://www.boardgameatlas.com/api/search',
   qs: { name: 'Catan', client_id: 'xxxxxxxx' },
   headers: 
    { 'cache-control': 'no-cache',
      'accept': 'application/json',
      } 
  };


  // or, for simple GET requests
//const options = "https://www.boardgameatlas.com/api/search?name=Catan&client_id=xxxxxxxx"

request(options, processResponse)

function processResponse(err, response, body) {
  if(err) {
    return console.log(err)
  }
  console.log(response.statusCode)
  console.log(response.headers)
  console.log(`Response received: ${body.toString()}`)
}
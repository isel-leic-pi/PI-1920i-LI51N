const templates = require('../templates')

module.exports  = function () {
    const bookImg = require('../img/books-1012088_640.jpg')
    document.querySelector("#mainContent").innerHTML = templates.home({bookImg})
}

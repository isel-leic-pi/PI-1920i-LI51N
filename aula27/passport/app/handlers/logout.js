const templates = require('../templates')

module.exports = () => {
    
    document.querySelector("#mainContent").innerHTML = templates.logout()
    document
        .querySelector('#buttonLogout')
        .addEventListener('click', logoutHandler)
    
    function logoutHandler(ev) {
        ev.preventDefault()
        const url = 'http://localhost:8080/api/auth/logout'
        const options = {
            method: 'POST',
        }
        fetch(url, options)
            .then(res => res.json())
            .then(() => {
                document.querySelector("#alertContent").innerHTML = templates.info({message : "Logout"})
                window.location.hash = "#home"
            })
    }

}
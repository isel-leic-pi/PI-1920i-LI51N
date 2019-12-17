const templates = require('../templates')

module.exports = () => {
   
    document.querySelector("#mainContent").innerHTML = templates.login()
    
    const inputPassword = document.querySelector('#inputPassword')
    const inputUsername = document.querySelector('#inputUsername')
    const buttonLogin = document.querySelector("#buttonLogin")

    buttonLogin.addEventListener('click', handler)

    function handler(ev) {
        ev.preventDefault()    
        const options = {
            method: 'POST',
            body: JSON.stringify({
                'username': inputUsername.value,
                'password': inputPassword.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch('http://localhost:8080/api/auth/login', options)
            .then(res => res.json())
            .then((user) =>{
                document.getElementById("alertContent").innerHTML = templates.info({message : "Login " + user.username})
                window.location.hash = '#home'
            })
    }
}
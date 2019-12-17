'use strict'

const express = require('express')
const expressSession = require('express-session')
const passport = require('passport')

const app = express()

passport.serializeUser(serializeUser)
passport.deserializeUser(deserializeUser)

app.use('/', express.static('public'))
app.use(express.json())
app.use(expressSession({secret : 'PI', resave : false, saveUninitialized:true}))
app.use(passport.initialize())
app.use(passport.session())
app.use('/auth',checkAuthentication)

app.get('/home', homeNotAuthenticated)
app.get('/auth/home', homeAuthenticated)
app.post('/login', login)
app.post('/logout', logout)

app.listen(8080, ()=>console.log('Listening'))

function login(req, res){

    if(authenticateUser(req.body.userName, req.body.password)){
        req.login(req.body.userName, (err) =>{
            console.log("Login called")
            res.json({message: "Login called"})
        })
        return 
    }
    res.json({message: "Not a valid user"})

    function authenticateUser(){return true}

}

function logout(req, res){
    console.log("Logout called")
    req.logout()
    res.json({message: "Logout"})
}




function homeNotAuthenticated(req, res){
    res.send('Hello user unknown')
}

function homeAuthenticated(req, res){
    res.send('Hello ' + req.user)
}

function checkAuthentication(req, res, next){
    if(req.isAuthenticated())
        return next()
    res.status(403).json({message: "Not Authenticated"})
}

function serializeUser(user, done){
    console.log('serializeUser')
    done(null, user)
}

function deserializeUser(user, done){
    console.log('deserializeUser')
    done(null, user)
}
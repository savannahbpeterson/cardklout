require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive');
const session = require('express-session')

const authController = require('./controllers/authController')

const app = express()

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is connected')
})

app.use(bodyParser.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

//AUTHENTICATION
app.post("/auth/login", authController.login);

//users data
// app.get('/api/logout', authController.getUser)

app.listen(SERVER_PORT, () => {
    console.log(`Someone is eaves dropping on port ${SERVER_PORT}`)
})
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive');
const session = require('express-session')

const authCtrl = require('./controllers/authController')
const UDCtrl = require('./controllers/userDataController')

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
app.post("/auth/login", authCtrl.login);

//USERS DATA (CARDS)
// app.get('/api/logout', authController.getUser)
app.get('/home/getUserCards', UDCtrl.getUserCards);


app.listen(SERVER_PORT, () => {
    console.log(`Someone is eaves dropping on port ${SERVER_PORT}`)
})
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive');
const session = require('express-session')

const authCtrl = require('./controllers/authController')
const UDCtrl = require('./controllers/userDataController')
const AddCtrl = require('./controllers/addCardController')
const amazonCrtl = require('./controllers/amazonController')

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
  saveUninitialized: false,
  maxAge: null
}))

//AUTHENTICATION
app.post("/auth/login", authCtrl.login);
app.get('/api/user', authCtrl.getUser)

//USERS DATA (CARDS)
app.get('/home/getUserCards', UDCtrl.getUserCards);
app.delete('/api/delete/:id', UDCtrl.deleteCard)
app.put('/home/edit', UDCtrl.editCard)

//ADD CARD
app.post('/addCard/addNewCard', AddCtrl.addNew)

//IMAGES
app.get('/sign-s3', amazonCrtl.awsS3)

app.listen(SERVER_PORT, () => {
    console.log(`Someone is eaves dropping on port ${SERVER_PORT}`)
})
//Require packages
const express = require('express')
const cors = require('cors')

//App instance
const app = express()

//Middleware
app.use(express.json())
app.use(cors())

//Endpoints
const {getCards, addCard, deleteCard, updateCard} = require('./controller')

app.get('/cards', getCards)
app.post('/cards', addCard)
app.delete('/cards/:id', deleteCard)
app.put('/cards/:id', updateCard)


const {login, register} = require('./usersController')

app.post(`/login`, login)
app.post(`/register`, register)

//App.listen
app.listen(4000, () => console.log('Its time to Duel!'))
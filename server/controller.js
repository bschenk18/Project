const cards = require('./db.json')
globalID = 6

module.exports = {
    getCards: (req, res) => res.status(200).send(cards),

    addCard: (req, res) => {
        let {name, rating, imageURL} = req.body
        
        let newCard = {
            id: globalID,
            name,
            rating,
            imageURL
        }
        cards.push(newCard)

        res.status(200).send(cards)

        globalID++
    },

    deleteCard: (req, res) => {
        let index = cards.findIndex((el) => el.id === +req.params.id)

        cards.splice(index, 1)

        res.status(200).send(cards)
    },

    updateCard: (req, res) => {
        let index = cards.findIndex((el) => el.id === +req.params.id)
        let {type} = req.body

        if(cards[index].rating === 5 && type === 'plus'){
            res.status(400).send('Cannot go above 5!')
          } else if (cards[index].rating === 0 && type === 'minus'){
            res.status(400).send('Cannot go below 0!')
          } else if (type === 'plus'){
            cards[index].rating++
            res.status(200).send(cards)
          } else if (type === 'minus'){
            cards[index].rating--
            res.status(200).send(cards)
          } else {
            res.sendStatus(400)
          }
    }
}

const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)

      const {username, password} = req.body
      for (let i = 0; i < users.length; i++) {
        const existing = bcrypt.compareSync(password, users[i].passwordHash)
        if (users[i].username === username && existing) {

          let returnUser = {...users[i]}
          delete returnUser.passwordHash

          res.status(200).send(returnUser)
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')

        const { username, email, firstName, lastName, password } = req.body

        const salt = bcrypt.genSaltSync(5)
        const passwordHash = bcrypt.hashSync(password, salt)
        let user = {
          username,
          email,
          firstName,
          lastName,
          passwordHash
        }
        // console.log(user)
        users.push(user)
        let userToReturn = {...user}
        delete userToReturn.passwordHash  
        res.status(200).send(userToReturn)
        // console.log(req.body)
        // users.push(req.body)
        // res.status(200).send(req.body)
    }
}
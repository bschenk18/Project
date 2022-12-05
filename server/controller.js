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
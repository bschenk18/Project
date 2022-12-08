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
        
        users.push(user)
        let userToReturn = {...user}
        delete userToReturn.passwordHash  
        res.status(200).send(userToReturn)
    }
}
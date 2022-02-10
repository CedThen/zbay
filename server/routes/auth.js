const { findTargetEmail, createUser, findUser, retrieveOrders } = require('../db')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const { key } = require('./index.js')
const hourInMS = 60 * 60 * 1000

async function registerUser(req, res) {
  const { email, password } = req.body
  const isEmailNew = (await findTargetEmail(email)).length === 0
  if (isEmailNew) {
    await bcrypt.hash(password, 1, async (err, hash) => {
      const newUser = await createUser(email, hash)
      const token = jwt.sign({ sub: newUser.id, email }, key)
      res.send({ newUser, token })
    })
  }
  else {
    res.status(403).send({ err: 'Email already used' })
  }
  // if user exists, return 
}

async function authenticateLogin(req, res) {
  const { email, password } = req.body
  console.log('authenticating login');
  // find user with matching email
  // verify if hashes match
  // if match, return with data and token
  // else return err
  const user = await findUser(email)
  if (user === null) return res.status(403).send({ err: "Login credentials invalid" })
  bcrypt.compare(password, user.password, async (err, result) => {
    if (result) {
      const { id, email, cart } = user
      const token = jwt.sign({ sub: id, email }, key)
      const orders = await retrieveOrders(id)
      res.send({ user: { id: id, email: email, cart: cart || {}, orders }, token })
    } else {
      res.status(403).send({ err: "Login credentials invalid" })
    }
  })
}

module.exports = {
  authenticateLogin,
  registerUser
}
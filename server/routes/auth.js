const { findTargetEmail, createUser } = require('../db')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

async function registerUser(req, res) {
  const { email, password } = req.body
  const isEmailNew = (await findTargetEmail(email)).length === 0
  if (isEmailNew) {
    await bcrypt.hash(password, 1, async (err, hash) => {
      await createUser(email, hash)

      // await createToken, return token
      // token has 
    })
  }
  else {
    res.status(403).send("meep meep")
  }
  // if user exists, return 
}

async function authenticateLogin(req, res) {
  const { email, password } = req.body

}

module.exports = {
  authenticateLogin,
  registerUser
}
const { getUser, createUser } = require('../db')

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

function authenticateLogin(req, res) {
  console.log('auth login', req.body)
  res.send("hello world")
}

async function registerUser(req, res) {
  const { email, password } = req.body
  const isEmailNew = (await getUser(email)).length === 0
  if (isEmailNew) {
    const hashedPassword = bcrypt.hash(password, 10, async (err, hash) => {
      console.log('hash', hash);
      await createUser(email, hashedPassword)
      // await createToken
    })
    // hash password, create user, return token
  }
  else {
    res.status(403).send("meep meep")
  }
  // if user exists, return 
}

module.exports = {
  authenticateLogin,
  registerUser
}
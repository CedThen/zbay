const jwt = require('jsonwebtoken')


const key = 'big kahuna'
const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, key)
    return payload
  } catch (err) {
    console.log('token cannot be verified', err)
  }
}

module.exports = {
  key,
  verifyToken
}
const { verifyToken } = require('./index')
const { updateUserCart } = require('../db/index')
// update cart
async function updateCart(req, res) {
  const { token, cart } = req.body
  const isVerified = verifyToken(token)
  if (isVerified) {
    const updatedCart = await updateUserCart(isVerified.sub, cart)
    res.status(200).send(updatedCart)
  }
  else {
    res.status(403).send({ err: 'Invalid req' })
  }
  // if user exists, return 
}
// submit order ie turn it into order history


// retrieve orders

module.exports = {
  updateCart
}
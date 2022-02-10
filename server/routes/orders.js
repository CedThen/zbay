const { verifyToken } = require('./index')
// update cart
async function updateCart(req, res) {
  const { token, cart } = req.body
  const isVerified = verifyToken(token)
  console.log('isVerified', isVerified);
  res.send('helo')
  // if() 
  // else {
  //   res.status(403).send({ err: 'Invalid req' })
  // }
  // if user exists, return 
}
// submit order ie turn it into order history

// retrieve cart

// retrieve orders

module.exports = {
  updateCart
}
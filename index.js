const express = require('express')
const cors = require('cors')
const data = require('./server/data.json')

const app = express()
const port = process.env.PORT || 3005

const { getUsers } = require('./server/db')


app.use(express.json());
app.use(cors());

app.post('/auth/login', require('./server/routes/auth.js').authenticateLogin)
app.post('/auth/register', require('./server/routes/auth.js').registerUser)
app.put('/api/cart', require('./server/routes/orders.js').updateCart)

app.get('/api/data', (req, res) => {
  res.json(JSON.stringify(data))
})

app.listen(port, () => {
  console.log(`Express listening on port ${port}`)
})

// set up authentication
// set up db
// create apis for data
const express = require('express')
const cors = require('cors')
const data = require('./server/data.json')

const app = express()
const port = process.env.PORT || 3005

const { getUsers } = require('./server/db')


app.use(express.json());
app.use(cors());

// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
//   next();
// });


app.get('/users', async (req, res) => {
  const users = await getUsers();
  console.log('users', users)
  res.send(users)
})

app.get('/data', (req, res) => {
  console.log('fetch req')
  res.json(JSON.stringify(data))
})

app.listen(port, () => {
  console.log(`Express listening on port ${port}`)
})

// set up authentication
// set up db
// create apis for data
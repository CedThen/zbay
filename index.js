const express = require('express')
const cors = require('cors')
const data = require('./server/data.json')

const app = express()
const port = process.env.PORT || 3005

app.use(express.json());
app.use(cors());

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
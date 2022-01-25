const express = require('express')
const cors = require('cors')
const data = require('./server/data.json')

const app = express()
const port = process.env.PORT || 3001


app.get('/', () => {
  console.log(data)
})

app.listen(port, () => {
  console.log(`Express listening on port ${port}`)
})

// set up authentication
// set up db
// create apis for data
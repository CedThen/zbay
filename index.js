const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3001


app.get('/', () => {

})

app.listen(port, () => {
  console.log(`Express listening on port ${port}`)
})

// set up authentication
// set up db
// create apis for data
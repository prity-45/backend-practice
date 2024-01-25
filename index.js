require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('login in to twitter account')
  })

  app.get('/instagram', (req, res) => {
    res.send('login to instagram reels')
  })

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
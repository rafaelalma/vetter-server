require('dotenv').config()
require('./config/config')

const express = require('express')
const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('<h1>Vetter</h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`)
})

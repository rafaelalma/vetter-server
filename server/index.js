require('dotenv').config()
require('./config/config')

const express = require('express')
const app = express()
const PORT = process.env.PORT

const pets = require('./routes/pets')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1>Vetter</h1>')
})

app.use('/pets', pets)

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`)
})

require('dotenv').config()
require('./config/config')

const express = require('express')
const app = express()
const PORT = process.env.PORT

const logger = require('./middleware/logger')
const { logErrors, clientErrorHandler, errorHandler } = require('./middleware/errors')

const pets = require('./routes/pets')

app.use(express.json())

app.use(logger)

app.get('/', (req, res) => {
  res.send('<h1>Vetter</h1>')
})

app.use('/pets', pets)

app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`)
})

require('dotenv').config()
require('./config/config')

const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT

const logger = require('./middleware/logger')
const { logErrors, clientErrorHandler, errorHandler } = require('./middleware/errors')

const pets = require('./routes/pets')
const owners = require('./routes/owners')
const admins = require('./routes/admins')

app.use(cors())
app.use(express.json())
app.use(logger)

app.use('/api/admins', admins)
app.use('/api/owners', owners)
app.use('/api/pets', pets)

app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`)
})

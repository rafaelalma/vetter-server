require('dotenv').config()
require('./config/config')

const express = require('express')
const app = express()
const PORT = process.env.PORT

const pets = require('./routes/pets')

app.use(express.json())

app.use(function logger (req, res, next) {
  console.log(`Request IP: ${req.ip}`)
  console.log(`Request Method: ${req.method}`)
  console.log(`Request date: ${new Date()}`)

  next()
})

app.get('/', (req, res) => {
  res.send('<h1>Vetter</h1>')
})

app.use('/pets', pets)

app.use(function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
})
app.use(function clientErrorHandler (err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({
      error: 'Something failed'
    })
  } else {
    next(err)
  }
})
app.use(function errorHandler (err, req, res, next) {
  res.status(500)
  res.render('error', { error: err })
})

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`)
})

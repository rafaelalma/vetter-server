const express = require('express')
const router = express.Router()

const admins = [
  {
    id: 1,
    first_name: 'Rafael',
    last_name: 'Álvarez',
    address: 'c/ Victoria, 7',
    phone: '629664628',
    email: 'rafaelalma92@gmail.com',
    password: '123456'
  }
]

router.get('/', (req, res) => {
  res.json(admins)
})

module.exports = router

const express = require('express')
const router = express.Router()

const owners = [
  {
    id: 1,
    first_name: 'Alicia',
    last_name: 'Lamarca',
    email: 'alicialamarca@gmail.com',
    phone: '679664632'
  },
  {
    id: 2,
    first_name: 'Rafael',
    last_name: 'Álvarez',
    email: 'rafaelalma92@gmail.com',
    phone: '629664628'
  },
  {
    id: 3,
    first_name: 'Antonio',
    last_name: 'López',
    email: 'antolo@gmail.com',
    phone: '629663328'
  },
  {
    id: 4,
    first_name: 'Lucas',
    last_name: 'Martínez',
    email: 'luma@gmail.com',
    phone: '654321216'
  },
  {
    id: 5,
    first_name: 'Lucía',
    last_name: 'Morales',
    email: 'lumo@gmail.com',
    phone: '623661216'
  }
]

router.get('/', (req, res) => {
  res.json(owners)
})

module.exports = router

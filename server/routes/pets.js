const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('<h2>Pets</h2>')
})

router.post('/', (req, res) => {
  const body = req.body

  if (!body.name) {
    res.status(400).json({
      ok: false,
      message: 'Name is required'
    })
  } else {
    res.json({
      ok: true,
      pet: body
    })
  }
})

router.put('/:id', (req, res) => {
  const id = req.params.id

  res.json({
    ok: true,
    id: id
  })
})

router.delete('/:id', (req, res) => {
  res.send('DELETE request')
})

module.exports = router

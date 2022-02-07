const express = require('express')
const router = express.Router()

const pets = [
  {
    id: 1,
    owner_id: 1,
    name: 'Leo',
    birth_date: '2015-08-10',
    species: 'dog',
    breed: 'pinscher',
    color: 'black and brown',
    vaccination_status: 'current',
    gender: 'male',
    spayed_or_neutered: 'no'
  },
  {
    id: 2,
    owner_id: 2,
    name: 'Alpha',
    birth_date: '2019-09-10',
    species: 'dog',
    breed: 'dobermann',
    color: 'black and brown',
    vaccination_status: 'current',
    gender: 'male',
    spayed_or_neutered: 'no'
  },
  {
    id: 3,
    owner_id: 3,
    name: 'Fify',
    birth_date: '2020-12-13',
    species: 'cat',
    breed: 'unsure',
    color: 'brown',
    vaccination_status: 'past due',
    gender: 'female',
    spayed_or_neutered: 'spayed'
  },
  {
    id: 4,
    owner_id: 3,
    name: 'Fofo',
    birth_date: '2018-01-02',
    species: 'cat',
    breed: 'unsure',
    color: 'white',
    vaccination_status: 'current',
    gender: 'male',
    spayed_or_neutered: 'neutered'
  },
  {
    owner_id: 5,
    name: 'Toby',
    birth_date: '',
    species: 'dog',
    breed: 'beagle',
    color: 'brown and white',
    vaccination_status: 'past due',
    gender: 'male',
    spayed_or_neutered: 'no',
    id: 5
  },
  {
    owner_id: 5,
    name: 'Mira',
    birth_date: '',
    species: 'cat',
    breed: '',
    color: 'brown',
    vaccination_status: 'current',
    gender: 'female',
    spayed_or_neutered: 'no',
    id: 6
  },
  {
    owner_id: 2,
    name: 'Beta',
    birth_date: '',
    species: 'dog',
    breed: '',
    color: '',
    vaccination_status: 'current',
    gender: 'male',
    spayed_or_neutered: 'no',
    id: 7
  },
  {
    owner_id: 2,
    name: 'Gamma',
    birth_date: '',
    species: 'dog',
    breed: '',
    color: '',
    vaccination_status: 'current',
    gender: 'male',
    spayed_or_neutered: 'no',
    id: 8
  }
]

router.get('/', (req, res) => {
  res.json(pets)
})

router.post('/', (req, res) => {
  const body = req.body

  if (!body.name) {
    res.status(400).json({
      ok: false,
      message: 'Name is required'
    })
  } else {
    res.status(201).json({
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
  res.status(204).send('DELETE request')
})

module.exports = router

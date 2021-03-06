const express = require('express')
const router = express.Router()

const pets = require('./pets')
const locations = require('./locations')

router.get('/locations', (req, res) => {
  res.json(locations)
})

router.get('/pets', (req, res) => {
  const { query: { species, breed } } = req
  if (!species && !breed) res.json(pets)

  const filtered = pets.filter(pet => {
    if (species && breed) {
      return pet.species === species && pet.breed === breed
    } else if (species) {
      return pet.species === species
    } else {
      return pet.breed === breed
    }
  })

  res.json(filtered)
})

router.get('/locations/:id', (req, res) => {
  const sentId = parseInt(req.params.id)
  const location = locations.find(location => location.id === sentId)

  if (!location) {
    res.status(404).json({ error: 'not found' })
  } else {
    res.json(location)
  }
})

router.get('/pets/:id', (req, res) => {
  const sentId = parseInt(req.params.id)
  const pet = pets.find(pet => pet.id === sentId)

  if (!pet) {
    res.status(404).json({ error: 'not found' })
  } else {
    res.json(pet)
  }
})

module.exports = router

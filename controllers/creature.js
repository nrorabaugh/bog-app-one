const express = require('express')

const creatureApi = require('../models/creature.js')

const creatureRouter = express.Router()

creatureRouter.get('/creatures', (req, res) => {
  creatureApi.getAllCreatures()
  .then((creatures) => {
    res.json(creatures)
  })
  
})

creatureRouter.get('/creatures/:creatureId', (req, res) => {
  res.json(creatureApi.getCreature(req.params.creatureId))
})

creatureRouter.post('/creatures', (req, res) => {
  res.json(creatureApi.createCreature(req.body))
})

creatureRouter.put('/creatures/:creatureId', (req, res) => {
  res.json(creatureApi.updateCreature(req.params.creatureId, req.body))
})

creatureRouter.delete('/creatures/:creatureId', (req, res) => {
  res.json(creatureApi.deleteCreature(req.params.creatureId))
})

module.exports = {
  creatureRouter
}

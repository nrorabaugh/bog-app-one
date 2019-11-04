const express = require('express')

const creatureApi = require('../models/creature.js')

const creatureRouter = express.Router()

creatureRouter.get('/creatures', (req, res) => {
  creatureApi.getAllCreatures()
  .then((creatures) => {
    res.json(creatures)})
})

creatureRouter.get('/creatures/:creatureId', (req, res) => {
  creatureApi.getCreature(req.params.creatureId)
    .then((creature) => {
      res.json(creature)
    })
})

creatureRouter.post('/creatures', (req, res) => {
  creatureApi.createCreature(req.body)
  .then((creature) => {
    res.json(creature)
  })
})

creatureRouter.put('/creatures/:creatureId', (req, res) => {
  creatureApi.updateCreature(req.params.creatureId, req.body)
  .then((creature) => {
    res.json(creature)
  })
})

creatureRouter.delete('/creatures/:creatureId', (req, res) => {
  creatureApi.deleteCreature(req.params.creatureId)
  .then(() => {
    res.redirect('/creatures')
  })
})

module.exports = {
  creatureRouter
}

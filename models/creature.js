const mongoose = require('./connection.js')

global.sampleModel = [];


const CreatureModelSchema = new mongoose.Schema({
  name: String,
  description: String
})


const CreatureCollection = mongoose.model('Creature', CreatureModelSchema)


const getAllCreatures = () => {
  return CreatureCollection.find({})
}

const getCreature = (creatureId) => {
  return CreatureCollection.findById(creatureId)
}

const createCreature = (newCreature) => {
  return CreatureCollection.create(newCreature)
}

const updateCreature = (creatureId, updatedCreature) => {
  return CreatureCollection.updateOne({_id: creatureId}, updatedCreature)
}

const deleteCreature = (creatureId) => {
  return CreatureCollection.deleteOne({_id: creatureId})
}

module.exports = {
  getAllCreatures,
  getCreature,
  createCreature,
  updateCreature,
  deleteCreature
}

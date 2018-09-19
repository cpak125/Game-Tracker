const mongooes = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: String,
    teams: [TeamSchema]
})

const TeamSchema = new Schema({
    name: String,
    sport: String,
    games: []
})

 const GameSchema = new Schema({
     location: String,
     opposingTeam: String,
     date: String,
     time: String
 })
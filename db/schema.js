const mongooes = require('mongoose')
const Schema = mongoose.Schema

const GameSchema = new Schema({
    location: String,
    opposingTeam: String,
    date: String,
    time: String
})

const TeamSchema = new Schema({
    name: String,
    sport: String,
    games: [GameSchema]
})

const UserSchema = new Schema({
    username: String,
    teams: [TeamSchema]
})

const GameModel = mongoose.model('Game', GameSchema)
const TeamModel = mongoose.model('Team', TeamSchema)
const UserModel = mongoose.model('User', UserSchema)

module.exports = {
    Game: GameModel,
    Team: TeamModel,
    User: UserModel
}


require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const Schema = require('./schema')

const { User, Team, Game } = Schema

const _11_8_18 = new Game({
    location: 'Los Angeles',
    opposingTeam: 'Cleveland Cavaliers',
    date:'11/8/18',
    time: '7:30 PM'

})

const lakers = new Team({
    name: 'Los Angeles Lakers',
    sport: 'NBA',
    games: [_11_8_18]
})

const chris = new User({
    username: 'Chris',
    teams: [lakers]

})


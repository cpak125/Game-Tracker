require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const Schema = require('./schema')

const { User, Team, Game } = Schema

const _11_21_18 = new Game({
    location: 'Cleveland',
    opposingTeam: 'Cleveland Cavaliers',
    date:'11/8/18',
    time: '8:00 PM'

})

const _2_7_19 = new Game({
    location: 'Boston',
    opposingTeam: 'Boston Celtics',
    date:'02/7/19',
    time: '8:00 PM'

})

const lakers = new Team({
    name: 'Los Angeles Lakers',
    sport: 'NBA',
    games: [_11_21_18,_2_7_19]
})

const chris = new User({
    username: 'Chris',
    teams: [lakers]

})

User.deleteMany()
    .then(() => {
        return User.insertMany([chris])
    })
    .then(() => {
        console.log('Done Seeding!')
        mongoose.connection.close()
    })

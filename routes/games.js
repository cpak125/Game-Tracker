const express = require('express');
const router = express.Router({ mergeParams: true });
const { User, Game } = require('../db/schema')

// INDEX, SHOW ALL
router.get('/', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            const team = user.teams.id(req.params.teamId)
            const games = team.games
            res.render('games/index', {
                userId: req.params.userId,
                teamId: req.params.teamId,
                team,
                games

            })
        })

})


// NEW, RENDER NEW FORM
router.get('/new', (req, res) => {

    res.render('games/new', {
        userId: req.params.userId,
        teamId: req.params.teamId
    })
})


// SHOW,SHOW ONE



// EDIT, RENDER EDIT FORM



// CREATE
router.post('/', (req, res) => {

    const newGame = new Game(req.body)

    User.findById(req.params.userId)
        .then((user) => {
            const team = user.teams.id(req.params.teamId)
            team.games.push(newGame)
            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${req.params.userId}/teams/${req.params.teamId}/games`)
        })
})


// UPDATE



//DELETE
router.delete('/:id', (req, res) => {
     
    User.findById(req.params.userId)
        .then((user) => {
            const team = user.teams.id(req.params.teamId)
            team.games.remove(req.params.id)
            return user.save()

        })
        .then(() => {
            res.redirect(`/users/${req.params.userId}/teams/${req.params.teamId}/games`)
        })
        .catch((error) => {
            console.log(error)
        })
})

module.exports = router


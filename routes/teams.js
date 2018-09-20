const express = require('express');
const router = express.Router({ mergeParams: true });
const { User, Team } = require('../db/schema')

// INDEX, SHOW ALL
router.get('/', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            res.render('teams/index', {
                userId: req.params.userId,
                teams: user.teams
            })
        })
        .catch(error => {
            console.log(error)
        })
})



// NEW, RENDER NEW FORM
router.get('/new', (req, res) => {
    res.render('teams/new', {
        userId: req.params.userId
    })
})


// SHOW,SHOW ONE



// EDIT, RENDER EDIT FORM



// CREATE
router.post('/', (req, res) => {

    User.findById(req.params.userId)
        .then((user) => {
            const newTeam = new Team(req.body)
            user.teams.push(newTeam)
            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${req.params.userId}/teams`)
        })
})


// UPDATE



//DELETE

module.exports = router
const express = require('express');
const router = express.Router({ mergeParams: true });
const { User, Team } = require('../db/schema')

// INDEX, SHOW ALL


// NEW, RENDER NEW FORM
router.get('/new', (req, res) => {
    res.render('teams/new', {
        userId: req.params.userId
    })
})


// SHOW,SHOW ONE
router.get('/:id', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            res.render('teams/show', {
                userId: req.params.userId,
                team: user.teams.id(req.params.id),
                
            })
        })
})

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
            res.redirect(`/users/${req.params.userId}`)
        })
        .catch((error) => {
            console.log(error)
        })
})


// UPDATE



//DELETE

router.delete('/:id', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            user.teams.remove(req.params.id)
            return user.save()

        })
        .then(() => {
            res.redirect(`/users/${req.params.userId}`)

        })
        .catch((error) => {
            console.log(error)
        })
})

module.exports = router
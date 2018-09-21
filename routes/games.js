const express = require('express');
const router = express.Router({ mergeParams: true });
const { User } = require('../db/schema')

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



// SHOW,SHOW ONE



// EDIT, RENDER EDIT FORM



// CREATE



// UPDATE



//DELETE

module.exports = router


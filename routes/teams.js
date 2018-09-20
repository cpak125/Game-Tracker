const express = require('express');
const router = express.Router({ mergeParams: true });
const { User } = require('../db/schema')

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



// SHOW,SHOW ONE



// EDIT, RENDER EDIT FORM



// CREATE



// UPDATE



//DELETE

module.exports = router
var express = require('express')
var router = express.Router()
const { User } = require('../db/schema')

//INDEX, SHOW ALL USERS
router.get('/', function (req, res) {
  User.find()
    .then((users) => {
      res.render('users/index', { users })
    })

})

// NEW, RENDER NEW FORM
router.get('/new', (req, res) => {
  res.render('users/new')
})

// SHOW,SHOW ONE
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.render('users/show', { user })
    })
})

// EDIT, RENDER EDIT FORM



// CREATE
router.post('/', (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.redirect(`/users/${user._id}`)
    })

})


// UPDATE



//DELETE
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/users')
    })
})


module.exports = router

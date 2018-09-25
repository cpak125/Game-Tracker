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
      res.render('users/show', { 
        user,
        teams: user.teams,
        userId: req.params.userId

       })
    })

})

// EDIT, RENDER EDIT FORM
router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.render('users/edit', { user })
    })

})

// CREATE
router.post('/', (req, res) => {
  User.create(req.body)
    .then(() => {
      res.redirect('/users/')
    })

})

// UPDATE
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect('/users/')
    })

})


//DELETE
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/users/')
    })
})


module.exports = router

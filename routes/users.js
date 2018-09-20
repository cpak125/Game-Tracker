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


module.exports = router

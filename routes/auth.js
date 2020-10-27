const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')
const bcrypt = require('bcrypt')

router
  .route('/registr')
  .get((req, res) => {
    res.render('auth/registr')
  })
  .post(async (req, res) => {
    console.log(req.body)
    const user = await User.create({
      userName: req.body.userName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
    })
    console.log(user)

    req.session.user = user
    res.redirect('/')
  })

router.get('/logout', async (req, res) => {
  if (req.session.user) {
    await req.session.destroy()
    res.clearCookie('user_sid')
    res.redirect('/auth/registr')
  }
})

router
  .route('/login')
  .get((req, res) => {
    res.render('auth/login')
  })
  .post(async (req, res) => {
    const { userName, password } = req.body
    const user = await User.findOne({
      userName,
    })
    console.log(user.userName)
    if (bcrypt.compareSync(password, user.password)) {
      req.session.user = user
      res.redirect('/')
    } else {
      console.log('FAIL')
    }
  })

module.exports = router

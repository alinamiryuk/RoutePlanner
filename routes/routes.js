const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')
const Route = require('../models/route')

router
  .route('/new')
  .get((req, res) => {
    res.render('routes/new')
  })
  .post(async (req, res) => {
    const creator = req.session.user._id
    const {
      routeTitle,
      latitude,
      longitude,
      datetimeStart,
      datetimeFinish,
      description,
    } = req.body
    const newRoute = await Route.create({
      routeTitle,
      description,
      coordinates: [latitude, longitude],
      creator,
      datetimeStart,
      datetimeFinish,
    })
  })

router
  .route('/edit/:id')
  .get(async (req, res) => {
    const id = req.params.id

    const routeByID = await Route.findById(id)
    res.render('routes/edit', { routeByID })
  })
  .post(async (req, res) => {
    const id = req.params.id
    console.log(id)
    const {
      routeTitle,
      latitude,
      longitude,
      datetimeStart,
      datetimeFinish,
      description,
    } = req.body
    const routeByID = await Route.findByIdAndUpdate(
      { _id: id },
      {
        routeTitle,
        latitude,
        longitude,
        datetimeStart,
        datetimeFinish,
        description,
      }
    )
    res.json({
      success: true,
    })
  })

router.get('/show/:id', async (req, res) => {
  const id = req.params.id
  console.log(id)
  const routeByID = await Route.findById(id)
  res.render('routes/show', { routeByID })
})

router.delete('/:id', async (req, res) => {
  const del = await Route.findOneAndRemove({ _id: req.params.id })
  return res.render('main')
})

module.exports = router

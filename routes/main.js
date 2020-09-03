const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Route = require('../models/route');
const User = require('../models/user');


router.get('/', async (req, res) => {
  const routes = await Route.find({});
  const sortRoutes = routes.sort(function(a, b){let dateA=new Date(a.datetime), dateB=new Date(b.datetime)
    return dateA-dateB})

res.render('main', { routes });
})

module.exports = router;

const mongoose = require('mongoose')

module.exports = mongoose.model('user', {
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  routesCreated: [
    {
      type: mongoose.ObjectId,
      ref: 'route',
    },
  ],
  routesAccess: [
    {
      type: mongoose.ObjectId,
      ref: 'route',
    },
  ],
  friends: [
    {
      type: mongoose.ObjectId,
    },
  ],
})

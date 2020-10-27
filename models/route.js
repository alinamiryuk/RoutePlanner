const mongoose = require('mongoose')

module.exports = mongoose.model('route', {
  routeTitle: String,
  description: String,
  coordinates: [Array],
  creator: {
    type: mongoose.ObjectId,
    ref: 'user',
  },
  fellows: [
    {
      type: mongoose.ObjectId,
      ref: 'user',
    },
  ],
  datetimeStart: String,
  datetimeFinish: String,
})

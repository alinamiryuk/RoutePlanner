module.exports.setLocalsVariable = (req, res, next) => {
  if (req.session.user) {
    res.locals.sessionBool = true
    res.locals.uName = req.session.user.userName
    res.locals.idUser = req.session.user._id
  } else {
    res.locals.sessionBool = false
  }
  next()
}

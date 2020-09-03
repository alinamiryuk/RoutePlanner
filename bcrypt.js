const bcrypt = require('bcrypt')

const salt = 10
const password = 'qweqwe'

const secret = bcrypt.hashSync(password, salt)
console.log(secret);

console.log(bcrypt.compareSync(password, secret))

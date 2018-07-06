const path = require('path')
const mongoose = require('mongoose')

require('dotenv').config({ path: path.join(process.cwd(), 'env') })

const { DB_HOST } = process.env

function initDb () {
  return mongoose.connect(DB_HOST)
}

module.exports = initDb

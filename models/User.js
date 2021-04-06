const { DataTypes } = require('sequelize')
const db = require('../db')

module.exports = db.define('user', {
  username: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING
  }
})
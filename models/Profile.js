const { DataTypes } = require('sequelize')
const db = require('../db')

module.exports = db.define('profile', {
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  aboutMe: {
    type: DataTypes.TEXT
  },
  birthdate: {
    type: DataTypes.DATEONLY
  }
})
const { DataTypes } = require('sequelize')
const db = require('../db')

module.exports = db.define('dog', {
  name: {
    type: DataTypes.STRING
  },
  sex: {
    type: DataTypes.ENUM('M', 'F')
  },
  breed: {
    type: DataTypes.STRING
  },
  birthdate: {
    type: DataTypes.DATEONLY
  }
})
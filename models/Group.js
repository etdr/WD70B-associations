const { DataTypes } = require('sequelize')
const db = require('../db')

module.exports = db.define('group', {
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  }
})
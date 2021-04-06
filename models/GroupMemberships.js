const { DataTypes } = require('sequelize')
const db = require('../db')

module.exports = db.define('groupmemberships', {
  role: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
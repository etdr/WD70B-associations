const Sequelize = require('sequelize')

const db = new Sequelize(process.env.DBSTRING)

module.exports = db
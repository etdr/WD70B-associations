const User = require('./User')
const Dog = require('./Dog')
const Profile = require('./Profile')
const Group = require('./Group')
const GM = require('./GroupMemberships')

User.hasOne(Profile)
Profile.belongsTo(User)

User.hasMany(Dog)
Dog.belongsTo(User)

User.belongsToMany(Dog, {through: 'likes', as: 'Likee'})
Dog.belongsToMany(User, {through: 'likes', as: 'Liker'})

User.belongsToMany(Group, {through: GM})
Group.belongsToMany(User, {through: GM})

module.exports = {
  User,
  Dog,
  Profile,
  Group,
  GM
}
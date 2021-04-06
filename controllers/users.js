const router = require('express').Router()
const { User, Dog, Group } = require('../models/index')


router.get('/all', async (req, res) => {
  try {
    const all = await User.findAll()
    res.json(all)
  } catch (error) {
    res.json({ error })
  }
})

// router.get('/dog/:did', async (req, res) => {
//   try {
    


//   } catch (err) {
//     res.json({ error: err })
//   }
// })

router.get('/group/:gid', async (req, res) => {
  try {
    // METHOD 1 (eager)
    // const group = await Group.findOne({
    //   where: {id: req.params.gid},
    //   include: {
    //     model: User,
    //     attributes: ['id']
    //   }
    // })
    // res.json(group.users)

    // METHOD 2 (lazy with special methods)
    const group = await Group.findOne({where: {id: req.params.gid}})
    const users = await group.getUsers()
    res.json(users)

  } catch (err) {
    res.json({ error: err })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const one = await User.findOne({ where: { id: req.params.id }})
    res.json(one)
  } catch (err) {
    res.json({ error: err })
  }
})

router.post('/', async (req, res) => {
  try {
    const result = await User.create({
      username: req.body.user.username,
      password: req.body.user.password
    }) 
    res.json(result)
  } catch (err) {
    res.json({ error: err })
  }
})


module.exports = router
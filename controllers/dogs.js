const router = require('express').Router()
const { User, Dog } = require('../models/index')


router.get('/all', async (req, res) => {
  try {
    const all = await Dog.findAll()
    res.json(all)
  } catch (error) {
    res.json({ error })
  }
})

router.get('/user/:uid', async (req, res) => {
  try {
    // METHOD 1 (eager loading)
    // const user = await User.findOne({
    //   where: { id: req.params.uid },
    //   include: Dog
    // })
    // res.json(user)

    // METHOD 2 (lazy loading)
    const user = await User.findOne({ where: { id: req.params.uid }})
    const dogs = await user.getDogs()
    res.json(dogs)

    // METHOD 3 (direct)
    // const dogs = await Dog.findAll({
    //   where: { userId: req.params.uid }
    // })
    // res.json(dogs)


  } catch (err) {
    res.json({ error: err })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const one = await Dog.findOne({ where: { id: req.params.id }})
    res.json(one)
  } catch (err) {
    res.json({ error: err })
  }
})

router.post('/', async (req, res) => {
  try {
    const result = await Dog.create({
      name: req.body.dog.name,
      sex: req.body.dog.sex,
      breed: req.body.dog.breed,
      birthdate: req.body.dog.birthdate,
      userId: req.body.userId
    })

    res.json(result)

  } catch (err) {
    res.json({ error: err })
  }
})


module.exports = router
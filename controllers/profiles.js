const router = require('express').Router()
const { User, Profile } = require('../models/index')


router.get('/all', async (req, res) => {
  try {
    const all = await Profile.findAll()
    res.json(all)
  } catch (error) {
    res.json({ error })
  }
})

router.get('/user/:uid', async (req, res) => {
  try {
    // METHOD 1 (eager loading)
    const user = await User.findOne({
      where: { id: req.params.uid },
      include: Profile
    })
    res.json(user)

    // METHOD 2 (lazy loading)
    // const user = await User.findOne({ where: { id: req.params.uid }})
    // const profile = await user.getProfile()
    // res.json(profile)

    // METHOD 3 (direct)
    // const profile = await Profile.findOne({
    //   where: { userId: req.params.uid }
    // })
    // res.json(profile)


  } catch (err) {
    res.json({ error: err })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const one = await Profile.findOne({ where: { id: req.params.id }})
    res.json(one)
  } catch (err) {
    res.json({ error: err })
  }
})

router.post('/', async (req, res) => {
  try {
    const result = await Profile.create({
      firstName: req.body.profile.firstName,
      lastName: req.body.profile.lastName,
      aboutMe: req.body.profile.aboutMe,
      birthdate: req.body.profile.birthdate,
      userId: req.body.userId
    })
    res.json(result)
  } catch (err) {
    res.json({ error: err })
  }
})




module.exports = router
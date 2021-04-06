const router = require('express').Router()
const { User, Dog } = require('../models/index')


router.post('/user/:uid/dog/:did', async (req, res) => {
  try {
    // METHOD 1 (lazy using special methods)
    const user = await User.findOne({ where: {id: req.params.uid}})
    const dog = await Dog.findOne({where: { id: req.params.did}})
    const result = await user.addLikee(dog)
    res.json(result)

  } catch (err) {
    res.json({ error: err })
  }
})

router.delete('/user/:uid/dog/:did', async (req, res) => {
  try {
    const user = await User.findOne({ where: {id: req.params.uid}})
    const result = await user.removeLikee(req.params.did)

    res.json(result)


  } catch (err) {
    res.json({ error: err })
  }
})




module.exports = router
const router = require('express').Router()
const { User, Dog, Group, GM } = require('../models/index')


router.get('/all', async (req, res) => {
  try {
    const all = await Group.findAll()
    res.json(all)
  } catch (error) {
    res.json({ error })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const one = await Group.findOne({ where: { id: req.params.id }})
    res.json(one)
  } catch (err) {
    res.json({ error: err })
  }
})

router.post('/', async (req, res) => {
  try {
    const result = await Group.create({
      name: req.body.group.name,
      description: req.body.group.description
    })

    res.json(result)
  } catch (err) {
    res.json({ error: err })
  }
})

router.post('/:gid/addmember/:uid', async (req, res) => {
  try {
    // DIRECT METHOD
    const result = await GM.create({
      userId: req.params.uid,
      groupId: req.params.gid,
      role: req.body.role
    })

    // INDIRECT METHOD
    // don't touch the through table directly,
    // use special methods

    res.json(result)
  } catch (err) {
    res.json({ error: err })
  }
})



module.exports = router
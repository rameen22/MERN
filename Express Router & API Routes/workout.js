const express = require('express')

const router = express.Router()

//to get all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

//GET single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single workout'})
})

//POST a workout
router.post('/', (req, res) => {
    res.json({mssg: 'post a workout'})
})
//DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

//UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'patch a workout'})
})


//exporting routers
module.exports = router

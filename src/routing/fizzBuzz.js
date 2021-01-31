const express = require('express')
const router = express.Router()
const FizzBuzzController = require('../controller/fizzBuzzController')
const validateParams = require('../validator')

router.get('/:count', validateParams.validateParams([
    {
        param_key: 'count',
        required: true,
        type: 'number',
    }]), FizzBuzzController.getFizzBuzz);

router.all('/', (req, res) => {
    res.status(404).send('Route not found.')
})

module.exports = router;
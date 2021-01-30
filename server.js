const express = require('express')
const router = require('./src/routing/fizzBuzz')
const app = express()

app.use('/api/fizzbuzz', router)

app.listen(3001, () => {
    console.log('server running at 3001 port')
})

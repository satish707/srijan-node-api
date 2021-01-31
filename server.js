const express = require('express')
const router = require('./src/routing/fizzBuzz')
const app = express()

app.use('/api/fizzbuzz', router)

var server = app.listen(process.env.PORT || 3000, () => {
    console.log('server running at 3001 port')
})

module.exports = server;

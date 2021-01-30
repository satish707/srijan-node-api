const getFizzBuzz = require('../Utill');
const FizzBuzzController = {
    getFizzBuzz: function (req, res) {
        const data = getFizzBuzz(req.params.count);
        res.send(data).status(200);
    }
}

module.exports = FizzBuzzController;
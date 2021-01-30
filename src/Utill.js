function getFizzBuzz(count) {
    return Array.apply(null, {length: count}).map(function(val, index) {
        return (++index%3?'':'Fizz')+(index%5?'':'Buzz')||index;
      })
}

module.exports = getFizzBuzz;